import Fastify from "fastify";
import parserRoute from "../features/parser/routes";
import envConfig from "./env.config";
import fastifyEnv from "@fastify/env";
import loggerConfig from "./logger.config";

const fastify = Fastify({logger: loggerConfig});

fastify.register(fastifyEnv, envConfig);
fastify.register(parserRoute, {prefix: "/parser"});

const apiStart = async () => {
    try {
        await fastify.ready();
        await fastify.listen({port: fastify.config.PORT, host: fastify.config.HOST});
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

export default apiStart;