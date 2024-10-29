import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteTaskUseCase } from '../../useCases/to-doTaskUseCase/DeleteTaskUseCase';

class DeleteTaskController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };

    const deleteTaskUseCase = new DeleteTaskUseCase();

    try {
      await deleteTaskUseCase.execute(id);
      return reply.status(204).send();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro inesperado.';
      return reply.status(400).send({ error: errorMessage });
    }
  }
}

export { DeleteTaskController };
