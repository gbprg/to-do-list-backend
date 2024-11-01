import "dotenv/config";
import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";


const app = fastify({
  logger: true,
});
app.register(cors, {
  origin: "*",
  hook: "preHandler",
})

app.get("/", () => {
  return "its running..."
})

app.register(routes, {
  prefix: "/api",
});

app.listen({ port: 3333 }).then(() => {
  console.log("Start server running...")
})