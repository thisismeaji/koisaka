import React from 'react';
import Style from "../hero/hero.module.css";

export default function Hero() {
  return (
    <section className={Style.hero}>
        <h1>Selamat datang di Leotic</h1>
        <h2>Tempat Terbaik untuk mencari Ikan Hias Berkualitas</h2>
        <p>Leotic menyediakan berbagai jenis ikan hias cantik dengan kualitas terbaik untuk memperindah akuarium Anda, menciptakan suasana yang indah dan penuh kehidupan di rumah atau kantor Anda.</p>
        <button>Lihat Koleksi</button>
    </section>
  )
}
