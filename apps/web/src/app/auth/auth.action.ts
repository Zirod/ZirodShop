
"use server";

import { Api } from "../../lib/api"
import type { LoginUserInput, CreateUserInput} from "@zirodshop/validation";

function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export async function LoginAction(formData: FormData) {
    try {
        const data: LoginUserInput = {
            email: String(formData.get("email") ?? ""),
            password: String(formData.get("password") ?? ""),
        };


        if (!data.email || !data.password) {
            throw new Error("Veuillez renseigner votre email et votre mot de passe")
        }

        const response = await Api.fetch.post("/auth/login", data);

        return {
            success: true,
            data: response,
            message: response.message
        };

    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Une erreur est survenue",
        };
    }
}



export async function RegisterAction(formData: FormData){

    try {
        const data: CreateUserInput = {
            name: String(formData.get("name") ?? ""),
            surname: String(formData.get("surname") ?? ""),
            email: String(formData.get("email") ?? ""),
            bornDate: String(formData.get("date") ?? ""),
            password: String(formData.get("password") ?? ""),
            confirmPass: String(formData.get("confirmPass") ?? "")
        }

        if(!data.name || !data.surname || !data.email || !data.bornDate || !data.password || !data.confirmPass){
            throw new Error("Tous les champs sont requis");
        }

        if(!isValidEmail(data.email)){
            return {
                success: false,
                message: "Veuillez saisir une adresse email valide."
            };
        }

        if(data.password !== data.confirmPass){
            return {
                success: false,
                message: "Mot de passe non conforme"
            };
        }

        const newuser = await Api.fetch.post("/auth/register", data)

        return {
            success: true,
            data: newuser,
            message: newuser.message
        }

    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Une erreur est survenue",
        }
    }

}
