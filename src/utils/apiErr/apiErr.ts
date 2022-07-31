import createError from "@fastify/error";

const NotFound = createError("404", 'Not found', 404);

export default {NotFound}
