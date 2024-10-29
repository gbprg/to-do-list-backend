import { FastifyInstance, FastifyPluginCallback } from "fastify";
import { UserRoutes } from "./UserRoutes";
import { TaskRoutes } from "./TaskRoutes";

export const routes: FastifyPluginCallback = async (app: FastifyInstance) => {
  await app.register(UserRoutes)
  await app.register(TaskRoutes)
}