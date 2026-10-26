import type { FastifyInstance } from "fastify";
import { UserRepository } from "../users/users.repository";

export class Autservices{

    constructor(private fastify: FastifyInstance){}

    async Register(data: object){

        const exist = await UserRepository.getByEmail(data);

        if(!exist) {
            try {
                
            } catch (error) {
                throw error;
            }
        }

    };

    static async Login(){

    }

}