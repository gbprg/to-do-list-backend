import { client } from '../../prisma/client';
import bcrypt from 'bcrypt';

interface ICreateUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  async execute({ name, email, password }: ICreateUserRequest) {
    const hashedPassword = await bcrypt.hash(password, 10);

    return await client.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }
}

export { CreateUserUseCase };
