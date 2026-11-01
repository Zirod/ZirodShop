import { FastifyInstance } from "fastify";
import { CreateUserSchema, LoginUserSchema } from "@zirodshop/validation";
import { AuthController } from "./auth.controller";

export default function authRoute(zirodShop: FastifyInstance){

    zirodShop.post('/login', {
        schema: { body: LoginUserSchema }
    }, AuthController.login)

    zirodShop.post('/register', {
        schema: { body: CreateUserSchema }
    }, AuthController.register)

}