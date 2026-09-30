import Hero from "./components/layout/hero";
import SectionTitle from "./components/layout/sectionTite";
import Card from "./components/ui/card";

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
                            header={ <p>je suis un titre</p> }
                            body = {<p> je suis une titre de cars</p>}
                        />
                    </div>

                </div>
            </main>
        </>
    );
}
