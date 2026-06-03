"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="bg-[#020617] min-h-screen text-white font-sans selection:bg-orange-500 selection:text-black pt-40">
      <Header />
      <div className="mx-auto max-w-[800px] px-6 py-12 space-y-8 text-left">
        <div className="border-l-4 border-orange-500 pl-6 mb-12">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter leading-none">
            ПОЛИТИКА <span className="text-orange-500">КОНФИДЕНЦИАЛЬНОСТИ</span>
          </h1>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mt-4 italic">
            Защита персональных данных пользователей QAZDRIVE
          </p>
        </div>

        <div className="rounded-[2.5rem] border border-white/5 bg-[#0f172a] p-10 space-y-6 text-sm text-slate-400 leading-relaxed font-semibold uppercase italic">
          <p className="text-white font-black text-base not-italic">1. Сбор информации</p>
          <p>Мы собираем только те персональные данные, которые вы добровольно указываете при регистрации: имя, телефон, email и ваш город.</p>

          <p className="text-white font-black text-base not-italic">2. Безопасность данных</p>
          <p>Ваши пароли шифруются с использованием современных криптографических алгоритмов бэкенда и никогда не передаются третьим лицам.</p>

          <p className="text-white font-black text-base not-italic">3. Использование файлов Cookie</p>
          <p>Мы используем сессионные файлы cookie и хранилище localStorage исключительно для обеспечения стабильной работы вашей авторизации на платформе.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}