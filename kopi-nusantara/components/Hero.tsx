export default function Hero() {
  return (
    <section className="hero" id="beranda">
      <div className="hero-content">
        <p className="hero-label">Sejak 2019 - Diracik di Rumah, Disajikan dengan Hati</p>
        <h1>Secangkir Kehangatan Khas Nusantara</h1>
        <p>
          Kopi Nusantara menghadirkan biji kopi pilihan dari pelosok Indonesia, diseduh
          langsung setiap hari tanpa bahan pengawet. Nikmati dari layar HP, tablet, atau
          laptop Anda, tampilan kami menyesuaikan di mana pun Anda membuka halaman ini.
        </p>
        <div className="hero-btn-group">
          <a href="#menu" className="btn btn-solid">Lihat Menu</a>
          <a href="#kontak" className="btn btn-outline">Pesan Sekarang</a>
        </div>
      </div>

      <div className="hero-img">
        <div className="steam">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="cup">
          <div className="cup-foam"></div>
          <div className="cup-handle"></div>
        </div>
      </div>
    </section>
  );
}