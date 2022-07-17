import {FastifyReply, FastifyRequest} from "fastify";
import services from "./services";
import {ParserPost} from "./type";

const get = (request: FastifyRequest<ParserPost>, reply: FastifyReply) => {
    reply.status(200).send({statusCode: 200, data: {message: "Server ready for work"}});
}

const post = (request: FastifyRequest<ParserPost>, reply: FastifyReply) => {
    services.postParserService(request.body)
        .then((buffer: Buffer) => {
            reply.header('Content-Disposition', `attachment; filename="data.xlsx"`);
            reply.type("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            reply.status(200).send(buffer);
        })
        .catch((err) => {
            reply.status(500).send({err: err})
        })
}

export default {get, post};