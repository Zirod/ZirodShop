import style from '@style/components/ui/_button.module.scss'
import { LucideIcon, Loader2 } from 'lucide-react'

interface ButtonProps{
    icon?: LucideIcon,
    inconPosition?: "left" | "right"
    desc: string
    variante?: "primary" | "secondary" | "secondary-light" | "warning" | "danger" | "info" | "success"
    size?: "sm" | "md" | 'lg'
    full?: boolean
    loading?: boolean
    onClick?: () => void
    type: "button" | "submit"
    disable?:boolean
}

export default function Button({ icon:Icon, inconPosition= 'left', desc, variante = "primary", size = "lg", full=false, loading=false, onClick, type = "button", disable=false }: ButtonProps){

    return(
        <button type={type} onClick={onClick} disabled={disable || loading} className={ ` ${style.button} ${style[variante]} ${style[size]} ${full ? style.full :''} ${loading ? style.loadin : ''}`}>

            { loading ? ( <Loader2 className={style.loagin} /> ) : ( Icon && inconPosition === 'left' && <Icon className={style.icon}/>) }

            <span>{ desc }</span>

            {Icon && inconPosition === 'right' && !loading && ( <Icon className={style.icon} />) }

        </button>
    )

}