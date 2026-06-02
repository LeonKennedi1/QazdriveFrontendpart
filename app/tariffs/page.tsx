"use client";

import { useState } from "react";

// Данные для карточек тарифов
const TARIFFS = [
  {
    name: "БАЗОВЫЙ",
    tagline: "ДЛЯ ОЗНАКОМЛЕНИЯ",
    price: "0 ₸",
    features: [
      { text: "1 активная ставка", included: true },
      { text: "Поиск по фильтрам", included: true },
      { text: "Email-уведомления", included: true },
      { text: "История продаж авто", included: false },
      { text: "SMS-оповещения", included: false },
      { text: "VIN-отчеты", included: false },
      { text: "Техподдержка 24/7", included: false },
    ],
    buttonText: "ВЫБРАТЬ ПЛАН",
    isCurrent: false,
    isPopular: false,
  },
  {
    name: "СТАНДАРТ",
    tagline: "ДЛЯ ЧАСТНЫХ ЛИЦ",
    price: "25 000 ₸",
    features: [
      { text: "До 3 активных ставок", included: true },
      { text: "Поиск по фильтрам", included: true },
      { text: "Email-уведомления", included: true },
      { text: "История продаж авто", included: true },
      { text: "SMS-оповещения", included: true },
      { text: "VIN-отчеты", included: false },
      { text: "Техподдержка 24/7", included: false },
    ],
    buttonText: "ВЫБРАТЬ ПЛАН",
    isCurrent: false,
    isPopular: false,
  },
  {
    name: "ДРАЙВ",
    tagline: "САМЫЙ ПОПУЛЯРНЫЙ",
    price: "55 000 ₸",
    features: [
      { text: "Безлимитные ставки", included: true },
      { text: "Поиск по фильтрам", included: true },
      { text: "Email-уведомления", included: true },
      { text: "История продаж авто", included: true },
      { text: "SMS-оповещения", included: true },
      { text: "Полный отчет по VIN", included: true },
      { text: "Техподдержка 24/7", included: true },
    ],
    buttonText: "ТЕКУЩИЙ ПЛАН",
    isCurrent: true,
    isPopular: true,
  },
  {
    name: "БИЗНЕС",
    tagline: "ДЛЯ МАЛЫХ ДИЛЕРОВ",
    price: "125 000 ₸",
    features: [
      { text: "Безлимитные ставки", included: true },
      { text: "Приоритетные доки", included: true },
      { text: "Скидка на доставку", included: true },
      { text: "До 10 авто в месяц", included: true },
      { text: "SMS + Push уведомления", included: true },
      { text: "Полный отчет по VIN", included: true },
      { text: "Техподдержка 24/7", included: true },
    ],
    buttonText: "ВЫБРАТЬ ПЛАН",
    isCurrent: false,
    isPopular: false,
  },
  {
    name: "VIP",
    tagline: "ПОЛНЫЙ ЭКСКЛЮЗИВ",
    price: "250 000 ₸",
    features: [
      { text: "Закрытые аукционы", included: true },
      { text: "Личный менеджер", included: true },
      { text: "Помощь в растаможке", included: true },
      { text: "Безлимит авто", included: true },
      { text: "Все типы уведомлений", included: true },
      { text: "Полный отчет по VIN", included: true },
      { text: "Приоритет в торгах", included: true },
    ],
    buttonText: "ВЫБРАТЬ ПЛАН",
    isCurrent: false,
    isPopular: false,
  },
];

// Данные для аккордеона FAQ
const FAQ_ITEMS = [
  {
    question: "Можно ли сменить тариф?",
    answer: "Да, вы можете сменить тариф в любое время. При повышении уровня доступа — новые лимиты и возможности появятся мгновенно после подтверждения.",
  },
  {
    question: "Как происходит оплата?",
    answer: "Оплата производится через платежные сервисы Kaspi Pay, Halyk, Kaspi Gold или любой другой банковской картой. Счет на оплату за следующий месяц выставляется автоматически за 3 дня до окончания текущего.",
  },
  {
    question: "Есть ли пробный период?",
    answer: "Базовый план абсолютно бесплатен и активен по умолчанию. Для тарифов СТАНДАРТ и ДРАЙВ доступен бесплатный ознакомительный 7-дневный пробный период.",
  },
  {
    question: "Что такое закрытые аукционы?",
    answer: "Закрытые аукционы — это эксклюзивные торги с редкими, коллекционными или люксовыми автомобилями, доступными для торгов исключительно участникам с VIP-тарифом.",
  },
];

