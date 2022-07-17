import {FastifyInstance} from "fastify";
import {ParserPost} from "./type";
import controller from "./controllers";
import schema from "./schema";

const routes = async (fastify: FastifyInstance) => {
    fastify.get('/', controller.get);
    fastify.post<ParserPost>('/file', {schema: {body: schema.ParserBody}}, controller.post);
};

export default routes;