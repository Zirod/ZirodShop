import type { FastifyInstance } from "fastify";
import { UserRepository } from "../users/users.repository";
import  { CreateUser, LoginUserSchema }  from "@zirodshop/validation"
import { HttpError } from "../../config/httpError";
//import argon2

export class AuthServices{

    constructor(private fastify: FastifyInstance){
        this.fastify = fastify;
    }

    /**
     * Token generator by user élément in payload
     * return accessToken and refreshToken
    */
    private generateTokens(user: {id: string, name: string, email: string, role: string, createAt: Date}){
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            createAt: user.createAt
        }

        return {
            accessToken : this.fastify.jwt.access.sign(payload),
            refreshToken : this.fastify.jwt.refresh.sign(payload)
        }
    }

    /**
     *  ========= USER REGISTRATION =========
     * Verify if user already exist otherwise create him
     * Hashed the password with argon2
     * Insert the user une database with the password modified by hashedpassword
     * Generate Token by the generator without user password
     * 
     * return User without password with tokens
    */
    async Register(data: CreateUser){

        const exist = await UserRepository.getByEmail(data.email);

        if(exist) {
            throw HttpError.conflict("User already exist !");
        }

        const passworHashed = data.password + " use argon 2 to hash it";

        const newUser = await UserRepository.create({
            ...data,
            password: passworHashed
        });

        const { password, ...safeUser } = newUser;
        const tokens = this.generateTokens(safeUser);

        return {
            userInfo : safeUser,
            ...tokens
        }

    };

    /**
     * ========= USER LOGIN ========= 
     * Verify if user already exist by email otherwise throw the error
     * If user exist, compare the password
     * if password is valid, generate token otherwise throw error
     * 
     * return success message with tokens
    */
    async Login(data: typeof LoginUserSchema){

        const user = await UserRepository.getByEmail(data.email);
        if(!user){
            throw HttpError.unauthorized("Invalid credentials");
        }

        const isPasswordValid = "compare data.password && user.password";
        
        if(!isPasswordValid){
            throw HttpError.unauthorized("Invalid credentials");
        }

        const tokens = this.generateTokens(user);
   
        return {
            ...tokens
        }

    }

}