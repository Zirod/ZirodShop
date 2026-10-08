import Hero from "./components/layout/hero";
import SectionTitle from "./components/layout/sectionTite";
import Card from "./components/ui/card";
import Image from "next/image";

export default function Home() {
    return (
        <>     
            <Hero />   
            <main>    
                <SectionTitle 
                    title= "Best saler"
                    description="Nos meileur produit en vente "
                />
                <div className="row">
                    <div className="col-lg-3">
                        <Card 
                            header={ <Image src="/hero-bj.jpg" width={500} height={100} alt="Card image"/> }
                            body = {<p> je suis une titre de cars</p>}
                            footer = { <p>je suis un footer</p>}
                        />
                    </div>

                </div>
            </main>
        </>
    );
}
