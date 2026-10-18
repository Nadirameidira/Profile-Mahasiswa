'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('beranda');

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      document.querySelectorAll('section[id]').forEach((section) => {
        const offset = (section as HTMLElement).offsetTop - 150;
        const height = (section as HTMLElement).offsetHeight;
        if (top >= offset && top < offset + height) {
          setActive(section.id);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#menu', label: 'Menu' },
    { href: '#tentang', label: 'Tentang Kami' },
    { href: '#faq', label: 'FAQ' },
    { href: '#kontak', label: 'Kontak' },
  ];

  return (
    <header className="header">
      {/* Logo diklik akan kembali ke halaman awal (Nama & NIM) */}
      <Link href="/" className="logo">
        <span className="logo-dot" />Kopi Nusantara
      </Link>
      
      <span id="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</span>
      
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={active === l.href.slice(1) ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}