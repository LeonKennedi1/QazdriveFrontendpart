"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CITIES = [
  "Алматы", "Астана", "Шымкент", "Актобе", "Тараз", 
  "Павлодар", "Усть-Каменогорск", "Семей", "Атырау", 
  "Актау", "Кызылорда", "Жезказган"
];

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Алматы");
  const [isCityOpen, setIsCityOpen] = useState(false);

  // Состояния полей ввода
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Регистрация отправлена:", { fullName, email, phone, selectedCity, password, agree });
  };

  return (
    <main className="bg-[#020617] min-h-screen text-white font-sans selection:bg-orange-500 selection:text-black">
      <Header />

      <div className="flex min-h-[95vh] items-center justify-center px-6 pt-40 pb-24">
        <div className="w-full max-w-md space-y-8">
          
          {/* Заголовок */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter leading-none">
              РЕГИСТРАЦИЯ
            </h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] italic">
              Создайте аккаунт и начните участвовать в торгах
            </p>
          </div>

          {/* Карточка */}
          <div className="rounded-[2.5rem] border border-white/5 bg-[#0f172a] p-8 shadow-2xl relative space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Полное имя */}
              <div className="space-y-1.5 text-left">
                <label className="text-[9px] text-orange-500 font-black uppercase tracking-widest italic">
                  Полное имя
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Иван Иванов"
                  className="w-full rounded-2xl border border-white/5 bg-[#070b14] px-5 py-4 text-xs text-white placeholder-slate-600 outline-none focus:border-orange-500 transition-colors font-bold italic"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5 text-left">
                <label className="text-[9px] text-orange-500 font-black uppercase tracking-widest italic">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-white/5 bg-[#070b14] px-5 py-4 text-xs text-white placeholder-slate-600 outline-none focus:border-orange-500 transition-colors font-bold italic"
                />
              </div>

              {/* Телефон */}
              <div className="space-y-1.5 text-left">
                <label className="text-[9px] text-orange-500 font-black uppercase tracking-widest italic">
                  Телефон
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 700 000 0000"
                  className="w-full rounded-2xl border border-white/5 bg-[#070b14] px-5 py-4 text-xs text-white placeholder-slate-600 outline-none focus:border-orange-500 transition-colors font-bold italic"
                />
              </div>

              {/* Кастомный Город */}
              <div className="space-y-1.5 text-left relative">
                <label className="text-[9px] text-orange-500 font-black uppercase tracking-widest italic">
                  Город
                </label>
                <button
                  type="button"
                  onClick={() => setIsCityOpen(!isCityOpen)}
                  className="flex w-full items-center justify-between rounded-2xl border border-white/5 bg-[#070b14] px-5 py-4 text-xs text-white outline-none focus:border-orange-500 font-bold"
                >
                  <span>{selectedCity}</span>
                  <span className="text-[10px] text-slate-500">▼</span>
                </button>

                {isCityOpen && (
                  <div className="absolute left-0 z-50 mt-2 max-h-52 w-full overflow-y-auto rounded-2xl border border-white/10 bg-[#0f172a] shadow-2xl scrollbar-thin">
                    {CITIES.map((cityOption) => (
                      <button
                        key={cityOption}
                        type="button"
                        onClick={() => {
                          setSelectedCity(cityOption);
                          setIsCityOpen(false);
                        }}
                        className={`block w-full px-5 py-3 text-left text-xs text-white hover:bg-orange-500/10 hover:text-orange-500 transition-colors ${
                          selectedCity === cityOption ? "bg-orange-500/20 text-orange-500 font-black" : "font-bold"
                        }`}
                      >
                        {cityOption}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Пароль */}
              <div className="space-y-1.5 text-left">
                <label className="text-[9px] text-orange-500 font-black uppercase tracking-widest italic">
                  Пароль
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Минимум 6 символов"
                    className="w-full rounded-2xl border border-white/5 bg-[#070b14] pl-5 pr-12 py-4 text-xs text-white placeholder-slate-600 outline-none focus:border-orange-500 transition-colors font-bold"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                  >
                    {showPassword ? "👁️" : "🙈"}
                  </button>
                </div>
              </div>

              {/* Согласие */}
              <label className="flex items-start gap-3 pt-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-white/10 bg-[#070b14] text-orange-500 focus:ring-0 focus:ring-offset-0"
                  required
                />
                <span className="text-[10px] leading-relaxed text-slate-400 font-bold uppercase tracking-wider">
                  Я принимаю <span className="text-orange-500 hover:underline">Условия</span> и <span className="text-orange-500 hover:underline">Конфиденциальность</span>
                </span>
              </label>

              {/* Кнопка регистрации */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-black font-black py-5 rounded-2xl hover:bg-white transition-all uppercase text-[10px] tracking-[0.3em] shadow-xl shadow-orange-500/10 active:scale-95 italic"
              >
                Создать аккаунт
              </button>
            </form>

            {/* Ссылка на логин */}
            <div className="text-center pt-2">
              <span className="text-xs text-slate-500 font-semibold">Уже есть аккаунт? </span>
              <Link href="/login" className="text-xs text-orange-500 font-black uppercase tracking-widest hover:underline italic">
                Войти
              </Link>
            </div>

          </div>

          {/* Плашки под карточкой */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/5 bg-[#0f172a] py-3.5 text-center text-[9px] font-black text-slate-500 uppercase tracking-widest italic">
              🔒 Безопасно
            </div>
            <div className="rounded-2xl border border-white/5 bg-[#0f172a] py-3.5 text-center text-[9px] font-black text-slate-500 uppercase tracking-widest italic">
              ⚡ Быстро
            </div>
            <div className="rounded-2xl border border-white/5 bg-[#0f172a] py-3.5 text-center text-[9px] font-black text-slate-500 uppercase tracking-widest italic">
              🏆 Выгодно
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}