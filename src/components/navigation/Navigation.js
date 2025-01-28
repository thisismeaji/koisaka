"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styles from "../navigation/navigation.module.css";

export default function Navigation() {
    const [isNavActive, setIsNavActive] = useState(false);

    // Fungsi untuk toggle menu
    const toggleNav = () => {
        setIsNavActive((prev) => !prev);
    };

    // Fungsi untuk close menu
    const handleClose = () => {
        setIsNavActive(false);
    };

    // Fungsi untuk close menu sebelum navigasi
    const handleNavLinkClick = (href) => {
        setIsNavActive(false);
    };

    return (
        <nav className={Styles.nav}>
            <div className={Styles.logo}>
                <Link href="/">
                    <Image
                        src="/assets/logo.png"
                        alt="Logo"
                        width="1000"
                        height="1000"
                    />
                </Link>
            </div>
            <div className={Styles.navList}>
                {/* Desktop Navigation */}
                <ul className={Styles.navDekstop}>
                    <li>
                        <Link href="/">Beranda</Link>
                    </li>
                    <li>
                        <Link href="/produk">Produk</Link>
                    </li>
                    <li>
                        <Link href="/testimoni">Testimoni</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/promo">Promo</Link>
                    </li>
                </ul>

                {/* Mobile Navigation */}
                <ul className={`${Styles.navMobile} ${isNavActive ? Styles.navActive : ""}`}>
                    <li>
                        <Link href="/" onClick={handleNavLinkClick}>Home</Link>
                    </li>
                    <li>
                        <Link href="/produk" onClick={handleNavLinkClick}>Produk</Link>
                    </li>
                    <li>
                        <Link href="/testimoni" onClick={handleNavLinkClick}>Testimoni</Link>
                    </li>
                    <li>
                        <Link href="/blog" onClick={handleNavLinkClick}>Blog</Link>
                    </li>
                    <li>
                        <Link href="/promo" onClick={handleNavLinkClick}>Promo</Link>
                    </li>
                    {/* Tombol Close */}
                    <li className={Styles.closeButton} onClick={handleClose}>×</li>
                </ul>

                {/* Overlay */}
                {isNavActive && <div className={Styles.overlay} onClick={handleClose}></div>}
            </div>

            {/* Menu Button */}
            <div className={Styles.menu} onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}
