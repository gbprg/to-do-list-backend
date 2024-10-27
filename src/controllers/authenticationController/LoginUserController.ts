import { FastifyRequest, FastifyReply } from 'fastify';
import { LoginUserUseCase } from '../../useCases/authenticationUseCase/LoginUserUseCase';

class LoginUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = request.body as {
      email: string;
      password: string;
    };

    const loginUserUseCase = new LoginUserUseCase();

    try {
      const { token } = await loginUserUseCase.execute({ email, password });
      return reply.status(200).send({ token });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro inesperado.';
      return reply.status(400).send({ error: errorMessage });
    }
  }
}

export { LoginUserController };
