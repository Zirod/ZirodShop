import { ReactNode } from "react"
import style from "@style/components/ui/input.module.scss"


interface InputProps{
    withIcon?: boolean
    type: string
    id?: string
    name?: string
    placeholder?: string,
    position?: string
    children?: ReactNode
}

export default function Input({withIcon, id, type, name ,placeholder, position, children} : InputProps) {

    if(withIcon){
        if(position === "right"){
            return(
                <div className={style.inputContainer}>
                    <input className={style.input} id={id} type={type} name={name} placeholder={placeholder} />
                    <div className={style.iputIcon} >
                        {children}
                    </div>
                </div>
            )
        }else{
            return(
                <div className={style.inputContainer}>
                    <div className={style.iputIcon} >
                        {children}
                    </div>
                    <input className={style.input} id={id} type={type} name={name} placeholder={placeholder} />
                </div>
            )
        }
    }

    else{
        return(
            <div className={style.inputContainer}>
                <input className={style.input} id={id} type={type} name={name} placeholder={placeholder} />
            </div>
        )
    }

}