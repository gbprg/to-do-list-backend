import { FastifyInstance, FastifyPluginCallback } from "fastify";
import { UserRoutes } from "./UserRoutes";

export const routes: FastifyPluginCallback = async (app: FastifyInstance) => {
  await app.register(UserRoutes)
}