import {fastifyEnvOpt} from "@fastify/env";

const schema = {
    type: 'object',
    required: ["NODE_ENV", "PORT", "HOST"],
    properties: {
        NODE_ENV: {
            type: 'string'
        },
        PORT: {
            type: 'number',
            default: 8000
        },
        HOST: {
            type: 'string'
        },
        GUMTREE_URL:{
            type:'string'
        }
    }
}

const options: fastifyEnvOpt = {
    dotenv: true,
    confKey: 'config',
    schema: schema,
}

export default options;
