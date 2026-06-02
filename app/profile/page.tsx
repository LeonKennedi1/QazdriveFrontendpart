"use client";

import Link from "next/link";

// Данные об активных ставках для демонстрации на защите
const MY_BIDS = [
  {
    id: "1",
    title: "BMW M5 Competition 2022",
    myBid: "50 000 000",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=200",
    status: "outbid", // перебита
  },
  {
    id: "2",
    title: "Ferrari 458 Italia 2019",
    myBid: "95 500 000",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=200",
    status: "leading", // лидирует
  },
  {
    id: "3",
    title: "Porsche 911 Turbo S 2022",
    myBid: "82 500 000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=200",
    status: "outbid",
  },
  {
    id: "4",
    title: "Mercedes-Benz S580 2023",
    myBid: "38 000 000",
    image: "https://images.unsplash.com/photo-1617531653332-bd046c24f206?q=80&w=200",
    status: "outbid",
  },
  {
    id: "5",
    title: "Bentley Continental GT 2021",
    myBid: "70 000 000",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=200",
    status: "outbid",
  },
];

export default function ProfilePage() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 py-12 md:px-12 space-y-8">
      
      {/* 1. Блок профиля пользователя */}
      <div className="flex flex-col gap-6 rounded-2xl border border-brand-border bg-brand-card p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-orange text-2xl font-black text-white">
            А
          </div>
          <div className="space-y-1.5">
            <h2 className="text-xl font-black text-white">Алибек Джаксыбеков</h2>
            <p className="text-sm text-brand-textSecondary">user@drive.kz</p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="rounded bg-brand-orange/10 border border-brand-orange/30 px-2 py-0.5 text-[10px] font-bold text-brand-orange">
                ДРАЙВ
              </span>
              <span className="rounded bg-brand-border px-2 py-0.5 text-[10px] font-bold text-brand-textSecondary">
                Алматы
              </span>
            </div>
          </div>
        </div>
        <Link href="/tariffs" className="rounded-xl border border-brand-border px-6 py-3 text-xs font-bold text-white hover:border-brand-orange hover:bg-brand-orange/5 transition-all text-center">
          Улучшить тариф
        </Link>
      </div>

      {/* 2. Сетка статистики */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-brand-border bg-brand-card p-6 space-y-2">
          <div className="text-xl">🔨</div>
          <p className="text-2xl font-black text-white">5</p>
          <p className="text-[10px] font-bold uppercase tracking-wider text-brand-textSecondary">Активных ставок</p>
        </div>
        <div className="rounded-2xl border border-brand-border bg-brand-card p-6 space-y-2">
          <div className="text-xl">📈</div>
          <p className="text-2xl font-black text-white">1</p>
          <p className="text-[10px] font-bold uppercase tracking-wider text-brand-textSecondary">Лидирую в торгах</p>
        </div>
        <div className="rounded-2xl border border-brand-border bg-brand-card p-6 space-y-2">
          <div className="text-xl">🏆</div>
          <p className="text-2xl font-black text-white">0</p>
          <p className="text-[10px] font-bold uppercase tracking-wider text-brand-textSecondary">Выигранных авто</p>
        </div>
        <div className="rounded-2xl border border-brand-border bg-brand-card p-6 space-y-2">
          <div className="text-xl">⭐</div>
          <p className="text-2xl font-black text-white">6</p>
          <p className="text-[10px] font-bold uppercase tracking-wider text-brand-textSecondary">Всего ставок</p>
        </div>
      </div>

      {/* 3. Основной контент: Ставки и Выигранные лоты */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        
        {/* Активные ставки (Левая колонка) */}
        <div className="lg:col-span-7 rounded-2xl border border-brand-border bg-brand-card p-6 space-y-6">
          <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <span>🔨</span> Активные ставки
          </h3>
          
          <div className="space-y-4">
            {MY_BIDS.map((bid) => (
              <div key={bid.id} className="flex items-center justify-between rounded-xl border border-brand-border/60 bg-brand-bg/50 p-3 hover:border-brand-border transition-colors">
                <div className="flex items-center gap-3">
                  <img
                    src={bid.image}
                    alt={bid.title}
                    className="h-12 w-16 rounded-lg object-cover bg-zinc-900"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white leading-snug">{bid.title}</h4>
                    <p className="text-[11px] text-brand-textSecondary mt-1">
                      Моя ставка: <span className="font-semibold text-white">{bid.myBid} ₸</span>
                    </p>
                  </div>
                </div>

                {/* Статус ставки */}
                {bid.status === "leading" ? (
                  <span className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 text-[10px] font-bold text-emerald-400">
                    ✓ Лидирую
                  </span>
                ) : (
                  <span className="rounded-lg bg-red-500/10 border border-red-500/30 px-3 py-1.5 text-[10px] font-bold text-red-400">
                    ✕ Перебита
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Выигранные авто (Правая колонка) */}
        <div className="lg:col-span-5 rounded-2xl border border-brand-border bg-brand-card p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-6">
              <span>🏆</span> Выигранные авто
            </h3>
            
            {/* Пустое состояние */}
            <div className="py-20 text-center space-y-3">
              <span className="text-4xl">🚗</span>
              <p className="text-sm font-bold text-white mt-2">Побед пока нет</p>
              <p className="text-xs text-brand-textSecondary max-w-xs mx-auto">
                Ваши выигранные на аукционах автомобили будут отображаться в этой вкладке.
              </p>
            </div>
          </div>

          <Link href="/catalog" className="w-full block text-center rounded-xl bg-brand-orange py-3.5 text-xs font-black text-white hover:bg-brand-orangeHover transition-colors">
            ПЕРЕЙТИ В КАТАЛОГ
          </Link>
        </div>

      </div>

      {/* 4. Блок Уведомления */}
      <div className="rounded-2xl border border-brand-border bg-brand-card p-6 space-y-6">
        <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <span>🔔</span> Последние уведомления
        </h3>
        
        <div className="space-y-4">
          {/* Уведомление 1 */}
          <div className="flex gap-3 text-xs leading-relaxed border-b border-brand-border pb-4">
            <span className="text-brand-orange text-lg">●</span>
            <div className="space-y-1">
              <p className="font-bold text-white">Вашу ставку перебили</p>
              <p className="text-brand-textSecondary">В лоте LOT-011 — Aston Martin DB11 ваша ставка 91 000 000 ₸ перебита. Аукцион завершён.</p>
              <span className="text-[10px] text-brand-textSecondary/70 block">02.06.2026, 15:20:55</span>
            </div>
          </div>
          {/* Уведомление 2 */}
          <div className="flex gap-3 text-xs leading-relaxed border-b border-brand-border pb-4">
            <span className="text-brand-orange text-lg">●</span>
            <div className="space-y-1">
              <p className="font-bold text-white">Вашу ставку перебили</p>
              <p className="text-brand-textSecondary">В лоте LOT-001 — BMW M5 Competition ваша ставка перебита. Новая ставка: 52 500 000 ₸.</p>
              <span className="text-[10px] text-brand-textSecondary/70 block">02.06.2026, 16:50:55</span>
            </div>
          </div>
          {/* Уведомление 3 */}
          <div className="flex gap-3 text-xs leading-relaxed">
            <span className="text-brand-textSecondary text-lg">○</span>
            <div className="space-y-1">
              <p className="font-bold text-white">Новый лот на аукционе</p>
              <p className="text-brand-textSecondary">Добавлен новый лот: BMW X6 M Competition 2024 (LOT-012). Торги начинаются скоро!</p>
              <span className="text-[10px] text-brand-textSecondary/70 block">02.06.2026, 05:20:55</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Активный тариф пользователя */}
      <div className="rounded-2xl border border-brand-orange/30 bg-gradient-to-r from-brand-card to-brand-bg p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <span className="text-3xl">👑</span>
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider">Тариф: ДРАЙВ</h4>
            <p className="text-xs text-brand-textSecondary mt-1">Вам доступны безлимитные ставки на любые аукционы Казахстана.</p>
          </div>
        </div>
        <Link href="/tariffs" className="rounded-xl bg-brand-orange px-6 py-3.5 text-xs font-black text-white hover:bg-brand-orangeHover transition-colors text-center shadow-lg shadow-brand-orange/10">
          Сменить тариф
        </Link>
      </div>

    </div>
  );
}