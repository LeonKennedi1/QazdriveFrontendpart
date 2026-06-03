"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RulesPage() {
  return (
    <main className="bg-[#020617] min-h-screen text-white font-sans selection:bg-orange-500 selection:text-black pt-40">
      <Header />
      <div className="mx-auto max-w-[800px] px-6 py-12 space-y-8 text-left">
        <div className="border-l-4 border-orange-500 pl-6 mb-12">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter leading-none">
            ПРАВИЛА <span className="text-orange-500">ТОРГОВ</span>
          </h1>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mt-4 italic">
            Регламент проведения онлайн-аукционов QAZDRIVE
          </p>
        </div>

        <div className="rounded-[2.5rem] border border-white/5 bg-[#0f172a] p-10 space-y-6 text-sm text-slate-400 leading-relaxed font-semibold uppercase italic">
          <p className="text-white font-black text-base not-italic">1. Общие положения</p>
          <p>Каждый участник торгов должен пройти верификацию номера телефона при регистрации. Все ставки являются юридически обязывающими.</p>

          <p className="text-white font-black text-base not-italic">2. Шаг ставки</p>
          <p>Минимальный шаг ставки определяется индивидуально для каждого лота в зависимости от его текущей рыночной стоимости.</p>

          <p className="text-white font-black text-base not-italic">3. Завершение аукциона</p>
          <p>Аукцион завершается автоматически по истечении таймера обратного отсчета. Побеждает участник, сделавший наибольшую ставку.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}