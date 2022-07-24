import {FastifyInstance} from "fastify";
import {ParserFilePost} from "./type";
import controller from "./controllers";
import schema from "./schema";

const routes = async (fastify: FastifyInstance) => {
    fastify.post<ParserFilePost>('/file', schema.ParserFileSchema, controller.postFileController);
};

export default routes;