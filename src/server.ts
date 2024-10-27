import "dotenv/config";
import fastify from "fastify";
import { routes } from "./routes";

const app = fastify({
  logger: true,
});

app.get("/", () => {
  return "its running..."
})

app.register(routes, {
  prefix: "/api",
});

app.listen({ port: 3333 }).then(() => {
  console.log("Start server running...")
})