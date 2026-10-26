import Fastify from "fastify";
import logger from './config/logger.js'
import prismaPlugin from "./plugin/prisma-plugin";
import jwtPlugin from './plugin/jwt-plugin.js'

export default function buildZirodShop(){


    const app = Fastify({
        logger,
    })

    app.register(prismaPlugin);
    app.register(jwtPlugin);

    app.get("/health", async (request) => {
        request.log.info("API health verification");
        return{
            status : 200,
            message : "ZirodShop API run OK !"
        }
    })

    return app;
    
}