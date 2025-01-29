import React from 'react';
import Styles from "../produk/produk.module.css";
import Image from "next/image";

export default function Produk() {
  return (
    <section>
        <div className={Styles.cardProduk}>
            <div>
                <Image 
                    src="/assets/sb-hudielong-platinum.png" 
                    alt="Foto Profil" 
                    width={300} 
                    height={300} 
                />
            </div>
        </div>
    </section>
  )
}
