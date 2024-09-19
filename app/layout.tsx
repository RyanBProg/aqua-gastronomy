import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

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
    <html lang="en" className={oswald.variable}>
      <body
        className={`antialiased min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
