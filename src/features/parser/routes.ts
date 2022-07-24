import {FastifyInstance} from "fastify";
import {ParserCategoryPost} from "./type";
import controller from "./controllers";
import schema from "./schema";

const routes = async (fastify: FastifyInstance) => {
    fastify.post<ParserCategoryPost>('/', schema.ParserCategorySchema, controller.postCategoryController);
};

export default routes;