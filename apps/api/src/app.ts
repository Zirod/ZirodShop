import Fastify from "fastify";
import logger from './config/logger.ts'
import prismaPlugin from "./plugin/prisma-plugin.ts";
import jwtPlugin from './plugin/jwt-plugin.ts'
import authRoute from "./modules/auth/auth.route.ts";

export default function buildZirodShop(){


    const zirodShop = Fastify({
        logger,
    })

    // Registration of all pluginsss
    zirodShop.register(prismaPlugin);
    zirodShop.register(jwtPlugin);


    // Registration of all routes
    zirodShop.register(authRoute);


    // API health check
    zirodShop.get("/health", async (request) => {
        zirodShop.log.info("API health verification");
        return{
            status : 200,
            message : "ZirodShop API run successfully !"
        }
    })

    return zirodShop;
    
}