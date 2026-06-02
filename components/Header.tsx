"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  // Состояния для демонстрации интерактивности без бэкенда
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-bg/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12">
        
        {/* Логотип */}
        <Link href="/" className="text-2xl font-black tracking-wider">
          <span className="text-white">QAZ</span>
          <span className="text-brand-orange">DRIVE</span>
        </Link>

        {/* Навигация */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/catalog" className="text-sm font-semibold text-brand-textSecondary hover:text-brand-orange transition-colors">
            КАТАЛОГ
          </Link>
          <span className="text-sm font-semibold text-brand-textSecondary cursor-not-allowed opacity-50">
            АУКЦИОНЫ
          </span>
          <span className="text-sm font-semibold text-brand-textSecondary cursor-not-allowed opacity-50">
            О НАС
          </span>
          <Link href="/tariffs" className="text-sm font-semibold text-brand-textSecondary hover:text-brand-orange transition-colors">
            ТАРИФЫ
          </Link>
        </nav>

        {/* Правая часть (Авторизация / Профиль) */}
        <div className="flex items-center gap-6">
          {!isLoggedIn ? (
            /* Гостевой режим */
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setIsLoggedIn(true)} 
                className="text-sm font-bold text-white hover:text-brand-orange transition-colors"
              >
                ВХОД
              </button>
              <Link 
                href="/register" 
                className="rounded-lg bg-brand-orange px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-orangeHover transition-colors"
              >
                РЕГИСТРАЦИЯ
              </Link>
            </div>
          ) : (
            /* Режим авторизованного пользователя */
            <div className="flex items-center gap-4 relative">
              
              {/* Колокольчик уведомлений */}
              <button 
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
                className="relative rounded-full p-2 hover:bg-brand-card transition-colors"
              >
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-orange text-[10px] font-bold text-white">
                  2
                </span>
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              {/* Выпадающее окно уведомлений */}
              {showNotifications && (
                <div className="absolute right-12 top-14 w-80 rounded-xl border border-brand-border bg-brand-card p-4 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-brand-border pb-2 mb-3">
                    <span className="font-bold text-sm">Уведомления</span>
                    <button className="text-xs text-brand-orange hover:underline">Прочитать все</button>
                  </div>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    <div className="text-xs border-b border-brand-border/50 pb-2">
                      <p className="font-semibold text-red-400">Вашу ставку перебили</p>
                      <p className="text-brand-textSecondary mt-0.5">В лоте LOT-011 — Aston Martin DB11 ваша ставка перебита.</p>
                      <span className="text-[10px] text-brand-textSecondary/75 block mt-1">02.06.2026, 15:20</span>
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-brand-orange">Новый лот на аукционе</p>
                      <p className="text-brand-textSecondary mt-0.5">Добавлен новый лот: BMW X6 M Competition 2024.</p>
                      <span className="text-[10px] text-brand-textSecondary/75 block mt-1">02.06.2026, 05:20</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Меню профиля */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowProfileMenu(!showProfileMenu);
                    setShowNotifications(false);
                  }}
                  className="flex items-center gap-2 rounded-lg border border-brand-border bg-brand-card p-1.5 pr-3 hover:border-brand-orange transition-colors"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
                    А
                  </div>
                  <span className="text-sm font-semibold text-white">Алибек</span>
                  <svg className={`h-4 w-4 text-brand-textSecondary transition-transform ${showProfileMenu ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Выпадающее меню профиля */}
                {showProfileMenu && (
                  <div className="absolute right-0 top-12 w-64 rounded-xl border border-brand-border bg-brand-card p-4 shadow-2xl">
                    <div className="border-b border-brand-border pb-3 mb-3">
                      <p className="font-bold text-sm text-white">Алибек Джаксыбеков</p>
                      <p className="text-xs text-brand-textSecondary mt-0.5">user@drive.kz</p>
                      <span className="inline-block mt-2 rounded bg-brand-orange/20 px-2 py-0.5 text-[10px] font-bold text-brand-orange">
                        DRIVE
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      <li>
                        <Link href="/profile" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-brand-textSecondary hover:bg-brand-bg hover:text-white transition-colors">
                          Мой профиль
                        </Link>
                      </li>
                      <li>
                        <Link href="/tariffs" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-brand-textSecondary hover:bg-brand-bg hover:text-white transition-colors">
                          Тарифы
                        </Link>
                      </li>
                      <li className="border-t border-brand-border/50 pt-1.5 mt-1.5">
                        <button 
                          onClick={() => {
                            setIsLoggedIn(false);
                            setShowProfileMenu(false);
                          }}
                          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                        >
                          Выйти
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

            </div>
          )}
        </div>

      </div>
    </header>
  );
}