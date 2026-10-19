"use client";

import style from "@style/components/ui/_modal.module.scss";
import Button from "./button";
import { ReactNode, useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";

interface ModalProps {
    children: ReactNode;
    variante?: "primary" | "secondary" | "warning" | "danger" | "info" | "success"
    // Mode contrôlé : piloter le modal sans bouton depuis le parent
    open?: boolean;
    onClose?: () => void;
    // Mode autonome : bouton d'ouverture intégré
    buttonLabel?: string;
}

export default function Modal({ children, open, onClose, buttonLabel = "Ouvrir", variante = "primary" }: ModalProps) {

    const [internalOpen, setInternalOpen] = useState(false);

    // Mode contrôlé si `open` est fourni, sinon état interne
    const isOpen = open ?? internalOpen;

    const close = useCallback(() => {
        onClose?.();
        setInternalOpen(false);
    }, [onClose]);

    // Fermer avec la touche Escape
    useEffect(() => {
        if (!isOpen) return;

        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === "Escape") close();
        };

        window.addEventListener("keydown", handleKeydown);
        return () => window.removeEventListener("keydown", handleKeydown);
    }, [isOpen, close]);

    // Bloquer le scroll de la page quand le modal est ouvert
    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    const modalContent = (
        <div
            className={style.modalContainer}
            data-state={isOpen ? "open" : "closed"}
            onClick={(event) => {
                // Fermer seulement au clic sur le backdrop, pas la carte
                if (event.target === event.currentTarget) close();
            }}
        >
            <div className={style.modalCard} role="dialog" aria-modal="true">
                <button
                    type="button"
                    className={style.colserContainer}
                    aria-label="Fermer le modal"
                    onClick={close}
                >
                    <X className={style.closer} width={18} height={18} />
                </button>
                {children}
            </div>
        </div>
    );

    // Mode autonome : bouton d'ouverture intégré
    if (open === undefined) {
        return (
            <>
                <Button type="button" full={true} variante={variante} onClick={() => setInternalOpen(true)}  desc={buttonLabel}/>
                {modalContent}
            </>
        );
    }

    return modalContent;
}
