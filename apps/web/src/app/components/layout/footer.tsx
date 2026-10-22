import style from "@style/components/layout/_footer.module.scss"
import { MapPin, Phone, Mail, Share2, MessageCircle, AtSign, Globe, Send, CreditCard,} from "lucide-react"
import Button from "../ui/button"
import Link from "next/link"
import Input from "../ui/input"

const shopLinks = [
    { id: 1, name: "Nouveautés", link: "/nouveautes" },
    { id: 2, name: "Meilleures ventes", link: "/meilleures-ventes" },
    { id: 3, name: "Promotions", link: "/promotions" },
    { id: 4, name: "Catégories", link: "/categories" },
    { id: 5, name: "Nos services", link: "/services" },
];

const infoLinks = [
    { id: 1, name: "À propos", link: "/about" },
    { id: 2, name: "Livraison & Retours", link: "/livraison-retours" },
    { id: 3, name: "FAQ", link: "/faq" },
    { id: 4, name: "Contact", link: "/contact" },
    { id: 5, name: "CGV", link: "/cgv" },
    { id: 6, name: "Confidentialité", link: "/confidentialite" },
];

// Icônes de marques indisponibles dans lucide-react utilisé :
// icônes génériques en attendant un pack de logos dédié.
const socialLinks = [
    { id: 1, name: "Facebook", link: "https://facebook.com", icon: Share2 },
    { id: 2, name: "Instagram", link: "https://instagram.com", icon: MessageCircle },
    { id: 3, name: "Twitter / X", link: "https://x.com", icon: AtSign },
    { id: 4, name: "Site web", link: "#", icon: Globe },
];

const payments = ["Visa", "Mastercard", "Orange Money", "Moov Money"];

export default function Footer() {

    return (
        <footer className={style.container}>

            <div className={style.top}>

                {/* ── Marque & contact ─────────────────────────── */}
                <div className={style.brand}>
                    <div className={style.title}>
                        <span>Zirod</span>
                        <span className={style.titleEnd}>Shop.</span>
                    </div>

                    <p className={style.desc}>
                        Votre boutique en ligne de confiance à Cotonou.
                        Produits de qualité, livraison rapide et service
                        client à votre écoute.
                    </p>

                    <div className={style.address}>
                        <span className={style.addressItem}>
                            <MapPin size={16} />
                            Cotonou, Bénin
                        </span>
                        <a href="tel:+2290196687276" className={style.addressItem}>
                            <Phone size={16} />
                            +229 01 96687276
                        </a>
                        <a href="mailto:contact@zirodshop.com" className={style.addressItem}>
                            <Mail size={16} />
                            contact@zirodshop.com
                        </a>
                    </div>

                    <div className={style.socials}>
                        {
                            socialLinks.map(({ id, name, link, icon: Icon }) => (
                                <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={name} className={style.socialLink} >
                                    <Icon size={18} />
                                </a>
                            ))
                        }
                    </div>
                </div>

                {/* ── Boutique ─────────────────────────────────── */}
                <nav className={style.section} aria-label="Boutique">
                    <h3 className={style.heading}>Boutique</h3>
                    <ul className={style.linkList}>
                        {
                            shopLinks.map((item) => (
                                <li key={item.id} className={style.linkItem}>
                                    <Link href={item.link} className={style.link}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                {/* ── Informations ─────────────────────────────── */}
                <nav className={style.section} aria-label="Informations">
                    <h3 className={style.heading}>Informations</h3>
                    <ul className={style.linkList}>
                        {
                            infoLinks.map((item) => (
                                <li key={item.id} className={style.linkItem}>
                                    <Link href={item.link} className={style.link}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                {/* ── Newsletter ───────────────────────────────── */}
                <div className={style.section}>
                    <h3 className={style.heading}>Newsletter</h3>
                    <p className={style.newsLetterText}>
                        Abonnez-vous pour recevoir nos nouveautés,
                        promotions et conseils en avant-première.
                    </p>
                    <form className={style.newsLetterForm}>
                        <Input type="email" id="newsLetter" name="newsLetter" placeholder="Votre adresse email" />
                        <Button type="submit" desc="S'abonner" variante="warning" full />
                    </form>
                    <div className={style.newsLetterHint}>
                        <Send size={14} />
                        <span>1 à 2 emails par mois, désinscription en un clic.</span>
                    </div>
                </div>

            </div>

            {/* ── Barre du bas : copyright + paiements ─────── */}
            <div className={style.bottom}>
                <p className={style.copyright}>
                    © {new Date().getFullYear()} ZirodShop — Tous droits réservés.
                </p>

                <ul className={style.payments} aria-label="Moyens de paiement acceptés">
                    {
                        payments.map((payment) => (
                            <li key={payment} className={style.payment}>
                                <CreditCard size={12} />
                                {payment}
                            </li>
                        ))
                    }
                </ul>

            </div>

        </footer>
    )
}
