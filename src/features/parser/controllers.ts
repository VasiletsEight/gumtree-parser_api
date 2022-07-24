import {FastifyReply, FastifyRequest} from "fastify";
import services from "./services";
import {ParserFilePost} from "./type";

const postFileController = (request: FastifyRequest<ParserFilePost>, reply: FastifyReply) => {
    services.postFileService(request.body)
        .then((data: Buffer) => {
            reply.header('Content-Disposition', `attachment; filename="Phone.xlsx"`);
            reply.type("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            reply.status(200).send(data);
        })
        .catch((err) => reply.status(500).send({err: err}))
}

export default {postFileController};