import fastify from "fastify";

const app = fastify({
  logger: true,
});

app.get("/", () => {
  return "its running..."
})

app.listen({ port: 3333 }).then(() => {
  console.log("Start server running...")
})