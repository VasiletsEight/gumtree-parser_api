import {FastifyInstance} from "fastify";
import {ParserPost} from "./type";
import controller from "./controllers";
import schema from "./schema";

const routes = async (fastify: FastifyInstance) => {
    fastify.post<ParserPost>('/', schema.ParserSchema, controller.postParserController);
};

export default routes;
