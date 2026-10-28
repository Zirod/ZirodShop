import { FastifyRequest, FastifyReply } from "fastify";
import { type CreateUserInput, type LoginUserSchema} from "@zirodshop/validation";
import { AuthServices } from "./authService";
import '@fastify/cookie'
import config from "../../config/config";
import { HttpError } from "../../config/httpError";

const ACCESS_COOKIE_MAX_AGE = 900;      // 15 minutes
const REFRESH_COOKIE_MAX_AGE = 604800;  // 7 jours

const getAuthService = (request: FastifyRequest) => new AuthServices(request.server);

export const AuthController = {

    register: async (request: FastifyRequest<{ Body: CreateUserInput }>, reply: FastifyReply) => {

        const { confirmPass, ...userData} = request.body;

        if(confirmPass !== userData.password){
            return reply.code(400).send({
                message : "Password do not match"
            })
        }

        try {

            const { userInfo, accessToken, refreshToken } = await getAuthService(request).Register(userData);

            reply.setCookie("accessToken", accessToken, {
                httpOnly: true,
                secure: config.runningEnv === "prod",
                sameSite: "lax",
                maxAge: ACCESS_COOKIE_MAX_AGE,
                path: '/'
            });

            reply.setCookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: config.runningEnv === "prod",
                sameSite: "lax",
                maxAge: REFRESH_COOKIE_MAX_AGE,
                path: '/'
            })

            return reply.code(201).send({
                massage: "user created successfully",
                userInfo
            })
            
        } catch (error) {

            if(error instanceof HttpError){
                return reply.code(error.statusCode).send({
                    message: error.message
                })
            }

            request.log.error(error);
            return reply.code(500).send({
                message : "Internal server error"
            })
        }
    },


    login: async (request: FastifyRequest<{ Body: typeof LoginUserSchema}>, reply: FastifyReply) => {

        try {

            const { accessToken, refreshToken } = await getAuthService(request).Login(request.body);

            reply.setCookie("accessToken", accessToken, {
                httpOnly: true,
                secure: config.runningEnv === "prod",
                sameSite: "lax",
                maxAge: ACCESS_COOKIE_MAX_AGE,
                path: '/'
            })

            reply.setCookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: config.runningEnv === "prod",
                sameSite: "lax",
                maxAge: REFRESH_COOKIE_MAX_AGE,
                path: '/'
            })

            return reply.code(200).send({
                message: "User authenticated",
            })


        } catch (error) {

            if(error instanceof HttpError){
                return reply.code(error.statusCode).send({
                    message: error.message
                })
            }

            request.log.error(error);
            return reply.code(500).send({
                message : "Internal server error"
            })
        }        
    },

}