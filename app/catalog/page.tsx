"use client";

import { useState } from "react";
import CarCard from "@/components/CarCard";

// Расширенный список лотов каталога с привязкой к категориям для интерактивной демонстрации
const CATALOG_CARS = [
  {
    title: "Aston Martin DB11 V12 2021",
    category: "Спорт",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=600",
    price: 94000000,
    timeLeft: "Завершён",
    bids: 2,
    city: "Алматы",
    views: "6 732",
    isFinished: true,
    isLive: false,
  },
  {
    title: "BMW M5 Competition 2022",
    category: "Спорт",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600",
    price: 52500000,
    timeLeft: "01:55:41",
    bids: 3,
    city: "Алматы",
    views: "2 847",
    isTop: true,
  },
  {
    title: "Mercedes-AMG GT 63 S 2021",
    category: "Люкс",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600",
    price: 63000000,
    timeLeft: "05:55:41",
    bids: 3,
    city: "Алматы",
    views: "3 521",
    isTop: true,
  },
  {
    title: "Lamborghini Huracán EVO 2020",
    category: "Спорт",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600",
    price: 131000000,
    timeLeft: "11:55:41",
    bids: 3,
    city: "Астана",
    views: "7 234",
  },
  {
    title: "McLaren 720S Spider 2021",
    category: "Спорт",
    image: "https://images.unsplash.com/photo-1562591176-b4ac53c20f6c?q=80&w=600",
    price: 109000000,
    timeLeft: "17:55:41",
    bids: 3,
    city: "Алматы",
    views: "8 965",
    isTop: true,
  },
  {
    title: "Ferrari 458 Italia 2019",
    category: "Спорт",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600",
    price: 95500000,
    timeLeft: "23:55:41",
    bids: 2,
    city: "Алматы",
    views: "5 890",
    isTop: true,
  },
  {
    title: "Mercedes-Benz S580 2023",
    category: "Люкс",
    image: "https://images.unsplash.com/photo-1617531653332-bd046c24f206?q=80&w=600",
    price: 40500000,
    timeLeft: "1 д. 23 ч.",
    bids: 2,
    city: "Алматы",
    views: "2 341",
  },
  {
    title: "BMW X6 M Competition 2024",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=600",
    price: 52000000,
    timeLeft: "1 д. 23 ч.",
    bids: 0,
    city: "Алматы",
    views: "3 211",
    isLive: false,
  },
  {
    title: "Porsche 911 Turbo S 2022",
    category: "Спорт",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600",
    price: 86000000,
    timeLeft: "2 д. 23 ч.",
    bids: 2,
    city: "Алматы",
    views: "4 120",
  },
  {
    title: "Bentley Continental GT 2021",
    category: "Люкс",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600",
    price: 73500000,
    timeLeft: "3 д. 23 ч.",
    bids: 2,
    city: "Астана",
    views: "3 105",
  },
  {
    title: "Range Rover Sport SVR 2023",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1608508381111-bd046c24f206?q=80&w=600",
    price: 47000000,
    timeLeft: "4 д. 23 ч.",
    bids: 2,
    city: "Алматы",
    views: "1 892",
  },
  {
    title: "Rolls-Royce Ghost 2022",
    category: "Люкс",
    image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?q=80&w=600",
    price: 162000000,
    timeLeft: "6 д. 23 ч.",
    bids: 2,
    city: "Алматы",
    views: "12 453",
  },
];

const TABS = ["Все", "Спорт", "Люкс", "SUV", "Классика", "Электро"];

export default function CatalogPage() {
  const [activeTab, setActiveTab] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("time");

  // Интерактивная фильтрация на стороне клиента
  const filteredCars = CATALOG_CARS.filter((car) => {
    const matchesTab = activeTab === "Все" || car.category === activeTab;
    const matchesSearch = car.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 py-12 md:px-12">
      
      {/* Шапка каталога */}
      <div className="mb-10">
        <h1 className="text-3xl font-black text-white uppercase tracking-tight md:text-4xl">
          КАТАЛОГ АУКЦИОНОВ
        </h1>
        <p className="text-sm text-brand-textSecondary mt-2">
          Найдено {filteredCars.length} лотов
        </p>
      </div>

      {/* Панель инструментов: Поиск, Сортировка, Фильтры */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        
        {/* Поисковая строка */}
        <div className="flex flex-1 items-center gap-3 rounded-xl border border-brand-border bg-brand-card px-4 py-3 max-w-2xl">
          <span className="text-brand-textSecondary text-lg">🔍</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Марка, модель или VIN..."
            className="w-full bg-transparent text-sm text-white placeholder-brand-textSecondary outline-none"
          />
        </div>

        {/* Фильтры и сортировка */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Сортировка */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="rounded-xl border border-brand-border bg-brand-card px-4 py-3.5 text-xs font-bold text-white outline-none focus:border-brand-orange cursor-pointer"
          >
            <option value="time">По времени</option>
            <option value="price-asc">Сначала дешевле</option>
            <option value="price-desc">Сначала дороже</option>
          </select>

          {/* Кнопка "Фильтры" */}
          <button className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card px-5 py-3.5 text-xs font-bold text-white hover:border-brand-orange transition-colors">
            <span>🎛️</span> Фильтры
          </button>

          {/* Переключатель вида (Сетка / Список) */}
          <div className="flex items-center rounded-xl border border-brand-border bg-brand-card p-1">
            <button className="rounded-lg bg-brand-orange/10 p-2 text-brand-orange">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button className="rounded-lg p-2 text-brand-textSecondary hover:text-white transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>

      </div>

      {/* Горизонтальные вкладки категорий */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all border shrink-0 ${
              activeTab === tab
                ? "bg-brand-orange border-brand-orange text-white"
                : "bg-brand-card border-brand-border text-brand-textSecondary hover:border-brand-orange hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Сетка лотов */}
      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredCars.map((car, idx) => (
            <CarCard key={idx} {...car} />
          ))}
        </div>
      ) : (
        /* Пустое состояние, если ничего не найдено */
        <div className="rounded-2xl border border-brand-border bg-brand-card py-24 text-center">
          <p className="text-4xl">🔍</p>
          <h3 className="mt-4 text-lg font-bold text-white">Ничего не найдено</h3>
          <p className="text-sm text-brand-textSecondary mt-2">
            Попробуйте изменить поисковый запрос или выбрать другую категорию.
          </p>
        </div>
      )}

    </div>
  );
}