import { FastifyReply, FastifyRequest } from 'fastify';
import { verify } from 'jsonwebtoken';

export function ensureAuthenticated(
  request: FastifyRequest,
  reply: FastifyReply,
  next: () => void
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return reply.status(401).send({
      message: 'Unauthorized',
    });
  }

  const [, token] = authToken.split(' ');

  try {
    verify(token, process.env.JWT_SECRET as string);
    return next();
  } catch (error) {
    return reply.status(401).send({
      message: 'token.expired',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }

}
