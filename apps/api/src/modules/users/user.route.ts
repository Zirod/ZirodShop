import { FastifyInstance } from "fastify";
import { CreateUserSchema, PasswordUpdateSchema, UserUpdateSchema, UpdateUser } from "@zirodshop/validation";
import { UserController } from "./user.controller";
import { authenticate, adminOnly } from "../../hook/auth.hook";


export default function userRoute(zirodShop: FastifyInstance) {

    zirodShop.get('/users/me', {
        onRequest: [authenticate]
    }, UserController.me)

    zirodShop.post('/users', {
        schema: { body: CreateUserSchema }
    }, UserController.create)

    zirodShop.get('/users', {
        onRequest: [adminOnly]
    }, UserController.getAll)

    zirodShop.get<{ Params: { id: string } }>('/users/:id', {
        onRequest: [authenticate]
    }, UserController.getOne)

    zirodShop.patch<{ Params: { id: string }, Body: UpdateUser }>('/users/:id', {
        schema: { body: UserUpdateSchema },
        onRequest: [authenticate]
    }, UserController.update)

    zirodShop.patch<{ Params: { id: string }, Body: { password: string, confirmPass: string } }>('/users/:id/password', {
        schema: { body: PasswordUpdateSchema },
        onRequest: [authenticate]
    }, UserController.updatePassword)

    zirodShop.delete<{ Params: { id: string } }>('/users/:id', {
        onRequest: [authenticate]
    }, UserController.delete)

}
