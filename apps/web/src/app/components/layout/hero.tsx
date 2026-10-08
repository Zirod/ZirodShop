import style  from "@style/components/layout/_hero.module.scss";
import Button from "../ui/button";
import { Trash } from "lucide-react";

export default function Hero(){
   
    return(
        <div className={style.heroContainer}>

            <div className={style.contain}>
                <div className="row">
                    <div className="col-lg-7">

                        <strong className={style.heroTitle}><span className={style.firstPart}>Zirod</span>Shop</strong>
                        <p className={style.heroDescription}>Vos produit préférer a un clic de chez vous.n<br /> Achetez mieux. Vivez mieux</p>

                        <div>
                            <Button icon={Trash} variante="danger"  desc="Voir tous nos produits" type="button"/>
                        </div>

                    </div>
                    <div className="col-lg-5">
                        Image
                    </div>
                </div>
            </div>

        </div>
    )
}