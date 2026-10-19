import Hero from "./components/layout/hero";
import SectionTitle from "./components/layout/sectionTite";
import Card from "./components/ui/card";
import Image from "next/image";
import Modal from "./components/ui/modal";

export default function Home() {
    return (
        <>     
            <Hero />   
            <main>    
                <SectionTitle 
                    title= "Best saler"
                    description="Nos meileur produit en vente "
                />
    

                <div className="cardContainer">
                    <Modal buttonLabel="Open modal" variante="danger">
                        <p>Tu peux me fermer avec le X, Escape, ou en cliquant autour de moi 👋</p>
                        <p>je suis</p>
                    </Modal>
                    <Card 
                        header = {
                            <Image width={1000} height={600} layout="responsive" src="/hero-bg.jpg" alt="prodil"/>
                        }
                        body = {
                            <>
                                <p> je suis une titre de cars</p>
                            </>
                        }
                    />
                </div>

            </main>
        </>
    );
}
