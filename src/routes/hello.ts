import { FastifyInstance } from "fastify";

export default function hello(fastify: FastifyInstance, _, done) {
  fastify.get("/hello", async (_req, reply) => reply.status(200).send({ hello: "world" }));

  done();
}
