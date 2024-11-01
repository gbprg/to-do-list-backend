import { FastifyInstance } from "fastify";
import { CreateUserController } from "../../controllers/userController/CreateUserController";
import { LoginUserController } from "../../controllers/authenticationController/LoginUserController";
import { ShowUserController } from "../../controllers/userController/ShowUserController";
import { ensureAuthenticated } from "../../middleware/ensureAuthenticated";

export const UserRoutes = (app: FastifyInstance) => {
  const createUserController = new CreateUserController();
  const loginUserController = new LoginUserController();
  const showUserController = new ShowUserController();

  app.post("/auth/register", createUserController.handle);
  app.post("/auth/login", loginUserController.handle);
  app.get("/users/me", { preHandler: [ensureAuthenticated] }, showUserController.handle);
}