import Link from "next/link";
import type { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <main style={{ padding: "50px", fontFamily: "sans-serif" }}>
      <h1>MEISA PUTRI NADIRA</h1>
      <p>Nim : 535250066</p>
      
      <br />
    
      <Link href="/home">
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>
          Masuk ke Kopi Nusantara
        </button>
      </Link>
    </main>
  );
}