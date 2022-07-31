import {FastifyReply, FastifyRequest} from "fastify";
import services from "./services";
import {ParserPost, ReplayParser} from "./type";

const postParserController = async (request: FastifyRequest<ParserPost>, reply: FastifyReply) => {
    const service: ReplayParser[] = await services.postParserService(request.body);

    reply.Ok({users: service});
}

export default {postParserController};
