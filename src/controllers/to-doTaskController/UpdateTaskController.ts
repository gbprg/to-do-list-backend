import { FastifyRequest, FastifyReply } from 'fastify';
import { UpdateTaskUseCase } from '../../useCases/to-doTaskUseCase/UpdateTaskUseCase';

class UpdateTaskController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const { title, description, completed } = request.body as {
      title?: string;
      description?: string;
      completed?: boolean;
    };

    console.log("Id da tarefa: ", id);

    const updateTaskUseCase = new UpdateTaskUseCase();

    try {
      const updatedTask = await updateTaskUseCase.execute({ id, title, description, completed });
      return reply.send(updatedTask);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro inesperado.';
      return reply.status(400).send({ error: errorMessage });
    }
  }
}

export { UpdateTaskController };
