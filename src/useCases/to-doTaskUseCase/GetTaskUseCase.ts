import { client } from '../../prisma/client';

interface IGetTasksRequest {
  userId: string;
  completed?: boolean;
}

class GetTaskUseCase {
  async execute({ userId, completed }: IGetTasksRequest) {
    const tasks = await client.task.findMany({
      where: {
        userId,
        ...(completed !== undefined && { completed }),
      },
    });

    return tasks;
  }
}

export { GetTaskUseCase };
