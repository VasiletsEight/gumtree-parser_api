import {FastifyReply} from "fastify";

function replayDeclaratorOk <T extends {}>(this:FastifyReply, data:T){
    this.status(200).send({statusCode:200, data:{...data}});
}

export default {ok:replayDeclaratorOk}
