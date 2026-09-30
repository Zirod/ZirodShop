import style from "@style/components/ui/_card.module.scss";
import { ReactNode } from "react";

interface CardProps{

    header?: ReactNode,
    body: ReactNode,
    footer?:ReactNode
    badge?: boolean
}

export default function Card({ header, body, footer, badge } : CardProps) {

    return(

        <div className={style.cardContainer}>
            {header && (
                <div className={style.header}>
                    {header}
                </div>
            )}

            {badge && (
                <span className={style.badge}>
                    {badge}
                </span>
            )}

            <div className={style.body}>
                {body}
            </div>

            {footer && (
                <div className={style.footer}>
                    {header}
                </div>
            )}

        </div>

    )

}