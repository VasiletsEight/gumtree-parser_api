const transport = {
    target: 'pino-pretty',
    options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname,res,reqId,responseTime,req'
    }
}

const logger = process.env["NODE_ENV"] === "development" && {transport: transport};

export default logger;
