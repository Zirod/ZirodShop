import style from "@style/components/ui/_modal.module.scss";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface modalProps{

    children: ReactNode

}

export default function Modal({ children } : modalProps){
    return (
        <div className={style.modalContainer}>
            <div className={style.modalCard}>
                <div className={style.colserContainer}> 
                    <X className={style.closer}></X> 
                </div>
                {children}
            </div>
        </div>
    )
}