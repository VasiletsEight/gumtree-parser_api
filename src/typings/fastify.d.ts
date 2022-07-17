import "fastify";

declare module 'fastify' {
    export interface FastifyInstance {
        config: {
            NODE_ENV: "development" | "production";
            PORT: number;
            HOST: string;
        }
    }
}