import style from "@style/components/layout/_sectionTitle.module.scss";

interface SectionTitleProps{
    title: string
    description?: string
}

export default function SectionTitle({title, description}: SectionTitleProps){

    return(
        <div className={style.SectionTitle}>
            <div className={style.title}>{title}</div>
            <div className={style.description}>{description}</div>
        </div>
    )

}