"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Вход:", { email, password });
  };

  return (
    <main className="bg-[#020617] min-h-screen text-white font-sans selection:bg-orange-500 selection:text-black">
      <Header />
      
      <div className="flex min-h-[85vh] items-center justify-center px-6 pt-40 pb-24">
        <div className="w-full max-w-md space-y-8">
          
          {/* Заголовок */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter leading-none">
              ВХОД В <span className="text-orange-500">АККАУНТ</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] italic">
              Войдите, чтобы участвовать в аукционах
            </p>
          </div>

          {/* Карточка */}
          <div className="rounded-[2.5rem] border border-white/5 bg-[#0f172a] p-8 shadow-2xl space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Поле Email */}
              <div className="space-y-2 text-left">
                <label className="text-[9px] text-orange-500 font-black uppercase tracking-widest italic">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-white/5 bg-[#070b14] px-5 py-4 text-xs text-white placeholder-slate-600 outline-none focus:border-orange-500 transition-colors font-bold italic"
                  required
                />
              </div>

              {/* Поле Пароль */}
              <div className="space-y-2 text-left">
                <label className="text-[9px] text-orange-500 font-black uppercase tracking-widest italic">
                  Пароль
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-white/5 bg-[#070b14] pl-5 pr-12 py-4 text-xs text-white placeholder-slate-600 outline-none focus:border-orange-500 transition-colors font-bold"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                  >
                    {showPassword ? "👁️" : "🙈"}
                  </button>
                </div>
              </div>

              {/* Кнопка войти */}
              <button
                type="submit"
                className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-orange-500 transition-all uppercase text-[10px] tracking-[0.3em] shadow-xl active:scale-95 italic"
              >
                Войти
              </button>
            </form>

            {/* Демо-доступ */}
            <div className="rounded-2xl border border-white/5 bg-[#070b14] p-5 space-y-2 text-left">
              <p className="text-[9px] text-orange-500 font-black uppercase tracking-widest italic">
                Демо-доступ:
              </p>
              <div className="text-[11px] text-slate-400 space-y-1 font-bold">
                <p><span className="text-white">Администратор:</span> admin@drive.kz / admin123</p>
                <p><span className="text-white">Пользователь:</span> user@drive.kz / user123</p>
              </div>
            </div>

            {/* Ссылка на регистрацию */}
            <div className="text-center pt-2">
              <span className="text-xs text-slate-500 font-semibold">Нет аккаунта? </span>
              <Link href="/register" className="text-xs text-orange-500 font-black uppercase tracking-widest hover:underline italic">
                Зарегистрироваться
              </Link>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}