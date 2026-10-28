import { FastifyRequest, FastifyReply } from "fastify";
import { UserServices } from "./user.services";
import { CreateUserInput, UpdateUser, updatePassword } from '@zirodshop/validation';
import { HttpError } from "../../config/httpError";
import '@fastify/jwt';

const getUserServices = () => UserServices;

type IdParams = { Params: { id: string } }
type PasswordBody = { password: string; confirmPass: string }

export const UserController = {

    me: async (request: FastifyRequest, reply: FastifyReply) => {

        const profil = request.user;
        return reply.status(200).send({ profil });

    },

    getOne: async (request: FastifyRequest<IdParams>, reply: FastifyReply) => {

        try {
            const user = await UserServices.getOne(request.params.id);
            return reply.status(200).send(user);

        } catch (error) {

            if (error instanceof HttpError) {
                return reply.code(error.statusCode).send({
                    message: error.message
                })
            }

            request.log.error(error);
            return reply.code(500).send({
                message: "Internal server error"
            })
        }
    },

    create: async (request: FastifyRequest<{ Body: CreateUserInput }>, reply: FastifyReply) => {

        const { confirmPass, ...data } = request.body;

        if (confirmPass !== data.password) {
            return reply.code(400).send({
                message: "Password do not match"
            })
        }

        try {

            const newUser = await UserServices.create(data)

            return reply.status(201).send({
                message: "User created successfuly",
                newUser
            })

        } catch (error) {

            if (error instanceof HttpError) {
                return reply.code(error.statusCode).send({
                    message: error.message
                })
            }

            request.log.error(error);
            return reply.code(500).send({
                message: "Internal server error"
            })
        }
    },

    getAll: async (request: FastifyRequest, reply: FastifyReply) => {

        try {
            const users = await UserServices.getAll();
            return reply.status(200).send(users);

        } catch (error) {

            if (error instanceof HttpError) {
                return reply.code(error.statusCode).send({
                    message: error.message
                })
            }

            request.log.error(error);
            return reply.code(500).send({
                message: "Internal server error"
            })
        }
    },

    update: async (request: FastifyRequest<IdParams & { Body: UpdateUser }>, reply: FastifyReply) => {

        try {
            const updatedUser = await UserServices.update(request.params.id, request.body);

            return reply.status(200).send({
                message: "User updated successfully",
                updatedUser
            })

        } catch (error) {

            if (error instanceof HttpError) {
                return reply.code(error.statusCode).send({
                    message: error.message
                })
            }

            request.log.error(error);
            return reply.code(500).send({
                message: "Internal server error"
            })
        }
    },

    updatePassword: async (request: FastifyRequest<IdParams & { Body: PasswordBody }>, reply: FastifyReply) => {

        const { confirmPass, ...rest } = request.body;
        const { password } = rest;

        if (confirmPass !== password) {
            return reply.code(400).send({
                message: "Password do not match"
            })
        }

        try {
            await UserServices.upadateUserPass(request.params.id, { password });

            return reply.status(200).send({
                message: "Password updated successfully"
            })

        } catch (error) {

            if (error instanceof HttpError) {
                return reply.code(error.statusCode).send({
                    message: error.message
                })
            }

            request.log.error(error);
            return reply.code(500).send({
                message: "Internal server error"
            })
        }
    },

    delete: async (request: FastifyRequest<IdParams>, reply: FastifyReply) => {

        try {
            await UserServices.delete(request.params.id);

            return reply.status(200).send({
                message: "User deleted successfully"
            })

        } catch (error) {

            if (error instanceof HttpError) {
                return reply.code(error.statusCode).send({
                    message: error.message
                })
            }

            request.log.error(error);
            return reply.code(500).send({
                message: "Internal server error"
            })
        }
    }

}
