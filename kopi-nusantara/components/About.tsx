import Image from 'next/image';

export default function About() {
  return (
    <section className="about" id="tentang">
      <div className="about-icon">
        <Image 
          src="/images/biji-kopi.png" 
          alt="Biji kopi" 
          width={180} 
          height={180} 
          style={{ width: 'auto', height: 'auto', maxWidth: '180px' }}
        />
      </div>

      <div className="about-content">
        <h2 className="heading">Tentang Kopi Nusantara</h2>
        <p>
          Berawal dari dapur rumahan di tahun 2019, Kopi Nusantara tumbuh dari kecintaan
          terhadap biji kopi lokal Indonesia dari Gayo, Toraja, hingga Kintamani.
          Kami percaya secangkir kopi terbaik lahir dari proses yang jujur dan bahan
          yang berkualitas.
        </p>

        <ul className="about-list">
          <li><span className="dot"></span>Biji kopi pilihan langsung dari petani lokal</li>
          <li><span className="dot"></span>Diseduh segar setiap hari di dapur rumahan kami</li>
          <li><span className="dot"></span>Bisa dipesan kapan saja lewat WhatsApp</li>
        </ul>
      </div>
    </section>
  );
}