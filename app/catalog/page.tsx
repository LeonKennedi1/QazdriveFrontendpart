"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";

const CATALOG_CARS = [
  {
    id: "1",
    make: "Aston Martin",
    model: "DB11 V12",
    year: 2021,
    category: "Спорт",
    imageUrl: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=600",
    currentBid: 94000000,
    location: "Алматы",
    views: "6 732",
    isFinished: true,
    isLive: false,
  },
  {
    id: "2",
    make: "BMW",
    model: "M5 Competition",
    year: 2022,
    category: "Спорт",
    imageUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600",
    currentBid: 52500000,
    location: "Алматы",
    views: "2 847",
    isTop: true,
    isLive: true,
  },
  {
    id: "3",
    make: "Mercedes-AMG",
    model: "GT 63 S",
    year: 2021,
    category: "Люкс",
    imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600",
    currentBid: 63000000,
    location: "Алматы",
    views: "3 521",
    isTop: true,
    isLive: true,
  },
  {
    id: "4",
    make: "Lamborghini",
    model: "Huracán EVO",
    year: 2020,
    category: "Спорт",
    imageUrl: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600",
    currentBid: 131000000,
    location: "Астана",
    views: "7 234",
    isLive: true,
  },
  {
    id: "5",
    make: "McLaren",
    model: "720S Spider",
    year: 2021,
    category: "Спорт",
    imageUrl: "https://images.unsplash.com/photo-1562591176-b4ac53c20f6c?q=80&w=600",
    currentBid: 109000000,
    location: "Алматы",
    views: "8 965",
    isTop: true,
    isLive: true,
  },
  {
    id: "6",
    make: "Ferrari",
    model: "458 Italia",
    year: 2019,
    category: "Спорт",
    imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600",
    currentBid: 95500000,
    location: "Алматы",
    views: "5 890",
    isTop: true,
    isLive: true,
  },
  {
    id: "7",
    make: "Mercedes-Benz",
    model: "S580",
    year: 2023,
    category: "Люкс",
    imageUrl: "https://images.unsplash.com/photo-1617531653332-bd046c24f206?q=80&w=600",
    currentBid: 40500000,
    location: "Алматы",
    views: "2 341",
    isLive: true,
  },
  {
    id: "8",
    make: "BMW",
    model: "X6 M",
    year: 2024,
    category: "SUV",
    imageUrl: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=600",
    currentBid: 52000000,
    location: "Алматы",
    views: "3 211",
    isLive: false,
  },
];

const TABS = ["Все", "Спорт", "Люкс", "SUV", "Классика", "Электро"];

export default function CatalogPage() {
  const [activeTab, setActiveTab] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCars = CATALOG_CARS.filter((car) => {
    const matchesTab = activeTab === "Все" || car.category === activeTab;
    const matchesSearch =
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <main className="bg-[#020617] min-h-screen text-white font-sans selection:bg-orange-500 selection:text-black">
      <Header />
      
      <div className="mx-auto w-full max-w-[1440px] px-6 pt-40 pb-24 md:px-12">
        {/* Заголовок */}
        <div className="mb-12 text-left border-l-4 border-orange-500 pl-8">
          <h1 className="text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
            КАТАЛОГ <span className="text-orange-500 underline decoration-2 underline-offset-8 decoration-orange-500/20">АУКЦИОНОВ</span>
          </h1>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em] mt-4 italic">
            Найдено: {filteredCars.length} лотов
          </p>
        </div>

        {/* Панель инструментов поиска */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-12">
          <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/5 bg-[#0f172a] px-4 py-3.5 max-w-2xl">
            <span className="text-slate-500 text-lg ml-2">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Марка, модель или VIN..."
              className="w-full bg-transparent p-4 text-white outline-none font-bold placeholder-slate-600"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select className="rounded-2xl border border-white/5 bg-[#0f172a] px-6 py-4 text-xs font-black text-white outline-none focus:border-orange-500/50 cursor-pointer uppercase tracking-widest italic">
              <option>По времени</option>
              <option>Сначала дешевле</option>
              <option>Сначала дороже</option>
            </select>

            <button className="flex items-center gap-2 rounded-2xl border border-white/5 bg-[#0f172a] px-6 py-4 text-xs font-black text-white hover:border-orange-500/50 transition-colors uppercase tracking-widest italic">
              <span>🎛️</span> Фильтры
            </button>
          </div>
        </div>

        {/* Категории */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] transition-all border shrink-0 italic ${
                activeTab === tab
                  ? "bg-orange-500 border-orange-500 text-black shadow-lg shadow-orange-500/20"
                  : "bg-[#0f172a] border-white/5 text-slate-400 hover:border-orange-500/50 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Сетка автомобилей */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                id={car.id}
                make={car.make}
                model={car.model}
                year={car.year}
                location={car.location}
                currentBid={car.currentBid}
                imageUrl={car.imageUrl}
                isLive={!car.isFinished}
                isFinished={car.isFinished}
                isTop={car.isTop}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[2.5rem] border border-white/5 bg-[#0f172a] py-24 text-center">
            <p className="text-6xl mb-4">🏎️</p>
            <h3 className="text-xl font-black text-white uppercase tracking-widest">Ничего не найдено</h3>
            <p className="text-xs text-slate-500 mt-2 italic">Попробуйте изменить поисковый запрос</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}