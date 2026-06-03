"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const MY_BIDS = [
  {
    id: "1",
    title: "BMW M5 Competition 2022",
    myBid: "50 000 000",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=200",
    status: "outbid",
  },
  {
    id: "2",
    title: "Ferrari 458 Italia 2019",
    myBid: "95 500 000",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=200",
    status: "leading",
  },
  {
    id: "3",
    title: "Porsche 911 Turbo S 2022",
    myBid: "82 500 000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=200",
    status: "outbid",
  },
];

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [showFullPhone, setShowFullPhone] = useState(false); // Стейт для скрытия/показа телефона

  useEffect(() => {
    setMounted(true);
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Функция маскирования телефона (скрывает всё, кроме последних 4 цифр)
  const getMaskedPhone = (phoneStr: string) => {
    if (!phoneStr) return "";
    // Оставляет только последние 5 символов (например, -56-78)
    return `+7 (***) ***${phoneStr.slice(-6)}`;
  };

  if (!mounted || !user) {
    return (
      <main className="bg-[#020617] min-h-screen text-white font-sans flex items-center justify-center">
        <p className="text-xl font-black uppercase tracking-widest animate-pulse">Загрузка профиля...</p>
      </main>
    );
  }

  // Определяем тариф (если у нового юзера его нет, ставим дефолтный "БАЗОВЫЙ")
  const userTariff = user.tariff || "БАЗОВЫЙ";
  const userCity = user.city || "Алматы";
  const userPhone = user.phone || "+7 (700) 000-00-00";

  return (
    <main className="bg-[#020617] min-h-screen text-white font-sans selection:bg-orange-500 selection:text-black pt-32">
      <Header />
      
      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 md:px-12 space-y-12">
        
        {/* Карточка пользователя */}
        <div className="flex flex-col gap-6 rounded-[2.5rem] border border-white/5 bg-[#0f172a] p-8 md:flex-row md:items-center md:justify-between shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-500 text-2xl font-black text-black italic">
              {user.nickname.charAt(0).toUpperCase()}
            </div>
            <div className="space-y-1.5 text-left">
              <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">
                {user.nickname}
              </h2>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                {user.email}
              </p>
              
              {/* Поле телефона с кнопкой маскирования */}
              <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-wide">
                <span>📞</span>
                <span>{showFullPhone ? userPhone : getMaskedPhone(userPhone)}</span>
                <button 
                  onClick={() => setShowFullPhone(!showFullPhone)}
                  className="text-orange-500 hover:underline uppercase text-[9px] tracking-widest ml-1 cursor-pointer font-black italic"
                >
                  {showFullPhone ? "[скрыть]" : "[показать]"}
                </button>
              </div>

              <div className="flex gap-2 pt-2">
                <span className="rounded bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-[9px] font-black text-orange-500 uppercase tracking-widest italic">
                  {userTariff}
                </span>
                <span className="rounded bg-white/5 border border-white/10 px-3 py-1 text-[9px] font-black text-slate-400 uppercase tracking-widest italic">
                  {userCity}
                </span>
              </div>
            </div>
          </div>
          <Link href="/tariffs" className="px-8 py-4 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all italic text-center">
            Улучшить тариф
          </Link>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-[2rem] border border-white/5 bg-[#0f172a] p-6 space-y-2 text-left shadow-2xl">
            <div className="text-xl">🔨</div>
            <p className="text-3xl font-black text-white tracking-tighter">5</p>
            <p className="text-[9px] font-black uppercase tracking-wider text-slate-500">Активных ставок</p>
          </div>
          <div className="rounded-[2rem] border border-white/5 bg-[#0f172a] p-6 space-y-2 text-left shadow-2xl">
            <div className="text-xl">📈</div>
            <p className="text-3xl font-black text-white tracking-tighter">1</p>
            <p className="text-[9px] font-black uppercase tracking-wider text-slate-500">Лидирую в торгах</p>
          </div>
          <div className="rounded-[2rem] border border-white/5 bg-[#0f172a] p-6 space-y-2 text-left shadow-2xl">
            <div className="text-xl">🏆</div>
            <p className="text-3xl font-black text-white tracking-tighter">0</p>
            <p className="text-[9px] font-black uppercase tracking-wider text-slate-500">Выигранных авто</p>
          </div>
          <div className="rounded-[2rem] border border-white/5 bg-[#0f172a] p-6 space-y-2 text-left shadow-2xl">
            <div className="text-xl">⭐</div>
            <p className="text-3xl font-black text-white tracking-tighter">6</p>
            <p className="text-[9px] font-black uppercase tracking-wider text-slate-500">Всего ставок</p>
          </div>
        </div>

        {/* Секция ставок и побед */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Левая колонка - Ставки */}
          <div className="lg:col-span-7 rounded-[2.5rem] border border-white/5 bg-[#0f172a] p-8 space-y-6 shadow-2xl">
            <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2 italic">
              <span>🔨</span> Активные ставки
            </h3>
            
            <div className="space-y-4">
              {MY_BIDS.map((bid) => (
                <div key={bid.id} className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 p-4 transition-colors hover:border-white/10">
                  <div className="flex items-center gap-4">
                    <img
                      src={bid.image}
                      alt={bid.title}
                      className="h-12 w-20 rounded-xl object-cover bg-slate-800"
                    />
                    <div className="text-left">
                      <h4 className="text-sm font-black text-white leading-tight italic">{bid.title}</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1.5">
                        Моя ставка: <span className="text-white font-black">{bid.myBid} ₸</span>
                      </p>
                    </div>
                  </div>

                  {bid.status === "leading" ? (
                    <span className="rounded-xl bg-green-500/10 border border-green-500/20 px-4 py-2 text-[9px] font-black uppercase text-green-400 tracking-wider italic">
                      ✓ Лидирую
                    </span>
                  ) : (
                    <span className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-2 text-[9px] font-black uppercase text-red-400 tracking-wider italic">
                      ✕ Перебита
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка - Победы */}
          <div className="lg:col-span-5 rounded-[2.5rem] border border-white/5 bg-[#0f172a] p-8 flex flex-col justify-between min-h-[350px] shadow-2xl">
            <div>
              <h3 className="text-xl font-black uppercase italic text-white tracking-tighter text-left mb-6">
                Выигранные авто
              </h3>
              <div className="py-12 text-center space-y-3 opacity-35 italic">
                <p className="text-4xl">🏎️</p>
                <p className="text-xs font-black uppercase tracking-widest mt-2">Побед пока нет</p>
              </div>
            </div>

            <Link href="/catalog" className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-orange-500 hover:text-black transition-all uppercase text-[10px] tracking-[0.3em] shadow-xl active:scale-95 block text-center italic">
              ОТКРЫТЬ КАТАЛОГ
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}