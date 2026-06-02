"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Попытка входа:", { email, password });
  };

  return (
    <div className="flex min-h-[85vh] items-center justify-center bg-brand-bg px-6 py-12">
      <div className="w-full max-w-md">
        
        {/* Логотип и заголовок */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-black tracking-wider block mb-4">
            <span className="text-white">QAZ</span>
            <span className="text-brand-orange">DRIVE</span>
          </Link>
          <h1 className="text-xl font-black text-white uppercase tracking-wide">ВХОД В АККАУНТ</h1>
          <p className="text-xs text-brand-textSecondary mt-2">Войдите, чтобы участвовать в аукционах</p>
        </div>

        {/* Форма */}
        <div className="rounded-2xl border border-brand-border bg-brand-card p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Поле Email */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-textSecondary">
                EMAIL
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-sm text-white placeholder-brand-textSecondary/50 outline-none focus:border-brand-orange transition-colors"
              />
            </div>

            {/* Поле Пароль */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-textSecondary">
                ПАРОЛЬ
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-brand-border bg-brand-bg pl-4 pr-10 py-3 text-sm text-white placeholder-brand-textSecondary/50 outline-none focus:border-brand-orange transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-textSecondary text-xs hover:text-white"
                >
                  {showPassword ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            {/* Кнопка войти */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange py-3.5 text-xs font-black text-white hover:bg-brand-orangeHover transition-colors shadow-lg shadow-brand-orange/20"
            >
              <span>➜</span> ВОЙТИ
            </button>
          </form>

          {/* Плашка демо-доступа */}
          <div className="mt-6 rounded-xl border border-brand-border bg-brand-bg/60 p-4 space-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-orange">
              ДЕМО-ДОСТУП:
            </p>
            <div className="text-xs text-brand-textSecondary space-y-1">
              <p>
                <span className="font-semibold text-white">Администратор:</span> admin@drive.kz / admin123
              </p>
              <p>
                <span className="font-semibold text-white">Пользователь:</span> user@drive.kz / user123
              </p>
            </div>
          </div>

          {/* Ссылка на регистрацию */}
          <p className="text-center text-xs text-brand-textSecondary mt-6">
            Нет аккаунта?{" "}
            <Link href="/register" className="font-bold text-brand-orange hover:underline">
              Зарегистрироваться
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}