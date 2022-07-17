const schema = {
    type: 'object',
    required: ["NODE_ENV", "PORT", "HOST"],
    properties: {
        NODE_ENV: {
            type: 'string'
        },
        PORT: {
            type: 'number'
        },
        HOST: {
            type: 'string'
        },
    }
}

const options = {
    dotenv: true,
    confKey: 'config',
    schema: schema,
}

export default options;