import {FastifyReply, FastifyRequest} from "fastify";
import services from "./services";
import {ParserCategoryPost} from "./type";

const postCategoryController = (request: FastifyRequest<ParserCategoryPost>, reply: FastifyReply) => {
    services.postCategoryService(request.body)
        .then((data: Buffer) => {
            reply.header('Content-Disposition', `attachment; filename="Phone.xlsx"`);
            reply.type("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            reply.status(200).send(data);
        })
        .catch((err) => reply.status(500).send({err: err}))
}

// const postAdvertisementController = (request: FastifyRequest<ParserAdvertisementPost>, reply: FastifyReply) => {
//     services.postAdvertisementService(request.body)
//         .then((data: UserData[]) => reply.status(200).send({statusCode: 200, data: {users: data}}))
//         .catch((err) => reply.status(500).send({err: err}))
// }
//
// const postCreateFileController = (request: FastifyRequest<ParserFilePost>, reply: FastifyReply) => {
//     services.postCreateFileService(request.body)
//         .then((data: Buffer) => {
//             reply.header('Content-Disposition', `attachment; filename="Phone.xlsx"`);
//             reply.type("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
//             reply.status(200).send(data);
//         })
//         .catch((err) => reply.status(500).send({err: err}))
// }

export default {postCategoryController};