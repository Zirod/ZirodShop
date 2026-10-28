import { UserRepository } from "./users.repository";
import { CreateUser, updatePassword, UpdateUser } from '@zirodshop/validation'
import { HttpError } from '../../config/httpError'

export class UserServices {

    static async create(data: CreateUser) {
        return UserRepository.create(data);
    }

    static async getAll() {

        const userNbr = await UserRepository.count();
        if (userNbr === 0) throw HttpError.notFound("Any user found");

        const users = await UserRepository.getAll();

        return {
            number: userNbr,
            users
        }
    }

    static async getOne(id: string) {

        const user = await UserRepository.getById(id);
        if (!user) throw HttpError.notFound("User not exist");

        const { password, ...safeUser } = user;

        return safeUser
    }

    static async update(id: string, data: UpdateUser) {
        return await UserRepository.update(data, id)
    }

    static async upadateUserPass(id: string, data: updatePassword) {
        return await UserRepository.updatePassword(data, id);
    }

    static async delete(id: string) {
        return await UserRepository.delete(id)
    }

}
