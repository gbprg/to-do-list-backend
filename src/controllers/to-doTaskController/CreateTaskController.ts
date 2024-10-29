import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateTaskUseCase } from '../../useCases/to-doTaskUseCase/CreateTaskUseCase';

class CreateTaskController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { title, description } = request.body as {
      title: string;
      description?: string;
    };

    const userId = (request as unknown as Record<string, unknown>).userId; // Obtém o userId

    if (!userId) {
      return reply.status(400).send({ error: "User ID is missing in the request." });
    }

    const createTaskUseCase = new CreateTaskUseCase();

    try {
      const task = await createTaskUseCase.execute({ title, description, userId: userId as string });
      return reply.status(201).send(task);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro inesperado.';
      return reply.status(400).send({ error: errorMessage });
    }
  }
}

export { CreateTaskController };
