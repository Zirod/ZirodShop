"use client";

import { useState } from "react";

import LoginForm from "./login-form";
import RegisterForm from "./register-form";

export default function AuthPage() {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <>
            {isRegister ? (
                <RegisterForm onSwitch={() => setIsRegister(false)} />
            ) : (
                <LoginForm onSwitch={() => setIsRegister(true)} />
            )}
        </>
    );
}