import { FastifyInstance } from "fastify";
import { CreateUserController } from "../../controllers/userController/CreateUserController";
import { LoginUserController } from "../../controllers/authenticationController/LoginUserController";

export const UserRoutes = (app: FastifyInstance) => {
  const createUserController = new CreateUserController();
  const loginUserController = new LoginUserController();

  app.post("/auth/register", createUserController.handle);
  app.post("/auth/login", loginUserController.handle);
}