'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Bell, Home, LucideShoppingBasket, Settings, User2Icon } from 'lucide-react';
import style from '@style/components/layout/_header.module.scss';

const miniMenuItems = [
    {
        id: 'notifications',
        icon: <Bell className={style.mnColor} />,
        title: 'Notifications',
        links: [
            { id: 1, name: 'Voir toutes les notifications', href: '/notifications', icon: <Bell size={16} /> },
            { id: 2, name: 'Paramètres des notifications', href: '/settings', icon: <Settings size={16} /> },
        ],
    },
    {
        id: 'panier',
        icon: <LucideShoppingBasket className={style.mnColor} />,
        title: 'Mon panier',
        links: [
            { id: 1, name: 'Voir mon panier', href: '/panier', icon: <LucideShoppingBasket size={16} /> },
            { id: 2, name: "Continuer mes achats", href: '/bestsellers', icon: <Home size={16} /> },
        ],
    },
    {
        id: 'compte',
        icon: <User2Icon className={style.mnColor} />,
        title: 'Mon compte',
        links: [
            { id: 1, name: 'Se connecter', href: '/auth', icon: <User2Icon size={16} /> },
            { id: 2, name: 'Mon profil', href: '/profil', icon: <Settings size={16} /> },
        ],
    },
];

export default function MiniMenu() {

    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const menuRef = useRef<HTMLUListElement>(null);

    // Ferme la carte ouverte au clic en dehors du menu
    useEffect(() => {

        const onClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenMenu(null);
            }
        };

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpenMenu(null);
        }

        document.addEventListener('mousedown', onClickOutside);
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('mousedown', onClickOutside);
            document.removeEventListener('keydown', onKeyDown);
        }
    }, []);

    const toggleMenu = (id: string) => {
        setOpenMenu(current => current === id ? null : id);
    };

    return (
        <ul ref={menuRef} className={style.mini_menue}>
            {
                miniMenuItems.map(item => (
                    <li key={item.id} className={style.mini_menueItem}>

                        <button type="button" className={style.mini_menueBtn} aria-expanded={openMenu === item.id} aria-haspopup="true" onClick={() => toggleMenu(item.id)} >
                            {item.icon}
                        </button>

                        {openMenu === item.id && (
                            <div className={style.miniPopover} role="menu">
                                <span className={style.miniPopoverTitle}>{item.title}</span>
                                <ul className={style.miniPopoverLinks}>
                                    {
                                        item.links.map(link => (
                                            <li key={link.id} role="none">
                                                <Link href={link.href} className={style.miniPopoverLink} role="menuitem" onClick={() => setOpenMenu(null)} >
                                                    {link.icon}
                                                    <span>{link.name}</span>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )}

                    </li>
                ))
            }
        </ul>
    );
}