export default function TariffsPage() {
  // Состояние для открытия аккордеона FAQ
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-12 space-y-24">
      
      {/* Шапка страницы */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-black text-white uppercase tracking-tight md:text-5xl">
          ТАРИФНЫЕ <span className="text-brand-orange">ПЛАНЫ</span>
        </h1>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-textSecondary">
          Выберите подходящий уровень доступа к торгам
        </p>
        <div className="pt-2">
          <span className="inline-block rounded-full bg-brand-orange/10 border border-brand-orange/30 px-5 py-2 text-xs font-bold text-brand-orange">
            Текущий тариф: <span className="font-black">DRIVE</span>
          </span>
        </div>
      </div>

      {/* Сетка тарифов */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 items-stretch">
        {TARIFFS.map((tariff, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col justify-between rounded-2xl border bg-brand-card p-6 transition-all duration-300 ${
              tariff.isCurrent
                ? "border-brand-orange shadow-[0_0_25px_rgba(255,92,0,0.2)] scale-[1.03] z-10"
                : "border-brand-border hover:border-brand-orange/50"
            }`}
          >
            {/* Метка "ХИТ" для популярного тарифа */}
            {tariff.isPopular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-brand-orange px-3 py-1 text-[9px] font-black uppercase text-white tracking-widest">
                ХИТ
              </span>
            )}

            {/* Заголовок тарифа */}
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-[10px] font-black tracking-widest text-brand-textSecondary uppercase">
                  {tariff.tagline}
                </p>
                <h3 className="mt-2 text-lg font-black text-white">{tariff.name}</h3>
              </div>

              {/* Стоимость */}
              <div className="text-center border-b border-brand-border/60 pb-5">
                <span className="text-2xl font-black text-white">{tariff.price}</span>
                <span className="text-[10px] text-brand-textSecondary font-semibold"> / месяц</span>
              </div>

              {/* Опции тарифа */}
              <ul className="space-y-3.5 pt-2">
                {tariff.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className={`flex items-start gap-2.5 text-xs ${
                      feature.included ? "text-white" : "text-brand-textSecondary/45"
                    }`}
                  >
                    <span className={`text-[13px] font-bold shrink-0 ${feature.included ? "text-emerald-500" : "text-red-500/50"}`}>
                      {feature.included ? "✓" : "✕"}
                    </span>
                    <span className="leading-tight">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Кнопка действия */}
            <div className="pt-8">
              <button
                disabled={tariff.isCurrent}
                className={`w-full rounded-xl py-3.5 text-[10px] font-black tracking-wider transition-all border ${
                  tariff.isCurrent
                    ? "bg-transparent border-brand-orange text-brand-orange cursor-default"
                    : "bg-brand-bg/50 border-brand-border text-brand-textSecondary hover:border-brand-orange hover:text-white"
                }`}
              >
                {tariff.buttonText}
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Секция FAQ */}
      <div className="mx-auto max-w-3xl space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">ЧАСТЫЕ ВОПРОСЫ</h2>
        </div>

        {/* Интерактивный Аккордеон */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-brand-border bg-brand-card transition-all"
              >
                {/* Кнопка раскрытия */}
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-bold text-white outline-none hover:text-brand-orange transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className={`text-xs text-brand-textSecondary transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                {/* Раскрывающийся текст ответа */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-40 border-t border-brand-border/40" : "max-h-0"
                  }`}
                >
                  <p className="px-6 py-5 text-xs leading-relaxed text-brand-textSecondary">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}