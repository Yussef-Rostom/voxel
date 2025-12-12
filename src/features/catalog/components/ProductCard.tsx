import { Clock, ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id?: string;
  title: string;
  image: string;
  imageAlt: string;
  price: string; // e.g., "450 EGP"
  time: string; // e.g., "12h"
  description: string;
  isNew?: boolean;
  colorTagClass?: string; // e.g., "text-amber-400 bg-amber-400/10"
  colors?: string[]; // hex codes or tailwind classes for dots
}

export const ProductCard = ({
  id = "1",
  title,
  image,
  imageAlt,
  price,
  time,
  description,
  isNew,
  colorTagClass = "text-blue-400 bg-blue-400/10",
  colors,
}: ProductCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-surface-dark transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
      <div className="relative aspect-square w-full overflow-hidden bg-black/40">
        <Link to={`/product/${id}`}>
            <img
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            src={image}
            />
        </Link>
        {isNew && (
          <div className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur px-2 py-1 text-xs font-bold text-white border border-white/10">
            New
          </div>
        )}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10 hover:bg-white hover:text-red-500 transition-colors z-20">
          <Heart className="size-4" />
        </button>
      </div>
      <div className="flex flex-col p-4 flex-1">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${id}`} className="hover:text-primary transition-colors">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold truncate pr-2">{title}</h3>
          </Link>
          <div
            className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-medium shrink-0 ${colorTagClass}`}
          >
            <Clock className="size-3.5" />
            <span>{time}</span>
          </div>
        </div>
        <p className="text-slate-600 dark:text-[#9cabba] text-sm line-clamp-2 mb-4">{description}</p>
        <div className="mt-auto flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-slate-900 dark:text-white">{price}</span>
            {colors && (
              <div className="flex gap-1">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 rounded-full border border-slate-200 dark:border-gray-600"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            )}
          </div>
          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer">
            <ShoppingCart className="size-[18px]" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
