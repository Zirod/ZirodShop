import 'dotenv/config'

/**
 * Configuration centrale de l'API.
 * Toute lecture de process.env se fait ICI et uniquement ici.
 * Le reste du code (logger, app, server...) consomme cet objet.
 */

const isProduction = process.env.NODE_ENV === 'production'

const config = {
    env: process.env.NODE_ENV || 'development',
    isProduction,

    server: {
        port: Number(process.env.PORT || 3001),
        host: process.env.HOST || '0.0.0.0',
    },
}

export default config;