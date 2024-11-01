import { client } from "../../prisma/client";

class ShowUserUseCase {
  async execute(userId: string) {
    const user = await client.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
      }
    });

    return user;
  }
}

export { ShowUserUseCase }