import { client } from '../../prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface ILoginUserRequest {
  email: string;
  password: string;
}

class LoginUserUseCase {
  async execute({ email, password }: ILoginUserRequest) {
    const user = await client.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error('Usuário ou senha incorretos.');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Usuário ou senha incorretos.');
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    });

    return { token };
  }
}

export { LoginUserUseCase };
