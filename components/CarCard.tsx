"use client";

interface CarCardProps {
  title: string;
  image: string;
  price: number;
  timeLeft: string;
  bids: number;
  city: string;
  views: string;
  isLive?: boolean;
  isTop?: boolean;
  isFinished?: boolean;
}

export default function CarCard({
  title,
  image,
  price,
  timeLeft,
  bids,
  city,
  views,
  isLive = true,
  isTop = false,
  isFinished = false,
}: CarCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-brand-border bg-brand-card transition-all duration-300 hover:border-brand-orange/50 hover:shadow-[0_0_20px_rgba(255,92,0,0.15)]">
      
      {/* Изображение и статусы */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-bg">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Затемнение фона */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />

        {/* Статусы (Теги) слева */}
        <div className="absolute left-3 top-3 flex items-center gap-1.5">
          {isFinished ? (
            <span className="rounded bg-zinc-600 px-2.5 py-1 text-[10px] font-black uppercase text-white tracking-wider">
              Завершен
            </span>
          ) : (
            <>
              {isLive && (
                <span className="rounded bg-brand-orange px-2.5 py-1 text-[10px] font-black uppercase text-white tracking-wider">
                  LIVE
                </span>
              )}
              {isTop && (
                <span className="rounded bg-amber-500/20 border border-amber-500/30 px-2.5 py-1 text-[10px] font-black uppercase text-amber-400 tracking-wider">
                  TOP
                </span>
              )}
            </>
          )}
        </div>

        {/* Просмотры справа */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded bg-black/60 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
          <span>👁️</span> {views}
        </div>
      </div>

      {/* Информация о лоте */}
      <div className="p-5">
        <h3 className="line-clamp-1 text-base font-bold text-white group-hover:text-brand-orange transition-colors">
          {title}
        </h3>

        {/* Блок цены и таймера */}
        <div className="mt-4 flex items-end justify-between border-b border-brand-border/60 pb-4">
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-brand-textSecondary">
              Текущая ставка
            </span>
            <span className="mt-1 block text-base font-black text-brand-orange">
              {price.toLocaleString("ru-RU")} ₸
            </span>
          </div>
          <div className="text-right">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-brand-textSecondary">
              {isFinished ? "Статус" : "До конца"}
            </span>
            <span className={`mt-1 block text-sm font-black ${isFinished ? "text-brand-textSecondary" : "text-white"}`}>
              {timeLeft}
            </span>
          </div>
        </div>

        {/* Сведения: ставки и город */}
        <div className="mt-4 flex items-center justify-between text-xs text-brand-textSecondary">
          <div className="flex items-center gap-1.5 font-medium">
            <span>🔨</span> {bids} ставок
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <span>📍</span> {city}
          </div>
        </div>
      </div>

    </div>
  );
}