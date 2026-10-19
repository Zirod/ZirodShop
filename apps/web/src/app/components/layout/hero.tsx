import style  from "@style/components/layout/_hero.module.scss";
import Button from "../ui/button";

export default function Hero(){
   
    return(
        <div className={style.heroContainer}>

            <div className={style.contain}>
                <div className="row">
                    <div className="col-lg-7">
                        <strong className={style.heroTitle}><span className={style.firstPart}>Zirod</span>Shop. <br/> L'achat qui change tout</strong>
                        <p className={style.heroDescription}>Des milliers de produits, à un clic de chez vous. Livraison rapide, prix cassés, zéro compromis.<br />Arrêtez de chercher. Cliquez, c'est livré.</p>

                        <div className={style.btn_container}>
                            <Button variante="primary"  desc="Nos meilleurs produits" type="button"/>
                            <Button variante="secondary"  desc="Tous nos produits" type="button"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}