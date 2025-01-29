import React from 'react';
import Style from "../hero/hero.module.css";

export default function Hero() {
  return (
    <section className={Style.hero}>
        <h1>Selamat datang di Koisaka</h1>
        <h2>Tempat Terbaik untuk mencari Ikan Koi Import yang Berkualitas</h2>
        <p>Temukan koleksi ikan Koi Import berkualitas terbaik yang cocok untuk melengkapi keindahan kolam Anda. Koisaka adalah tempat terpercaya bagi pecinta Koi untuk mendapatkan ikan dengan keindahan dan kesehatan yang terjamin.</p>
        <button>Lihat Produk</button>
    </section>
  )
}
