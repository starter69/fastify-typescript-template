import { FastifyInstance } from "fastify";

export default function hello(fastify: FastifyInstance) {
  fastify.get("/hello", async (_req, reply) => reply.status(200).send({ hello: "world" }));
}
