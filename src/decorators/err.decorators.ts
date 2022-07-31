import {FastifyReply, FastifyRequest} from "fastify";
import {isInstanceOfApiErr} from "../utils/apiErr/isInstanceOfApiErr";

const errorHandling = (error: TypeError, request: FastifyRequest, reply: FastifyReply) => {
    if (isInstanceOfApiErr(error) && error.statusCode) return reply.status(error.statusCode).send({err: error.message})

    reply.status(500).send({err: "Something wrong"})
}

export default {errorHandling}
