import type { Metadata } from "next";

import LoginForm from "./login-form";
import style from "@style/components/layout/_auth.module.scss";

export const metadata: Metadata = {
    title: "Connexion — ZirodShop",
    description: "Connectez-vous à votre compte ZirodShop",
};

export default function AuthPage() {
    return (
        <>
            <LoginForm />

            <p className={style.authFooter}>
                © 2026 ZirodShop — Tous droits réservés
            </p>
        </>
    );
}
