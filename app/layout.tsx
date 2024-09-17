import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "AquaGastronomy",
  description:
    "Where simplicity meets sophistication, with award-winning hydro-culinarians",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Playfair/Playfair-VariableFont_opsz,wdth,wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Playfair/Playfair-VariableFont_opsz,wdth,wght-italic.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Source_Sans_3/SourceSans3-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Source_Sans_3/SourceSans3-Italic-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>
      <body
        className={`antialiased min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
