import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import { ShowUserUseCase } from "../../useCases/userUseCase/ShowUserUseCase";

class ShowUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const token = request.headers.authorization?.split(" ")[1];

    if (!token) {
      return reply.status(401).send({
        message: "Não autorizado",
      });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
      const userId = decoded.userId;
      const showUserUseCase = new ShowUserUseCase();
      const user = await showUserUseCase.execute(userId);
      return reply.status(200).send({ user });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return reply.status(401).send({ error: "Invalid token" });
    }
  }
}

export { ShowUserController }