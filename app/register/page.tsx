"use client";

import { useState } from "react";
import Link from "next/link";

const CITIES = [
  "Алматы",
  "Астана",
  "Шымкент",
  "Актобе",
  "Тараз",
  "Павлодар",
  "Усть-Каменогорск",
  "Семей",
  "Атырау",
  "Актау",
  "Кызылорда",
  "Жезказган",
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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Регистрация отправлена:", {
      fullName,
      email,
      phone,
      selectedCity,
      password,
      confirmPassword,
      agree,
    });
  };

  return (
    <div className="flex min-h-[95vh] flex-col items-center justify-center bg-brand-bg px-6 py-12">
      <div className="w-full max-w-md">
        
        {/* Логотип и заголовок */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-black tracking-wider block mb-4">
            <span className="text-white">QAZ</span>
            <span className="text-brand-orange">DRIVE</span>
          </Link>
          <h1 className="text-xl font-black text-white uppercase tracking-wide">РЕГИСТРАЦИЯ</h1>
          <p className="text-xs text-brand-textSecondary mt-2">Создайте аккаунт и начните участвовать в торгах</p>
        </div>

        {/* Карточка формы */}
        <div className="rounded-2xl border border-brand-border bg-brand-card p-8 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Поле Полное Имя */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-textSecondary">
                ПОЛНОЕ ИМЯ
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Иван Иванов"
                className="w-full rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-sm text-white placeholder-brand-textSecondary/50 outline-none focus:border-brand-orange transition-colors"
              />
            </div>

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

            {/* Поле Телефон */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-textSecondary">
                ТЕЛЕФОН
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 700 000 0000"
                className="w-full rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-sm text-white placeholder-brand-textSecondary/50 outline-none focus:border-brand-orange transition-colors"
              />
            </div>

            {/* Поле Город (Кастомный выпадающий список) */}
            <div className="space-y-1.5 relative">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-textSecondary">
                ГОРОД
              </label>
              <button
                type="button"
                onClick={() => setIsCityOpen(!isCityOpen)}
                className="flex w-full items-center justify-between rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-sm text-white outline-none focus:border-brand-orange"
              >
                <span>{selectedCity}</span>
                <span className="text-[10px] text-brand-textSecondary">▼</span>
              </button>

              {/* Кастомное выпадающее меню со списком городов (как на скриншоте 7) */}
              {isCityOpen && (
                <div className="absolute left-0 z-50 mt-1 max-h-56 w-full overflow-y-auto rounded-xl border border-brand-border bg-brand-card shadow-2xl scrollbar-thin">
                  {CITIES.map((cityOption) => (
                    <button
                      key={cityOption}
                      type="button"
                      onClick={() => {
                        setSelectedCity(cityOption);
                        setIsCityOpen(false);
                      }}
                      className={`block w-full px-4 py-2.5 text-left text-sm text-white hover:bg-brand-orange/10 hover:text-brand-orange transition-colors ${
                        selectedCity === cityOption ? "bg-brand-orange/20 text-brand-orange font-bold" : ""
                      }`}
                    >
                      {cityOption}
                    </button>
                  ))}
                </div>
              )}
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
                  placeholder="Минимум 6 символов"
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

            {/* Подтверждение пароля */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-textSecondary">
                ПОДТВЕРДИТЕ ПАРОЛЬ
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Повторите пароль"
                className="w-full rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-sm text-white placeholder-brand-textSecondary/50 outline-none focus:border-brand-orange transition-colors"
              />
            </div>

            {/* Согласие с правилами */}
            <label className="flex items-start gap-2.5 cursor-pointer pt-2 select-none">
              <input
                type="checkbox"
                required
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-brand-border bg-brand-bg text-brand-orange focus:ring-0 focus:ring-offset-0"
              />
              <span className="text-[11px] leading-relaxed text-brand-textSecondary">
                Я принимаю{" "}
                <span className="text-brand-orange hover:underline">Условия использования</span> и{" "}
                <span className="text-brand-orange hover:underline">Политику конфиденциальности</span>
              </span>
            </label>

            {/* Кнопка создания */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange py-3.5 text-xs font-black text-white hover:bg-brand-orangeHover transition-colors shadow-lg shadow-brand-orange/20"
            >
              <span>👤+</span> СОЗДАТЬ АККАУНТ
            </button>
          </form>

          {/* Ссылка на вход */}
          <p className="text-center text-xs text-brand-textSecondary mt-6">
            Уже есть аккаунт?{" "}
            <Link href="/login" className="font-bold text-brand-orange hover:underline">
              Войти
            </Link>
          </p>

        </div>

        {/* Нижние плашки (как на скриншоте 6 внизу) */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-brand-border bg-brand-card/30 py-2.5 text-center text-[10px] font-bold text-brand-textSecondary uppercase tracking-wider">
            🔒 Безопасно
          </div>
          <div className="rounded-lg border border-brand-border bg-brand-card/30 py-2.5 text-center text-[10px] font-bold text-brand-textSecondary uppercase tracking-wider">
            ⚡ Быстро
          </div>
          <div className="rounded-lg border border-brand-border bg-brand-card/30 py-2.5 text-center text-[10px] font-bold text-brand-textSecondary uppercase tracking-wider">
            🏆 Выгодно
          </div>
        </div>

      </div>
    </div>
  );
}