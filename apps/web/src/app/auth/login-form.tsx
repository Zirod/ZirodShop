"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

import style from "@style/components/layout/_auth.module.scss";
import Input from "../components/ui/input";
import Button from "../components/ui/button";

import { LoginAction } from "./auth.action";

export default function LoginForm() {
    const router = useRouter();
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        setLoading(true);
        setError(null);

         try {
            
            const response = await LoginAction(formData);

            if (!response.success) {
                setError(response.message);
                return;
            }

            router.push("/")

        } catch(error) {
            return error
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className={style.authPage}>
            <div className={style.brand}>
                <strong>Zirod</strong>
                <span>Shop.</span>
            </div>

            <div className={style.authCard}>
                <div className={style.cardHeader}>
                    <h1 className={style.cardTitle}>Se connecter à ZirodShop</h1>
                    <p className={style.cardSubtitle}>
                        Bienvenue ! Entrez vos identifiants pour accéder à votre compte.
                    </p>
                </div>

                <form className={style.authForm} onSubmit={handleSubmit} noValidate>
                    <div className={style.field}>
                        <label className={style.fieldLabel} htmlFor="username">
                            Adresse E-mail
                        </label>
                        <Input id="username" name="email" type="email" placeholder="exemple@zirodshop.com" />
                    </div>

                    <div className={style.field}>
                        <label className={style.fieldLabel} htmlFor="password">
                            Mot de passe
                        </label>
                        <Input id="password" name="password" type={visible ? "text" : "password"} placeholder="*****" withIcon position="right" >
                            <button type="button" className={style.eyeButton} onClick={() => setVisible((value) => !value)} aria-label={visible ? "Masquer le mot de passe" : "Afficher le mot de passe"} >
                                {visible ? <EyeOff size={17} /> : <Eye size={17} />}
                            </button>
                        </Input>

                        <div className={style.fieldHelpRow}>
                            <a className={style.forgotLink} href="/register">
                                Créer un compte
                            </a>
                            <a className={style.forgotLink} href="/recoverypassword">
                                Mot de passe oublié ?
                            </a>
                        </div>
                    </div>

                    {error && (
                        <p className={style.errorBox} role="alert">
                            {error}
                        </p>
                    )}

                    <div className={style.submitButton}>
                        <Button type="submit" variante="primary" desc="Se connecter" loading={loading} disable={loading} />
                    </div>
                </form>
            </div>

            <p className={style.authFooter}>
                © 2026 ZirodShop — Tous droits réservés
            </p>
        </section>
    )
}
