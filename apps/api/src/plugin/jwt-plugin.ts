import type { FastifyRequest, FastifyReply } from "fastify";
import fp from "fastify-plugin";
import jwt from "@fastify/jwt";
import config from "../config/config.js";

export default fp(async (cauris) => {

    cauris.register(jwt, {
        secret: config.auth.accessJwt,
        sign:{
            expiresIn: "15m"
        },
        namespace: "access"
    });

    cauris.register(jwt, {
        secret: config.auth.refreshJwt,
        sign: {
            expiresIn: "7d"
        },
        namespace: "refresh"
    })

    cauris.decorate("authenticate", async function (request: FastifyRequest, reply: FastifyReply) {
        try {
            await request.accessJwtVerify();
        } catch (err) {
            return reply.status(401).send({
                success: false,
                message: "Unauthorized",
            });
        }
    });

});
