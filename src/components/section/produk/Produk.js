import React from 'react';
import Styles from "../produk/produk.module.css";
import Image from "next/image";

export default function Produk() {
  return (
    <section className={Styles.produkSection}>
        <h2>Produk kami</h2>
        <div className={Styles.card}>
            <div className={Styles.cardProduk}>
                <div className={Styles.gambar}>
                    <Image 
                        src="/assets/sb-hudielong-platinum.png" 
                        alt="Foto Profil" 
                        width={512} 
                        height={512} 
                    />
                </div>
                <div className={Styles.diskripsi}>
                    <h3>SB Hudielong / Butterfly Platinum grade A</h3>
                    <p>Koi Bulat premium dengan warna platinum yang berkilau.</p>
                    <h4>Rp.200.000</h4>
                </div>
            </div>
            <div className={Styles.cardProduk}>
                <div className={Styles.gambar}>
                    <Image 
                        src="/assets/sb-hudielong-platinum.png" 
                        alt="Foto Profil" 
                        width={512} 
                        height={512} 
                    />
                </div>
                <div className={Styles.diskripsi}>
                    <h3>SB Hudielong / Butterfly Platinum grade A</h3>
                    <p>Koi Bulat premium dengan warna platinum yang berkilau.</p>
                    <h4>Rp.200.000</h4>
                </div>
            </div>
            <div className={Styles.cardProduk}>
                <div className={Styles.gambar}>
                    <Image 
                        src="/assets/sb-hudielong-platinum.png" 
                        alt="Foto Profil" 
                        width={512} 
                        height={512} 
                    />
                </div>
                <div className={Styles.diskripsi}>
                    <h3>SB Hudielong / Butterfly Platinum grade A</h3>
                    <p>Koi Bulat premium dengan warna platinum yang berkilau.</p>
                    <h4>Rp.200.000</h4>
                </div>
            </div>
            <div className={Styles.cardProduk}>
                <div className={Styles.gambar}>
                    <Image 
                        src="/assets/sb-hudielong-platinum.png" 
                        alt="Foto Profil" 
                        width={512} 
                        height={512} 
                    />
                </div>
                <div className={Styles.diskripsi}>
                    <h3>SB Hudielong / Butterfly Platinum grade A</h3>
                    <p>Koi Bulat premium dengan warna platinum yang berkilau.</p>
                    <h4>Rp.200.000</h4>
                </div>
            </div>
        </div>
    </section>
  )
}
