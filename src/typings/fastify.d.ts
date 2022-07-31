import "fastify";

declare module 'fastify' {
    export interface FastifyInstance {
        config: {
            NODE_ENV: "development" | "production";
            PORT: number;
            HOST: string;
        }
    }

    interface FastifyReply {
        Ok: <T extends {}>(this: FastifyReply, data: T) => void;
    }
}
