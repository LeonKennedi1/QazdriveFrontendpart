import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-brand-border bg-[#07080C] pt-16 pb-8">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        
        {/* Сетка футера */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8 pb-12 border-b border-brand-border/50">
          
          {/* Колонка 1: Описание и Соцсети */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-black tracking-wider">
              <span className="text-white">QAZ</span>
              <span className="text-brand-orange">DRIVE</span>
            </Link>
            <p className="text-sm leading-relaxed text-brand-textSecondary">
              Ведущая платформа онлайн-аукционов автомобилей в Казахстане. Безопасные торги, прозрачные сделки.
            </p>
            <div className="flex gap-3">
              {["TG", "IG", "VK"].map((soc) => (
                <span key={soc} className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-brand-card border border-brand-border text-xs font-bold text-brand-textSecondary hover:border-brand-orange hover:text-white transition-colors">
                  {soc}
                </span>
              ))}
            </div>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4">Навигация</h4>
            <ul className="space-y-3 text-sm text-brand-textSecondary">
              <li><Link href="/catalog" className="hover:text-white transition-colors">Каталог автомобилей</Link></li>
              <li><span className="opacity-50 cursor-not-allowed">Активные аукционы</span></li>
              <li><Link href="/tariffs" className="hover:text-white transition-colors">Тарифные планы</Link></li>
              <li><Link href="/register" className="hover:text-white transition-colors">Регистрация</Link></li>
            </ul>
          </div>

          {/* Колонка 3: Информация */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4">Информация</h4>
            <ul className="space-y-3 text-sm text-brand-textSecondary">
              <li><span className="opacity-50 cursor-not-allowed">О компании</span></li>
              <li><span className="opacity-50 cursor-not-allowed">Правила торгов</span></li>
              <li><span className="opacity-50 cursor-not-allowed">Политика конфиденциальности</span></li>
              <li><span className="opacity-50 cursor-not-allowed">Пользовательское соглашение</span></li>
            </ul>
          </div>

          {/* Колонка 4: Контакты */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-brand-textSecondary">
              <p className="flex items-center gap-2">
                <span className="text-brand-orange">📞</span> +7 (727) 123-45-67
              </p>
              <p className="flex items-center gap-2">
                <span className="text-brand-orange">✉️</span> info@qazdrive.kz
              </p>
              <p className="flex items-center gap-2">
                <span className="text-brand-orange">📍</span> Алматы, пр. Аль-Фараби, 17
              </p>
            </div>
            
            {/* График работы */}
            <div className="rounded-lg bg-brand-card border border-brand-border p-3 text-xs text-brand-textSecondary space-y-1">
              <p className="font-semibold text-white">Режим работы</p>
              <p>Пн-Вс: 08:00 – 22:00</p>
              <p>Торги: 24/7 онлайн</p>
            </div>
          </div>

        </div>

        {/* Нижний бар */}
        <div className="flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between text-xs text-brand-textSecondary">
          <p>© 2024 QAZDRIVE. Все права защищены. ТОО «QAZ Digital»</p>
          <p>Лицензия: МТИ РК №2024-0048</p>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span>Все системы работают</span>
          </div>
        </div>

      </div>
    </footer>
  );
}