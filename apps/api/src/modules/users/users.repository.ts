import { prisma } from "@zirodshop/database";
import { CreateUser, UpdateUser, updatePassword } from "@zirodshop/validation";

export class UserRepository{

    static async count(){
        return prisma.user.count();
    }

    static async create(data: CreateUser){

        const bornDate = new Date(`${data.bornDate}T00:00:00.000Z`)

        if(Number.isNaN(bornDate.getTime())){
            throw new Error("Ivalid data")
        }

        return await prisma.user.create({
            data: {
                ...data,
                bornDate
            }
        })
    }

    static async getAll(){
        return await prisma.user.findMany();
    }

    static async getById(id: string){
        return await prisma.user.findUnique({
            where: { id }
        });
    }
    
    static async getByEmail(email: string){
        return await prisma.user.findUnique({
            where: { email }
        });
    }

    static async update(data: UpdateUser, id: string){
        return await prisma.user.update({
            where: { id },
            data
        })
    }

    static async updatePassword(data: updatePassword, id: string){
        return await prisma.user.update({
            where: { id } ,
            data
        })
    }

    static async delete(id: string){
        return prisma.user.delete({
            where: { id }
        })
    }
}