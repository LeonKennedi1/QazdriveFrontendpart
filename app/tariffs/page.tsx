"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const PLANS = [
  { 
    name: "Базовый", 
    price: "0 ₸", 
    features: ["1 активная ставка", "Поиск по фильтрам", "Email-уведомления"], 
    color: "border-slate-700",
    desc: "Для ознакомления",
    char: "Б"
  },
  { 
    name: "Стандарт", 
    price: "25 000 ₸", 
    features: ["До 3 активных ставок", "История продаж авто", "SMS-оповещения"], 
    color: "border-blue-500",
    desc: "Для частных лиц",
    char: "С"
  },
  { 
    name: "Драйв", 
    price: "55 000 ₸", 
    features: ["Безлимитные ставки", "Полный отчет по VIN", "Техподдержка 24/7"], 
    color: "border-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.15)]",
    desc: "Самый популярный",
    char: "Д",
    isPopular: true
  },
  { 
    name: "Бизнес", 
    price: "125 000 ₸", 
    features: ["Приоритетные доки", "Скидка на доставку", "До 10 авто в месяц"], 
    color: "border-purple-500",
    desc: "Для малых дилеров",
    char: "Б"
  },
  { 
    name: "VIP", 
    price: "250 000 ₸", 
    features: ["Закрытые аукционы", "Личный менеджер", "Помощь в растаможке"], 
    color: "border-yellow-500",
    desc: "Полный эксклюзив",
    char: "V"
  },
];

const FAQ_ITEMS = [
  {
    question: "Можно ли сменить тариф?",
    answer: "Да, вы можете сменить тариф в любое время. При повышении — доступ появится мгновенно после подтверждения транзакции.",
  },
  {
    question: "Как происходит оплата?",
    answer: "Оплата производится через Kaspi Pay, Halyk, Kaspi Gold или банковской картой. Выставляется счёт на следующий месяц.",
  },
  {
    question: "Есть ли пробный период?",
    answer: "Базовый план бесплатен и доступен всегда. Для СТАНДАРТ и выше доступен 7-дневный пробный период.",
  },
  {
    question: "Что такое закрытые аукционы?",
    answer: "Это эксклюзивные торги с редкими лотами, доступные только VIP-участникам. Там появляются уникальные и дорогостоящие автомобили.",
  },
];

export default function TariffsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[#020617] min-h-screen text-white font-sans selection:bg-orange-500 selection:text-black">
      <Header />

      <div className="container mx-auto px-4 pt-40 pb-24">
        
        {/* Хедер страницы */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-black uppercase italic tracking-tighter leading-none">
            ТАРИФНЫЕ <span className="text-orange-500">ПЛАНЫ</span>
          </h1>
          <p className="text-slate-500 uppercase text-[10px] tracking-[0.4em] font-bold">
            Выберите подходящий уровень доступа к торгам
          </p>
          <div className="pt-2">
            <span className="inline-block rounded-full bg-[#0f172a] border border-white/5 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
              Текущий тариф: <span className="text-orange-500">DRIVE</span>
            </span>
          </div>
        </div>

        {/* Сетка тарифов (Брутализм v4) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PLANS.map((plan) => (
            <div 
              key={plan.name} 
              className={`bg-slate-900/50 border-t-4 ${plan.color} border-x border-b border-white/5 p-8 rounded-[2rem] flex flex-col justify-between hover:bg-slate-800 transition-all duration-500 group cursor-pointer hover:-translate-y-2 shadow-2xl relative overflow-hidden`}
            >
              {/* Хит продаж */}
              {plan.isPopular && (
                <span className="absolute top-3 right-6 bg-orange-500 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest italic z-20">
                  ХИТ
                </span>
              )}

              {/* Декор на фоне карточки */}
              <div className="absolute -right-4 -top-4 text-white/5 font-black text-6xl italic select-none uppercase">
                {plan.char}
              </div>

              <div className="relative z-10 text-left">
                <p className="text-[9px] text-orange-500 font-black uppercase tracking-widest mb-2 italic">{plan.desc}</p>
                <h4 className="text-2xl font-black uppercase italic text-white group-hover:text-orange-500 transition-colors tracking-tighter">
                  {plan.name}
                </h4>
                <p className="text-3xl font-black text-white mt-6 mb-8 tracking-tighter">{plan.price}</p>
                
                <ul className="space-y-4">
                  {plan.features.map(f => (
                    <li key={f} className="text-[10px] text-slate-400 uppercase font-bold flex items-start gap-2 leading-relaxed">
                      <span className="text-orange-500">/</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/register"
                className="w-full mt-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all italic text-center"
              >
                Выбрать план
              </Link>
            </div>
          ))}
        </div>

        {/* Раздел вопросов (FAQ) */}
        <div className="max-w-4xl mx-auto mt-32 space-y-16">
          <div className="text-center">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">
              Частые <span className="text-orange-500 underline decoration-1 underline-offset-8">Вопросы</span>
            </h2>
            <p className="text-slate-500 uppercase text-[10px] tracking-[0.4em] font-bold">Ответы на часто возникающие вопросы</p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-2xl border border-white/5 bg-[#0f172a] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center px-8 py-6 text-left text-sm font-black uppercase italic tracking-wider hover:text-orange-500 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-slate-500 text-xs">{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && (
                    <div className="px-8 pb-6 text-xs text-slate-400 leading-relaxed font-semibold uppercase tracking-wider text-left border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}