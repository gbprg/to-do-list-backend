import { FastifyInstance } from "fastify";
import { CreateUserController } from "../../controllers/userController/CreateUserController";

export const UserRoutes = (app: FastifyInstance) => {
  const createUserController = new CreateUserController();

  app.post("/auth/register", createUserController.handle);
}