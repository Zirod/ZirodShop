'user client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

import style from "@style/components/layout/_auth.module.scss";
import Input from "../components/ui/input";
import Button from "../components/ui/button";

import { RegisterAction } from "./auth.action";


interface RegisterFormProps {
    onSwitch: () => void;
}

export default function RegisterForm({ onSwitch }: RegisterFormProps) {

    const router = useRouter();
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){

        event.preventDefault();
        const formData = new FormData(event.currentTarget)

        setLoading(true);
        setError(null)

        try {
            
            const response = await RegisterAction(formData)

            if(!response.success){
                setError(response.message);
                return
            }

            router.push('/');

        } catch (error) {
            return error
        }finally {
            setLoading(false);
        }

    }


    return (
        <section  className={style.authPage}>

            <div className={style.brand}>
                <strong>Zirod</strong>
                <span>Shop.</span>
            </div>

            <div className={style.authCard}>

                <div className={style.cardHeader}>
                    <h1 className={style.cardTitle}>Créer un compte</h1>
                    <p className={style.cardSubtitle}>
                        Bienvenue ! Entrez vos informations pour créer votre compte.
                    </p>
                </div>

                <form className={`${style.authForm} ${style.row}`}  onSubmit={handleSubmit} noValidate>

                    <div className={style.field}>
                        <label className={style.fieldLabel} htmlFor="username">
                            Nom
                        </label>
                        <Input id="username" name="name" type="text" placeholder="Nom" />
                    </div>

                    <div className={style.field}>
                        <label className={style.fieldLabel} htmlFor="username">
                            Prénom
                        </label>
                        <Input id="username" name="surname" type="text" placeholder="Prénom" />
                    </div>

                    <div className={style.field}>
                        <label className={style.fieldLabel} htmlFor="username">
                            Adresse E-mail
                        </label>
                        <Input id="username" name="email" type="email" placeholder="exemple@zirodshop.com" />
                    </div>

                    <div className={style.field}>
                        <label className={style.fieldLabel} htmlFor="username">
                            Date de naissance
                        </label>
                        <Input id="username" name="date" type="date"/>
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
                    </div>

                    <div className={style.field}>
                        <label className={style.fieldLabel} htmlFor="username">
                            Confirmer le mot de passe
                        </label>
                        <Input id="username" name="confirmPass" type="text" placeholder="*****" />
                    </div>

                    {error && (
                        <p className={style.errorBox} role="alert">
                            {error}
                        </p>
                    )}

                    <div className={style.submitButton}>
                        <Button type="submit" variante="primary" desc="Créer un compte" loading={loading} disable={loading} />
                    </div>


                </form>

                <a className={`${style.forgotLink} `} onClick={onSwitch}>
                    Déjà un compte ? Se connecter
                </a>
            </div>
            <p className={style.authFooter}>
                © 2026 ZirodShop — Tous droits réservés
            </p>            
        </section>
    );
}