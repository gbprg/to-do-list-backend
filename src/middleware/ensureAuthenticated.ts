import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";

export function ensureAuthenticated(
  request: FastifyRequest,
  reply: FastifyReply,
  next: () => void
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return reply.status(401).send({
      message: "Unauthorized",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
    (request as unknown as Record<string, unknown>).userId = decodedToken.userId;
    return next();
  } catch (error) {
    return reply.status(401).send({
      message: 'token.expired',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
