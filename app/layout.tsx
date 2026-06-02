import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QAZDRIVE — Онлайн Аукционы Автомобилей в Казахстане",
  description: "Покупайте автомобили на прозрачном и безопасном онлайн-аукционе.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col bg-brand-bg antialiased`}>
        {/* Шапка сайта */}
        <Header />
        
        {/* Контент страницы */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Подвал сайта */}
        <Footer />
      </body>
    </html>
  );
}