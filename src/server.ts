import fastify, { FastifyServerOptions } from "fastify";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import type { Config } from "./config";

const __filename = fileURLToPath(import.meta.url); // eslint-disable-line
const __dirname = dirname(__filename); // eslint-disable-line

async function createServer(config: Config) {
  const opts: FastifyServerOptions = {
    logger: {
      level: config.LOG_LEVEL,
      prettyPrint: config.PRETTY_PRINT,
    },
    ...config,
  };

  const server = fastify(opts);

  await server.register(import("fastify-favicon"));

  await server.register(import("fastify-healthcheck"));

  await server.register(import("under-pressure"), {
    exposeStatusRoute: true,
    maxEventLoopDelay: 1000,
    maxHeapUsedBytes: 100000000,
    maxRssBytes: 100000000,
    maxEventLoopUtilization: 0.98,
  });

  await server.register(import("fastify-autoload"), {
    dir: join(__dirname, "routes"),
    dirNameRoutePrefix: false,
  });

  return server;
}

export default createServer;
