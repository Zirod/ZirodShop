import style from "@style/components/ui/_card.module.scss";
import { ReactNode } from "react";

interface CardProps{

    header?: ReactNode,
    body: ReactNode,
    footer?:ReactNode
    banner?: ReactNode
    icon?: ReactNode,
    stars?: number
}

export default function Card({ header, body, footer, banner,  icon, stars } : CardProps) {

    return(

        <div className={style.cardContainer}>

            {banner && (
                <div className={ style.banner }>
                    { banner }
                </div>
            )}
            
            <div className={style.header}>
                {icon && <div className={style.iconContainer}>{icon}</div>}
                {header && <span>{header}</span>}
                {stars && stars > 0 && <span className={style.badge}>{stars}</span>}
            </div>

            <div className={style.body}>
                {body}
            </div>

            {footer && (
                <div className={style.footer}>
                    {footer}
                </div>
            )}

        </div>

    )

}