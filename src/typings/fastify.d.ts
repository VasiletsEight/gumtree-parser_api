import "typings/fastify";

declare module 'typings/fastify' {
    export interface FastifyInstance {
        config: {
            NODE_ENV: "development" | "production";
            PORT: number;
            HOST: string;
        }
    }
}