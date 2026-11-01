import { FastifyRequest, FastifyReply } from "fastify";
import '@fastify/jwt';

/**
 * Verifie le accessToken (header Authorization ou cookie) avant la route
 */
export const authenticate = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        await request.jwtVerify();
        return reply.status(200).send({
            success: true,
            message: "User authencated"
        })
    } catch (error) {
        return reply.status(401).send({
            success: false,
            message: error
        })
    }
};

/**
 * Verifie le token puis exige le role "admin" pour les routes sensibles
 */
export const adminOnly = async (request: FastifyRequest, reply: FastifyReply) => {

    await request.jwtVerify();

    const { role } = request.user as { role: string };

    if (role !== "admin") {
        return reply.code(403).send({
            message: "Admin access required"
        })
    }
}
