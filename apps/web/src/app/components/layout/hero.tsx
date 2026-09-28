import style  from "@style/components/layout/_hero.module.scss";

export default function Hero(){
   
    return(
        <div className={style.heroContainer}>

            <div className="row">
                <div className="col-lg-7">
                    je suis ZirodShop
                </div>
                <div className="col-lg-5">
                    Image
                </div>
            </div>

        </div>
    )
}