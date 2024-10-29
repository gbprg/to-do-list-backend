import { FastifyReply, FastifyRequest } from 'fastify';
import { GetTaskUseCase } from '../../useCases/to-doTaskUseCase/GetTaskUseCase';

class GetTasksController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const userId = request.userId;

    const { completed } = request.query as { completed?: boolean };

    const getTasksUseCase = new GetTaskUseCase();

    try {
      const tasks = await getTasksUseCase.execute({ userId, completed });
      return reply.send(tasks);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro inesperado.';
      return reply.status(400).send({ error: errorMessage });
    }
  }
}

export { GetTasksController };
