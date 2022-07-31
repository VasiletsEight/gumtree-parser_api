import {FastifyError} from "@fastify/error";

export const isInstanceOfApiErr = (err: Error): err is FastifyError => "statusCode" in err;
