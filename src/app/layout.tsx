import type { Metadata } from "next";
import { Inter, Abhaya_Libre } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const abhayaLibre = Abhaya_Libre({
  variable: "--font-abhaya",
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

const tank = localFont({
  src: "../shared/tank-webfont/tank.woff",
  variable: "--font-tank",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Каталоги и прайс-листы | AVILON TANK",
  description: "Официальный дилер TANK в Москве. Каталоги и прайс-листы на автомобили Tank 300, 400, 500, 700",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${abhayaLibre.variable} ${tank.variable}`}>
        {children}
      </body>
    </html>
  );
}
