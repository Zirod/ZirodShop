import config from './config.js'

const isDevelopment = config.runningEnv !== 'prod'

const logger = {
    level: isDevelopment ? 'debug' : 'info',

    ...(isDevelopment && {
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
                translateTime: 'SYS:standard',
                ignore: 'pid,hostname',
            },
        },
    }),
}

export default logger