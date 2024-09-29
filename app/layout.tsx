import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Oswald } from "next/font/google";
import { ThemeProvider } from "./context/darkModeContext";

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
      <ThemeProvider>
        <body
          className={`flex flex-col justify-between antialiased min-h-dvh bg-gradient-to-b from-black via-blue-950 to-black text-white`}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
