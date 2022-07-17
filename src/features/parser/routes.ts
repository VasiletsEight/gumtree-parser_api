import {FastifyInstance} from "fastify";
import {ParserAdvertisementPost, ParserCategoryPost, ParserFilePost} from "./type";
import controller from "./controllers";
import schema from "./schema";

const routes = async (fastify: FastifyInstance) => {
    fastify.post<ParserCategoryPost>('/category', schema.ParserCategorySchema, controller.postCategoryController);
    fastify.post<ParserAdvertisementPost>('/advertisement', schema.ParserAdvertisementSchema, controller.postAdvertisementController);
    fastify.post<ParserFilePost>('/file', schema.ParserFileSchema, controller.postCreateFileController);
};

export default routes;