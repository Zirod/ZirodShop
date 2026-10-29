import jwt from "@fastify/jwt";
import config from "../config/config";
import fp from "fastify-plugin";

declare module '@fastify/jwt'{
    interface FastifyJWT{
        payload: {
            id: string;
            name: string;
            surname: string;
            email: string;
            bornDate: Date;
            role: string;
            createAt: Date
        };
        user: {
            id: string;
            name: string;
            surname: string;
            email: string;
            bornDate: Date;
            role: string;
            createAt: Date

        }
    }
}

export default fp(async(zirodShop) => {

    await zirodShop.register(jwt, {
        secret: config.auth.accessJwt,
        sign: {
            expiresIn: '15min',
            algorithm: 'HS256'
        },
        cookie: {
            cookieName: "accessToken",
            signed: false
        }
    })
})