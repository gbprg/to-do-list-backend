import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserUseCase } from '../../useCases/userUseCase/CreateUserUseCase';

class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password } = request.body as {
      name: string;
      email: string;
      password: string;
    };

    const createUserUseCase = new CreateUserUseCase();

    try {
      const user = await createUserUseCase.execute({ name, email, password });
      return reply.status(201).send(user);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro inesperado.';
      return reply.status(400).send({ error: errorMessage });
    }
  }
}

export { CreateUserController };
