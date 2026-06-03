'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api'; // Наш API клиент
import Link from 'next/link';

export default function Header() {
  const [user, setUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false); // Флаг монтирования на клиенте
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Настройка точных путей к папкам вашего проекта
  const navLinks = [
    { name: "Каталог", href: "/catalog" },
    { name: "Аукционы", href: "/#auctions" },
    { name: "О нас", href: "/about" },       // Ведет на app/about/page.tsx
    { name: "Помощь", href: "/help" },       // Ведет на app/help/page.tsx
  ];

  useEffect(() => {
    setMounted(true); // Компонент успешно смонтирован в браузере
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/'; // Полная перезагрузка для сброса состояния
  };

  const nickname = user?.nickname || "User";
  const avatarUrl = user?.avatar_url;
  const avatarLetter = nickname.charAt(0).toUpperCase();
  const userTariff = user?.tariff || "БАЗОВЫЙ"; // Объявляем переменную тарифа для устранения ошибки TypeScript
  const userEmail = user?.email || "user@drive.kz"; // Делаем почту динамической

  // Проверка: является ли пользователь демо-аккаунтом Алибека или Админа
  const isDemoUser = user?.email === "user@drive.kz" || user?.email === "admin@drive.kz";

  return (
    <div className="fixed top-6 left-0 w-full z-50 px-4 font-sans">
      <nav className="max-w-7xl mx-auto bg-black/60 backdrop-blur-xl border border-white/10 p-3 rounded-2xl flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Логотип */}
        <div className="pl-6">
          <Link href="/" className="group flex items-center active:scale-95 transition-transform">
            <span className="text-2xl font-black italic tracking-tighter text-white">
              QAZ<span className="text-orange-500 underline decoration-2 underline-offset-4 decoration-orange-500/20 uppercase">DRIVE</span>
            </span>
          </Link>
        </div>

        {/* Навигационные ссылки */}
        <div className="hidden lg:flex gap-12 items-center text-left">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-all italic duration-300 active:scale-90">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Профиль / Вход */}
        <div className="flex gap-4 pr-2 relative">
          {/* Рендерим блок авторизации только после монтирования на клиенте для предотвращения Hydration Error */}
          {mounted && user ? (
            <div className="flex items-center gap-6 pl-6 border-l border-white/5">
              
              {/* Колокольчик уведомлений */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    setShowProfileMenu(false);
                  }}
                  className="relative rounded-xl p-2.5 bg-white/5 border border-white/10 hover:border-orange-500 transition-colors text-white cursor-pointer"
                >
                  {/* Оранжевый бейдж с цифрой 2 показывается ТОЛЬКО для демо-пользователей */}
                  {isDemoUser && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-black text-black">
                      2
                    </span>
                  )}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>

                {/* Выпадающее меню уведомлений */}
                {showNotifications && (
                  <div className="absolute right-0 top-14 w-80 rounded-2xl border border-white/5 bg-[#0f172a] p-5 shadow-2xl z-50 text-left">
                    <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3">
                      <span className="font-black text-[10px] uppercase tracking-wider text-white">Уведомления</span>
                      {isDemoUser && (
                        <button className="text-[9px] font-black text-orange-500 hover:underline uppercase tracking-wider">Прочитать все</button>
                      )}
                    </div>
                    <div className="space-y-3 max-h-60 overflow-y-auto no-scrollbar">
                      {isDemoUser ? (
                        <>
                          <div className="text-xs border-b border-white/5 pb-3">
                            <p className="font-bold text-red-400">Вашу ставку перебили</p>
                            <p className="text-slate-400 text-[10px] leading-relaxed mt-1 font-medium">В лоте LOT-011 — Aston Martin DB11 ваша ставка перебита.</p>
                            <span className="text-[8px] font-bold text-slate-500 block mt-1.5">02.06.2026, 15:20</span>
                          </div>
                          <div className="text-xs">
                            <p className="font-bold text-orange-500">Новый лот на аукционе</p>
                            <p className="text-slate-400 text-[10px] leading-relaxed mt-1 font-medium">Добавлен новый лот: BMW X6 M Competition 2024.</p>
                            <span className="text-[8px] font-bold text-slate-500 block mt-1.5">02.06.2026, 05:20</span>
                          </div>
                        </>
                      ) : (
                        /* Пустая заглушка для нового зарегистрированного пользователя */
                        <div className="py-8 text-center text-xs text-slate-500 italic font-bold">
                          Уведомлений пока нет
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Профиль пользователя */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowProfileMenu(!showProfileMenu);
                    setShowNotifications(false);
                  }}
                  className="flex items-center gap-4 group active:scale-95 transition-all min-w-[170px] cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-orange-500/20 shadow-[0_0_25px_rgba(249,115,22,0.15)] bg-slate-900 group-hover:bg-white overflow-hidden transition-all duration-300">
                    {avatarUrl ? (
                      <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-orange-500 flex items-center justify-center text-black font-black text-xl uppercase italic">
                        {avatarLetter}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col text-left justify-center">
                    <span className="text-[12px] font-black text-white uppercase italic tracking-widest group-hover:text-orange-500 transition-colors leading-none">
                      {nickname}
                    </span>
                    <span className="text-[10px] text-green-500 font-black tracking-[0.2em] leading-none mt-1.5 shadow-sm">
                      0 ₸
                    </span>
                  </div>
                </button>

                {/* Выпадающее меню профиля */}
                {showProfileMenu && (
                  <div className="absolute right-0 top-16 w-64 rounded-2xl border border-white/5 bg-[#0f172a] p-5 shadow-2xl z-50 text-left">
                    <div className="border-b border-white/5 pb-3 mb-3">
                      <p className="font-black text-xs text-white uppercase italic">{nickname}</p>
                      <p className="text-[10px] text-slate-500 mt-1">{userEmail}</p>
                      <span className="inline-block mt-2 rounded bg-orange-500/15 px-2.5 py-1 text-[8px] font-black text-orange-500 tracking-widest">
                        {userTariff}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      <li>
                        <Link 
                          href="/profile" 
                          onClick={() => setShowProfileMenu(false)} 
                          className="flex items-center gap-2 rounded-lg px-2 py-2 text-xs font-bold text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
                        >
                          Мой профиль
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/tariffs" 
                          onClick={() => setShowProfileMenu(false)} 
                          className="flex items-center gap-2 rounded-lg px-2 py-2 text-xs font-bold text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
                        >
                          Тарифы
                        </Link>
                      </li>
                      <li className="border-t border-white/5 pt-1.5 mt-1.5">
                        <button 
                          onClick={() => {
                            handleLogout();
                            setShowProfileMenu(false);
                          }}
                          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-xs font-bold text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
                        >
                          Выйти
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

            </div>
          ) : (
            <div className="flex gap-4">
              <Link href="/login" className="text-[10px] font-black uppercase tracking-widest text-white px-8 py-3 rounded-xl border border-white/10 hover:bg-white hover:text-black transition-all italic active:scale-95">
                Вход
              </Link>
              <Link href="/register" className="bg-orange-500 text-black text-[10px] font-black px-10 py-3 rounded-xl uppercase tracking-widest hover:bg-white transition-all italic shadow-lg shadow-orange-500/20 active:scale-95">
                Регистрация
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}