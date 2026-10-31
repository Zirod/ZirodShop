
"use server";

import { Api } from "../../lib/api"
import type { LoginUserInput } from "@zirodshop/validation";

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
            message: error instanceof Error
                ? error.message
                : "Une erreur est survenue",
        };
    }
}
