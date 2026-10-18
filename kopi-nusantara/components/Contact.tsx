'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo, saya ${formData.nama} (${formData.email}). Pesan: ${formData.pesan}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="contact" id="kontak">
      <div className="contact-info">
        <h2 className="heading">Hubungi &amp; Pesan</h2>
        <p>Isi formulir berikut, tim kami akan segera menghubungi Anda kembali.</p>
        <p><b>Alamat:</b> Jl. Melati No. 12, Bandung</p>
        <p><b>WhatsApp:</b> 0812-3456-7890</p>
        <p><b>Jam Buka:</b> Setiap hari, 08.00 - 21.00</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-box">
          <label htmlFor="nama">Nama</label>
          <input 
            type="text" 
            id="nama" 
            placeholder="Nama lengkap Anda" 
            required
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="nama@email.com" 
            required
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="input-box">
          <label htmlFor="pesan">Pesan</label>
          <textarea 
            id="pesan" 
            rows={5} 
            placeholder="Tuliskan pesanan atau pertanyaan Anda"
            required
            onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-solid">Kirim Pesan</button>
      </form>
    </section>
  );
}