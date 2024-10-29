import { client } from '../../prisma/client';

class DeleteTaskUseCase {
  async execute(id: string) {
    await client.task.delete({
      where: { id },
    });
  }
}

export { DeleteTaskUseCase };
