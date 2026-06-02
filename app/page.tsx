import Link from "next/link";
import CarCard from "@/components/CarCard";

// Демонстрационные лоты для отображения
const featuredCars = [
  {
    title: "BMW M5 Competition 2022",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600",
    price: 52500000,
    timeLeft: "01:56:01",
    bids: 3,
    city: "Алматы",
    views: "2 847",
    isTop: true,
  },
  {
    title: "Mercedes-AMG GT 63 S 2021",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600",
    price: 63000000,
    timeLeft: "05:56:01",
    bids: 3,
    city: "Алматы",
    views: "3 521",
    isTop: true,
  },
  {
    title: "Ferrari 458 Italia 2019",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600",
    price: 95500000,
    timeLeft: "23:56:01",
    bids: 2,
    city: "Алматы",
    views: "5 890",
    isTop: true,
  },
  {
    title: "McLaren 720S Spider 2021",
    image: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?q=80&w=600",
    price: 109000000,
    timeLeft: "17:56:01",
    bids: 3,
    city: "Алматы",
    views: "8 965",
    isTop: true,
  },
];

const activeCars = [
  ...featuredCars,
  {
    title: "Lamborghini Huracán EVO 2020",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600",
    price: 131000000,
    timeLeft: "11:56:01",
    bids: 3,
    city: "Астана",
    views: "7 234",
  },
  {
    title: "Porsche 911 Turbo S 2022",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600",
    price: 86000000,
    timeLeft: "2 д. 23 ч.",
    bids: 2,
    city: "Алматы",
    views: "4 120",
  },
  {
    title: "Mercedes-Benz S580 2023",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=600",
    price: 40500000,
    timeLeft: "1 д. 23 ч.",
    bids: 2,
    city: "Алматы",
    views: "2 341",
  },
  {
    title: "Bentley Continental GT 2021",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600",
    price: 73500000,
    timeLeft: "3 д. 23 ч.",
    bids: 2,
    city: "Астана",
    views: "3 105",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      
      {/* 1. HERO РАЗДЕЛ */}
      <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-[#07080C] px-6">
        {/* Крупный водяной знак на фоне */}
        <div className="absolute inset-0 flex select-none items-center justify-center opacity-[0.02] pointer-events-none">
          <h1 className="text-[20vw] font-black tracking-widest text-white">AUCTION</h1>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
            КАЗАХСТАН • ОНЛАЙН АУКЦИОН
          </span>
          <h1 className="mt-4 text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
            DRIVE <span className="text-transparent" style={{ WebkitTextStroke: "1px #ffffff" }}>FUTURE</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-brand-textSecondary md:text-base">
            Участвуй в аукционах на лучшие автомобили по всему Казахстану. Надежные сделки и прозрачные торги.
          </p>

          {/* Строка быстрого поиска */}
          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl border border-brand-border bg-brand-card/85 p-2 backdrop-blur-sm sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-3 px-3">
              <span className="text-brand-textSecondary text-lg">🔍</span>
              <input
                type="text"
                placeholder="Марка, модель или VIN..."
                className="w-full bg-transparent text-sm text-white placeholder-brand-textSecondary outline-none"
              />
            </div>
            <div className="h-px bg-brand-border sm:h-8 sm:w-px" />
            <div className="flex items-center gap-1.5 px-3">
              <span className="text-xs font-bold text-white uppercase whitespace-nowrap">ВЕСЬ КАЗАХСТАН</span>
              <span className="text-[10px] text-brand-textSecondary">▼</span>
            </div>
            <button className="rounded-xl bg-white px-6 py-3.5 text-xs font-black text-black hover:bg-neutral-200 transition-colors">
              ЗАПУСТИТЬ ПОИСК
            </button>
          </div>

          {/* Статистика */}
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-6 text-center">
            <div>
              <span className="block text-2xl font-black text-white md:text-3xl">50K+</span>
              <span className="mt-1.5 block text-[10px] font-bold uppercase tracking-wider text-brand-textSecondary">Активных лотов</span>
            </div>
            <div className="border-x border-brand-border/60">
              <span className="block text-2xl font-black text-white md:text-3xl">15+</span>
              <span className="mt-1.5 block text-[10px] font-bold uppercase tracking-wider text-brand-textSecondary">Городов РК</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-white md:text-3xl">24/7</span>
              <span className="mt-1.5 block text-[10px] font-bold uppercase tracking-wider text-brand-textSecondary">Онлайн торги</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ИЗБРАННЫЕ АУКЦИОНЫ */}
      <section className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-brand-orange flex items-center gap-1.5">
              🔥 ГОРЯЧИЕ ЛОТЫ
            </span>
            <h2 className="mt-2 text-2xl font-black uppercase text-white md:text-3xl">
              ИЗБРАННЫЕ АУКЦИОНЫ
            </h2>
          </div>
          <Link href="/catalog" className="rounded-lg border border-brand-border bg-brand-card px-5 py-2.5 text-xs font-bold text-white hover:border-brand-orange hover:text-white transition-colors">
            Все лоты &gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCars.map((car, idx) => (
            <CarCard key={idx} {...car} />
          ))}
        </div>
      </section>

      {/* 3. АКТИВНЫЕ АУКЦИОНЫ */}
      <section className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-brand-orange flex items-center gap-1.5">
            📈 ТОРГИ ОНЛАЙН
          </span>
          <h2 className="mt-2 text-2xl font-black uppercase text-white md:text-3xl">
            АКТИВНЫЕ АУКЦИОНЫ
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activeCars.map((car, idx) => (
            <CarCard key={idx} {...car} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/catalog" className="inline-block rounded-xl border border-brand-border px-8 py-4 text-xs font-bold text-brand-orange hover:bg-brand-orange/5 hover:border-brand-orange transition-all">
            ПОКАЗАТЬ ВСЕ ЛОТЫ
          </Link>
        </div>
      </section>

      {/* 4. ПОЧЕМУ QAZDRIVE */}
      <section className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-black uppercase text-white md:text-3xl">ПОЧЕМУ QAZDRIVE?</h2>
          <p className="text-sm font-medium text-brand-textSecondary mt-2">Профессиональная площадка для авто аукционов в Казахстане</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Карта 1 */}
          <div className="rounded-2xl border border-brand-border bg-brand-card p-8 space-y-4">
            <div className="text-3xl">🛡️</div>
            <h4 className="text-lg font-bold text-white">БЕЗОПАСНЫЕ ТОРГИ</h4>
            <p className="text-sm leading-relaxed text-brand-textSecondary">
              Все лоты проверены. VIN-проверка, юридическая чистота, история обслуживания.
            </p>
          </div>
          {/* Карта 2 */}
          <div className="rounded-2xl border border-brand-border bg-brand-card p-8 space-y-4">
            <div className="text-3xl">⚡</div>
            <h4 className="text-lg font-bold text-white">МГНОВЕННЫЕ УВЕДОМЛЕНИЯ</h4>
            <p className="text-sm leading-relaxed text-brand-textSecondary">
              SMS и email оповещения о новых ставках, итогах торгов и эксклюзивных лотах.
            </p>
          </div>
          {/* Карта 3 */}
          <div className="rounded-2xl border border-brand-border bg-brand-card p-8 space-y-4">
            <div className="text-3xl">📈</div>
            <h4 className="text-lg font-bold text-white">ЛУЧШИЕ ЦЕНЫ</h4>
            <p className="text-sm leading-relaxed text-brand-textSecondary">
              Сотни лотов ежедневно. Находите автомобили мечты по рыночным ценам.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA СЕКЦИЯ */}
      <section className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="rounded-3xl border border-brand-orange/20 bg-gradient-to-b from-brand-card to-[#07080C] px-6 py-16 text-center md:py-20">
          <h2 className="text-3xl font-black text-white md:text-4xl">ГОТОВ УЧАСТВОВАТЬ?</h2>
          <p className="mx-auto mt-4 max-w-sm text-sm text-brand-textSecondary leading-relaxed">
            Зарегистрируйся и начни делать ставки прямо сейчас.
          </p>
          <div className="mt-8">
            <Link href="/register" className="inline-block rounded-xl bg-brand-orange px-8 py-4 text-xs font-black text-white hover:bg-brand-orangeHover transition-colors shadow-lg shadow-brand-orange/25">
              СОЗДАТЬ АККАУНТ
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}