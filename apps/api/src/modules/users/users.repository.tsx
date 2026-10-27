import { prisma } from "@zirodshop/database";
import { CreateUserSchema } from "@zirodshop/validation";
export class UserRepository{

    async getAll(){
        return await prisma.user.findMany();
    }
    
    static async getByEmail(email: string){
        return await prisma.user.findUnique({
            where: { email}
        });
    }

    async getById(){

    }

    static async create(data: typeof CreateUserSchema){
        return await prisma.user.create({
            data
        })
    }

}