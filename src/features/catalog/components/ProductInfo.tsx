import { Star, StarHalf, ShoppingCart, Heart, Layers, ArrowUpDown, Cpu, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductInfoProps {
  title: string;
  price: string;
  rating: number;
  reviewsCount: number;
  description: string;
}

export const ProductInfo = ({ title, price, reviewsCount, description }: ProductInfoProps) => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-2">
        {title}
      </h1>
      <div className="flex items-center gap-2 mb-6">
        <div className="flex text-yellow-500 text-sm">
          <Star className="size-[18px] fill-current" />
          <Star className="size-[18px] fill-current" />
          <Star className="size-[18px] fill-current" />
          <Star className="size-[18px] fill-current" />
          <StarHalf className="size-[18px] fill-current" />
        </div>
        <span className="text-slate-500 dark:text-[#9cabba] text-sm">({reviewsCount} Reviews)</span>
      </div>
      <div className="mb-6">
        <span className="text-yellow-500 text-4xl font-bold">{price}</span>
      </div>
      <p className="text-slate-600 dark:text-[#9cabba] text-base leading-relaxed mb-8">
        {description}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-[#1a2128] border border-slate-200 dark:border-[#283039]">
          <Layers className="text-slate-400 dark:text-[#9cabba]" />
          <div>
            <p className="text-slate-400 dark:text-[#9cabba] text-xs uppercase tracking-wider font-semibold">
              Material
            </p>
            <p className="text-slate-900 dark:text-white font-medium">PLA+</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-[#1a2128] border border-slate-200 dark:border-[#283039]">
          <ArrowUpDown className="text-slate-400 dark:text-[#9cabba]" />
          <div>
            <p className="text-slate-400 dark:text-[#9cabba] text-xs uppercase tracking-wider font-semibold">
              Layer Height
            </p>
            <p className="text-slate-900 dark:text-white font-medium">0.2mm</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-[#1a2128] border border-slate-200 dark:border-[#283039]">
          <Cpu className="text-slate-400 dark:text-[#9cabba]" />
          <div>
            <p className="text-slate-400 dark:text-[#9cabba] text-xs uppercase tracking-wider font-semibold">
              Infill
            </p>
            <p className="text-slate-900 dark:text-white font-medium">100% Solid</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-[#1a2128] border border-slate-200 dark:border-[#283039]">
          <Clock className="text-slate-400 dark:text-[#9cabba]" />
          <div>
            <p className="text-slate-400 dark:text-[#9cabba] text-xs uppercase tracking-wider font-semibold">
              Print Time
            </p>
            <p className="text-slate-900 dark:text-white font-medium">4h 30m</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
        <Button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20 text-md">
          <ShoppingCart className="size-5" />
          Add to Cart
        </Button>
        <Button
          variant="outline"
          className="py-6 aspect-square bg-transparent border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold rounded-lg flex items-center justify-center transition-all text-md"
        >
          <Heart className="size-5" />
        </Button>
      </div>
    </div>                    
  );
};
