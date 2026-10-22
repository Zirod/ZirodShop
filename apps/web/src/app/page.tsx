import style from "@style/components/layout/_home.module.scss"

import Hero from "./components/layout/hero";
import SectionTitle from "./components/layout/sectionTite";
import Card from "./components/ui/card";
import Button from "./components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Truck, ShieldCheck,  Headset, RotateCcw, ArrowRight, ShoppingCart, Percent, Heart } from "lucide-react";

// ────────────────────────────────────────────────────────────
// Données (à remplacer plus tard par les données de la boutique)
// ────────────────────────────────────────────────────────────

const bestSellers = [
    {
        id: 1, name: "Casque sans fil Pro",
        image: "/hero-bg.jpg",
        price: "25 000 FCFA", oldPrice: "32 000 FCFA",
    },
    {
        id: 2, name: "Montre connectée Smart X",
        image: "/hero-bg.jpg",
        price: "18 500 FCFA", oldPrice: "24 000 FCFA",
    },
    {
        id: 3, name: "Sac à dos urbain 25L",
        image: "/hero-bg.jpg",
        price: "12 000 FCFA", oldPrice: null,
    },
    {
        id: 4, name: "Enceinte bluetooth Boom",
        image: "/hero-bg.jpg",
        price: "15 000 FCFA", oldPrice: "19 500 FCFA",
    },
    {
        id: 5, name: "Lampe LED connectée",
        image: "/hero-bg.jpg",
        price: "8 500 FCFA", oldPrice: null,
    },
    {
        id: 6, name: "Basket Runner Neon",
        image: "/hero-bg.jpg",
        price: "22 000 FCFA", oldPrice: "28 000 FCFA",
    },
];

const categories = [
    { id: 1, name: "Électronique", link: "/categories/electronique", count: "120+ produits" },
    { id: 2, name: "Mode & Accessoires", link: "/categories/mode", count: "85+ produits" },
    { id: 3, name: "Maison & Déco", link: "/categories/maison", count: "60+ produits" },
    { id: 4, name: "Sport & Loisirs", link: "/categories/sport", count: "45+ produits" },
];

const services = [
    {
        id: 1, icon: Truck,
        title: "Livraison rapide",
        text: "Votre commande livrée en 24 à 72h sur toute la ville de Cotonou.",
    },
    {
        id: 2, icon: ShieldCheck,
        title: "Paiement sécurisé",
        text: "Mobile Money, carte bancaire ou paiement à la livraison.",
    },
    {
        id: 3, icon: RotateCcw,
        title: "Retours faciles",
        text: "Article non conforme ? Retour gratuit jusqu'à 30 jours.",
    },
    {
        id: 4, icon: Headset,
        title: "Support 7j/7",
        text: "Une équipe à votre écoute par téléphone, email ou réseaux.",
    },
];

// ────────────────────────────────────────────────────────────
// Page d'accueil
// ────────────────────────────────────────────────────────────

export default function Home() {
    return (
        <>
            <Hero />

            <main>

                {/* ── Best sellers ─────────────────────────── */}
                <section aria-label="Meilleures ventes">
                    <SectionTitle
                        title="Best sellers"
                        description="Les produits préférés de nos clients ce mois-ci"
                    />

                    <div className={style.productGrid}>
                        {
                            bestSellers.map((product) => (
                                <Card
                                    key={product.id}
                                    icon={
                                        <Heart size={20} />
                                    }
                                    stars={product.id}
                                    header={
                                        <Image className={style.productImage} width={1000} height={600} layout="responsive" src={product.image} alt={product.name} />
                                    }
                                    body={
                                        <>
                                            <h3 className={style.productName}>{product.name}</h3>
                                            <p className={style.productPrice}>
                                                {product.price}
                                                {product.oldPrice && (
                                                    <span className={style.productOldPrice}>
                                                        {product.oldPrice}
                                                    </span>
                                                )}
                                            </p>
                                        </>
                                    }
                                    footer={
                                        <Button
                                            type="button"
                                            variante="secondary-light"
                                            size="sm"
                                            icon={ShoppingCart}
                                            desc=""
                                        />
                                    }
                                />
                            ))
                        }
                    </div>

                    <div className={style.sectionFooter}>
                        <Link href="/meilleures-ventes" className={style.inlineLink}>
                            Voir tous les best sellers
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </section>

                {/* ── Catégories ───────────────────────────── */}
                <section aria-label="Nos catégories">
                    <SectionTitle
                        title="Explorez nos catégories"
                        description="Trouvez exactement ce que vous cherchez"
                    />

                    <div className={style.categoryGrid}>
                        {
                            categories.map((category) => (
                                <Link
                                    key={category.id}
                                    href={category.link}
                                    className={style.categoryCard}
                                >
                                    <Image
                                        width={600}
                                        height={400}
                                        layout="responsive"
                                        src="/hero-bg.jpg"
                                        alt={category.name}
                                    />
                                    <div className={style.categoryOverlay}>
                                        <div>
                                            <h3 className={style.categoryName}>{category.name}</h3>
                                            <p className={style.categoryCount}>{category.count}</p>
                                        </div>
                                        <span className={style.categoryArrow}>
                                            <ArrowRight size={18} />
                                        </span>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </section>

                {/* ── Bannière promo ───────────────────────── */}
                <section aria-label="Promotions">
                    <div className={style.promoBanner}>
                        <div className={style.promoContent}>
                            <span className={style.promoBadge}>
                                <Percent size={14} />
                                Vente flash
                            </span>
                            <h2 className={style.promoTitle}>
                                Jusqu'à -30% sur toute l'électronique
                            </h2>
                            <p className={style.promoText}>
                                Profitez de nos meilleures offres avant le 31 octobre.
                                Stock limité sur les articles en promotion.
                            </p>
                        </div>
                        <Button
                            type="button"
                            variante="warning"
                            icon={ArrowRight}
                            desc="Voir les promotions"
                        />
                    </div>
                </section>

                {/* ── Nos services ─────────────────────────── */}
                <section aria-label="Nos services">
                    <SectionTitle
                        title="Pourquoi nous choisir ?"
                        description="Des services pensés pour vous simplifier la vie"
                    />

                    <div className={style.serviceGrid}>
                        {
                            services.map((service) => (
                                <div key={service.id} className={style.serviceCard}>
                                    <span className={style.serviceIcon}>
                                        <service.icon size={22} />
                                    </span>
                                    <h3 className={style.serviceTitle}>{service.title}</h3>
                                    <p className={style.serviceText}>{service.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </section>

            </main>
        </>
    );
}
