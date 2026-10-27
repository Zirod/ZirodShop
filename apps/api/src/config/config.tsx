import 'dotenv/config'
import { access } from 'node:fs';

/**
 * Configuration centrale de l'API.
 * Toute lecture de process.env se fait ICI et uniquement ici.
 * Le reste du code (logger, app, server...) consomme cet objet.
 */


const config = {
    runningEnv: process.env.NODE_ENV || 'dev',

    server: {
        port: Number(process.env.PORT || 3001),
        host: process.env.HOST || '0.0.0.0',
    },

    logger: {
        level: process.env.LOG_LEVEL || 'debug',
        pretty: (process.env.LOG_PRETTY || 'true') === 'true',
    },

    auth: {
        accessJwt: process.env.JWT_SECRET || "access secret jwt a changer en prod",
    }
}

export default config;