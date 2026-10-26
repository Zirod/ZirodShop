import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "@fastify/jwt";
import config from "../config/config";
import fp from "fastify-plugin";

export default fp(async(zirodShop) => {

    zirodShop.register(jwt, {
        secret: config.auth.jwt_secret,
    })

})