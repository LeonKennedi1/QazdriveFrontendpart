"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AgreementPage() {
  return (
    <main className="bg-[#020617] min-h-screen text-white font-sans selection:bg-orange-500 selection:text-black pt-40">
      <Header />
      <div className="mx-auto max-w-[800px] px-6 py-12 space-y-8 text-left">
        <div className="border-l-4 border-orange-500 pl-6 mb-12">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter leading-none">
            ПОЛЬЗОВАТЕЛЬСКОЕ <span className="text-orange-500">СОГЛАШЕНИЕ</span>
          </h1>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mt-4 italic">
            Публичная оферта и правила использования сервиса QAZDRIVE
          </p>
        </div>

        <div className="rounded-[2.5rem] border border-white/5 bg-[#0f172a] p-10 space-y-6 text-sm text-slate-400 leading-relaxed font-semibold uppercase italic">
          <p className="text-white font-black text-base not-italic">1. Статус соглашения</p>
          <p>Регистрируясь на сайте QAZDRIVE, вы подтверждаете свое полное согласие с условиями настоящей оферты и регламентом участия в торгах.</p>

          <p className="text-white font-black text-base not-italic">2. Обязанности сторон</p>
          <p>Пользователь обязуется указывать достоверные данные. Администрация гарантирует равные и прозрачные условия торгов для всех верифицированных аккаунтов.</p>

          <p className="text-white font-black text-base not-italic">3. Ответственность</p>
          <p>Платформа не несет ответственности за сбои на стороне вашего интернет-провайдера в момент фиксации финальных секунд аукциона.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}