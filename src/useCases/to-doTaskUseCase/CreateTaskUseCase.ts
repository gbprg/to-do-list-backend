import { client } from '../../prisma/client';

interface ICreateTaskRequest {
  title: string;
  description?: string;
  userId: string;
}

class CreateTaskUseCase {
  async execute({ title, description, userId }: ICreateTaskRequest) {
    const task = await client.task.create({
      data: {
        title,
        description,
        userId,
      },
    });

    return task;
  }
}

export { CreateTaskUseCase };
