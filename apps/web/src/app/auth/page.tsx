import type { Metadata } from "next";

import LoginForm from "./login-form";

export const metadata: Metadata = {
    title: "Connexion - ZirodShop",
    description: "Connectez-vous à votre compte ZirodShop",
};

export default function AuthPage() {
    return (
        <>
            <LoginForm />
        </>
    );
}
