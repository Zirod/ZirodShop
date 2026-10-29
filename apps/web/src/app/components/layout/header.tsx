import style from '@style/components/layout/_header.module.scss'
import Link from 'next/link';
import { Mail, Phone, Search } from 'lucide-react';
import Input from '../ui/input';
import MiniMenu from './mini-menu';

export default function Header(){

    const navItem = [
        { id: 1, name:"Accueil", link:"/"},
        { id: 2, name:"Nouveautés", link:"/news"},
        { id: 3, name:"Meilleures ventes", link:"/bestsellers"},
        { id: 4, name:"Promotions", link:"/promotion"},
        { id: 5, name:"Catégories", link:"/categrie"},
        { id: 6, name:"Nos services", link:"/services"},
        { id: 7, name:"Contact", link:"/contact"},
    ];

    return(
        <header className={style.appHead}>
            {/* App head with infoline */}
            <div className={style.infoline}>
                <a href="mailto:judizirod0@gmail.com" className={style.infolineItem}>
                    <Mail size={17}/><span> judizirod0@gmail.com</span>
                </a>
                <a href="tel:002290196697276" className={style.infolineItem}>
                    <Phone size={17}/> <span> +229 01 96687276</span>
                </a>
            </div>      

            {/* Header with site name and mini menue */}
            <div className={style.title}>
                <a href="."><div className={style.siteName}><strong>Zirod</strong><strong className={style.nameLabel}>Shop.</strong></div></a>

                <Input withIcon={true} position='left' type='search' name='Rechercher' placeholder='Rechercher...'>
                    <Search className={style.icon} />
                </Input>

                {/* Mini menue */}
                <MiniMenu />
            </div>

            {/* App navbar */}
            <nav className={style.header}>
                <nav className={ style.navigation_barre}>
                    <ul className={ style.nav_items}>
                        {
                            navItem.map( nav => (
                                <li key ={nav.id} className={style.nav_item}><Link className={style.nav_color} href ={nav.link}>{nav.name}</Link></li>
                            ))
                        }
                    </ul>
                </nav>
            </nav>
        </header>
    )
}