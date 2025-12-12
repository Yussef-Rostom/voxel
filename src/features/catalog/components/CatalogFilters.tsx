import { Input } from "@/components/ui/input";
import { Filter, ChevronDown, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const CatalogFilters = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);

    return (
        <div className="flex flex-col h-full bg-transparent text-white">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                    <Filter className="text-primary size-5" />
                    <h3 className="text-lg font-bold text-white">Filter Catalog</h3>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-7 custom-scrollbar">
                {/* Price Range Filter */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-bold text-white uppercase tracking-wider">Price Range</label>
                        <span className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded border border-primary/20">50 - 5000 EGP</span>
                    </div>

                    {/* Simplified Slider Representation for now, matching reference visual */}
                    <div className="flex h-8 w-full items-center relative px-2">
                        <div className="relative flex h-1.5 w-full rounded-full bg-[#28323c]">
                            <div className="absolute left-[5%] right-[25%] h-full rounded-full bg-primary shadow-[0_0_10px_rgba(42,98,255,0.5)]"></div>
                            {/* Thumb 1 */}
                            <div className="absolute left-[5%] top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white border-2 border-primary cursor-pointer hover:scale-110 shadow-lg transition-transform z-10 flex items-center justify-center group">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            {/* Thumb 2 */}
                            <div className="absolute right-[25%] top-1/2 translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white border-2 border-primary cursor-pointer hover:scale-110 shadow-lg transition-transform z-10 flex items-center justify-center group">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between text-[11px] text-slate-500 font-mono uppercase">
                        <span>Min</span>
                        <span>Max</span>
                    </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* Category Filter */}
                <div className="flex flex-col">
                    <button
                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                        className="flex cursor-pointer items-center justify-between gap-2 py-2 text-sm font-bold text-white uppercase tracking-wider hover:text-primary transition-colors select-none outline-none"
                    >
                        <div className="flex items-center gap-2">
                            <div className="text-slate-400">
                                {/* Icon placeholder if needed, e.g. Category icon */}
                            </div>
                            <span>Category</span>
                        </div>
                        <ChevronDown className={cn("text-slate-400 transition-transform duration-300", isCategoryOpen && "rotate-180")} />
                    </button>

                    {isCategoryOpen && (
                        <div className="pt-3 pl-1 flex flex-col gap-1">
                            {[
                                { name: "Lamps & Lighting", count: 12, checked: false },
                                { name: "Industrial Gears", count: 45, checked: true },
                                { name: "Custom Parts", count: 8, checked: false }
                            ].map((item, idx) => (
                                <label key={idx} className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-white/5 cursor-pointer group/item transition-colors">
                                    <div className="relative flex items-center justify-center h-5 w-5">
                                        <input
                                            type="checkbox"
                                            defaultChecked={item.checked}
                                            className="peer h-5 w-5 appearance-none rounded border-2 border-[#3b4754] bg-transparent checked:border-primary checked:bg-primary hover:border-slate-500 focus:outline-none transition-all"
                                        />
                                        <Check className="absolute text-white opacity-0 peer-checked:opacity-100 size-3.5 pointer-events-none transition-opacity" />
                                    </div>
                                    <span className="text-sm text-slate-300 group-hover/item:text-white transition-colors">{item.name}</span>
                                    <span className="ml-auto text-xs text-slate-600">{item.count}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="p-5 border-t border-white/5 bg-[#101922]/80 backdrop-blur flex gap-4 z-20 mt-auto">
                <button className="flex-1 h-12 px-4 rounded-lg text-primary font-bold hover:bg-primary/10 transition-all text-sm uppercase tracking-wide flex items-center justify-center gap-2 group">
                    <span>Reset</span>
                </button>
                <button className="flex-[2] h-12 px-4 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-[0_4px_14px_0_rgba(42,98,255,0.39)] hover:shadow-[0_6px_20px_rgba(42,98,255,0.23)] hover:-translate-y-0.5 text-sm uppercase tracking-wide flex items-center justify-center gap-2">
                    <span>Apply Filters</span>
                </button>
            </div>
        </div>
    );
};
