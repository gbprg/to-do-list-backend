import { client } from '../../prisma/client';

interface IUpdateTaskRequest {
  id: string;
  title?: string;
  description?: string;
  completed?: boolean;
}

class UpdateTaskUseCase {
  async execute({ id, title, description, completed }: IUpdateTaskRequest) {
    const updatedTask = await client.task.update({
      where: { id },
      data: { title, description, completed },
    });

    return updatedTask;
  }
}

export { UpdateTaskUseCase };
