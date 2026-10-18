import Image from 'next/image';
import { menuItems } from '@/data/menu';

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <h2 className="heading">Menu Favorit Kami</h2>
      <p className="subheading">Menu andalan yang paling sering dipesan pelanggan.</p>

      <div className="menu-container">
        {menuItems.map((item) => (
          <div className="menu-box" key={item.id}>
            <div style={{ position: 'relative', width: '100%', height: '180px', marginBottom: '12px' }}>
              <Image
                src={item.gambar}
                alt={item.nama}
                fill
                style={{ objectFit: 'cover', borderRadius: '12px' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3>{item.nama}</h3>
            <p>{item.deskripsi}</p>
            <span className="price">Rp {item.harga.toLocaleString('id-ID')}</span>
          </div>
        ))}
      </div>
    </section>
  );
}