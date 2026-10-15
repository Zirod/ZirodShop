import style from '@style/components/layout/_header.module.scss'
import Link from 'next/link';
import { Bell, User2Icon, Mail, Phone, Search, LucideShoppingBasket } from 'lucide-react';
import Input from '../ui/input';

export default function Header(){

    const navItem = [
        { id: 1, name:"Home", link:"/"},
        { id: 2, name:"A Propos", link:"/about"},
        { id: 3, name:"Services", link:"/services"},
        { id: 4, name:"Contact", link:"/contact"},
    ];

    return(
        <header className={style.appHead}>
            {/* App head with infoline */}
            <div className={style.infoline}>
                <a href="mailto:judizirod0@gmail.com" className={style.infolineItem}>
                    <Mail size={15}/> <span>judizirod0@gmail.com</span>
                </a>
                <a href="tel:002290196697276" className={style.infolineItem}>
                    <Phone size={17}/> <span> +229 01 96687276</span>
                </a>
            </div>      

            {/* Header with site name and mini menue */}
            <div className={style.title}>
                <a href=""><div className={style.siteName}><strong>Zirod</strong><strong className={style.nameLabel}>Shop.</strong></div></a>

                <Input withIcon={true} position='left' type='search' name='Rechercher' placeholder='Rechercher...'>
                    <Search className={style.icon} />
                </Input>

                {/* Mini menue */}
                <ul className={style.mini_menue}>
                    <li className={style.mini_menueItem}><Bell className={style.mnColor}/></li>
                    <li className={style.mini_menueItem}><LucideShoppingBasket className={style.mnColor}/></li>
                    <li className={style.mini_menueItem}><User2Icon className={style.mnColor}/></li>

                </ul>
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