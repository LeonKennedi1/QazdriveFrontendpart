"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#07080C] pt-16 pb-8 font-sans">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        
        {/* Сетка подвала */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8 pb-12 border-b border-white/5">
          
          {/* Колонка 1: Логотип, Описание и Соцсети */}
          <div className="space-y-6 text-left">
            <Link href="/" className="text-2xl font-black tracking-wider block active:scale-95 transition-transform">
              <span className="text-white">QAZ</span>
              <span className="text-orange-500">DRIVE</span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-500 font-semibold uppercase">
              Ведущая платформа онлайн-аукционов автомобилей в Казахстане. Безопасные торги, прозрачные сделки.
            </p>
            <div className="flex gap-2.5">
              {["TG", "IG", "VK"].map((soc) => (
                <span 
                  key={soc} 
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-slate-900 border border-white/5 text-xs font-black text-slate-500 hover:border-orange-500 hover:text-white transition-colors"
                >
                  {soc}
                </span>
              ))}
            </div>
          </div>

          {/*  Колонка 2: Навигация */}
          <div className="text-left">
            <h4 className="text-[10px] font-black tracking-widest text-white uppercase mb-6">Навигация</h4>
            <ul className="space-y-3.5 text-xs text-slate-500 font-bold uppercase tracking-wider">
              <li><Link href="/catalog" className="hover:text-white transition-colors">Каталог автомобилей</Link></li>
              <li><Link href="/#auctions" className="hover:text-white transition-colors">Активные аукционы</Link></li>
              <li><Link href="/tariffs" className="hover:text-white transition-colors">Тарифные планы</Link></li>
              <li><Link href="/register" className="hover:text-white transition-colors">Регистрация</Link></li>
              <li><Link href="/profile" className="hover:text-white transition-colors">Личный кабинет</Link></li>
            </ul>
          </div>

          {/* Колонка 3: Информация */}
          <div className="text-left">
            <h4 className="text-[10px] font-black tracking-widest text-white uppercase mb-6">Информация</h4>
            <ul className="space-y-3.5 text-xs text-slate-500 font-bold uppercase tracking-wider">
              <li><Link href="/about" className="hover:text-white transition-colors">О компании</Link></li>
              <li><span className="opacity-40 cursor-not-allowed">Правила торгов</span></li>
              <li><span className="opacity-40 cursor-not-allowed">Политика конфиденциальности</span></li>
              <li><span className="opacity-40 cursor-not-allowed">Пользовательское соглашение</span></li>
              <li><Link href="/help" className="hover:text-white transition-colors">Помощь и поддержка</Link></li>
            </ul>
          </div>

          {/* Колонка 4: Контакты и Режим работы */}
          <div className="space-y-6 text-left">
            <h5 className="text-orange-500 font-black text-[10px] mb-8 uppercase tracking-[0.4em] italic">
              КОНТАКТЫ
            </h5>
            <div className="space-y-3.5 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
              <p className="flex items-center gap-2">
                <span className="text-orange-500">📞</span> +7 (727) 123-45-67
              </p>
              <p className="flex items-center gap-2">
                <span className="text-orange-500">✉️</span> info@qazdrive.kz
              </p>
              <p className="flex items-center gap-2">
                <span className="text-orange-500">📍</span> Алматы, пр. Аль-Фараби, 17
              </p>
            </div>
            
            {/* Оранжевый блок режима работы */}
            <div className="rounded-2xl border border-orange-500/10 bg-black/40 p-5 space-y-2 text-left">
              <p className="font-black text-orange-500 uppercase tracking-wider text-[9px]">Режим работы</p>
              <p className="font-bold text-xs text-slate-500">Пн-Вс: 08:00 – 22:00</p>
              <p className="font-bold text-xs text-slate-500">Торги: 24/7 онлайн</p>
            </div>
          </div>

        </div>

        {/* Нижний бар копирайта */}
        <div className="flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between text-xs text-slate-600 font-bold uppercase tracking-wider">
          <p>© 2024 QAZDRIVE. Все права защищены. ТОО «QAZ Digital»</p>
          <p className="text-[10px]">Лицензия: МТИ РК №2024-0048</p>
          <div className="flex items-center gap-1.5 justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Все системы работают</span>
          </div>
        </div>

      </div>
    </footer>
  );
}