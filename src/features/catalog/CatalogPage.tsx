import { Link } from "react-router-dom";
import { ProductCard } from "./components/ProductCard";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CatalogFilters } from "./components/CatalogFilters";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const CatalogPage = () => {
  return (
    <div className="flex flex-col w-full h-full font-body">
      <main className="flex-1 flex flex-col p-6 md:p-10 w-full">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-6">

          {/* Breadcrumb */}
          <div className="py-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild className="text-slate-500 dark:text-[#9cabba] hover:text-slate-900 dark:hover:text-white transition-colors">
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-slate-400 dark:text-[#9cabba]" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-slate-900 dark:text-white font-medium">Catalog</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Title & Sort */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
                Printing Catalog
              </h1>
              <p className="text-slate-600 dark:text-[#9cabba] mt-2 max-w-2xl">
                Browse our library of pre-configured models optimized for Fused Deposition Modeling. Fast production, durable materials.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-sm text-slate-600 dark:text-[#9cabba]">Sort by:</span>
              <Select defaultValue="popularity">
                <SelectTrigger className="w-[180px] bg-white dark:bg-surface-dark border-slate-200 dark:border-white/5 text-slate-900 dark:text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Mobile Filter Bar & Search */}
          <div className="sticky top-0 z-30 backdrop-blur-sm py-4">
            <div className="flex gap-3">
              <div className="relative flex items-center flex-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 dark:text-[#9cabba]">
                  <Search className="size-5" />
                </div>
                <Input
                  className="bg-white dark:bg-surface-dark border-slate-200 dark:border-white/5 pl-10"
                  placeholder="Search products in this category..."
                  type="text"
                />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white gap-2 text-sm font-bold shadow-[0_0_15px_rgba(42,98,255,0.4)] border border-primary transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(42,98,255,0.6)]">
                    <SlidersHorizontal className="size-5" />
                    <span className="hidden sm:inline truncate">Filter</span>
                    <div className="flex items-center justify-center bg-white/20 rounded-full h-5 w-5 ml-1">
                      <span className="text-[10px] leading-none text-white">3</span>
                    </div>
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto p-0">
                  <CatalogFilters />
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ProductCard
              title="Voronoi Lamp"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCpcKoVP1J_p99r9ZPGPkIiKpY2YMpmXIZtvM0_BZ5CqzEdCprFY8GP41fPO8nmeumYkQHXiRwSVjhtKfqi14XobSk6ADCUKOUeDagv1jp4A2LtMv3jaW1SG6VC4fZWjgRDhwGs1z7IT9FrL_xY9Rp0mpPdEZNfp292sD6HWYjEEi7Q75cRdEAaf8c_Xm8lgqOVagQII6Pif_M1cLsigfKxhlT-RmlcHyMWTV9rf7EkqBWq85PGVWq-V1G0auK2DVDvyTXI0zBzRCaK"
              imageAlt="Voronoi Lamp"
              price="450 EGP"
              time="12h"
              description="Complex geometry organic shade structure. Optimized for clear PLA."
              isNew
              colorTagClass="text-amber-400 bg-amber-400/10"
              colors={["#ffffff", "#3b82f6", "#ef4444"]}
            />
            <ProductCard
              title="Planetary Gear Set"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDlfrxyMSUv1RTAsDwsEINWv4jPSccOAFU5Sa-ffqu3fq2P-vREVD2528NWY2WnubWfS44YwnXBU3MeBDX2xZlKjryBSCgXSuezGGUb8KgvXdAhCc3w4QkhE7HAk5j3bw-Hp01TdjMgTEzMhZTXHeSkZaDw9wFrLcSxTad8OZoQf2g1FfWeEWluQ8Am0ayQZUjLWvHa-5SJWnCYvgenqKZji45mJwwfYhdHqwbHQwxV5TGaDS8-Pj55BuL5fOz5wQUtubpRAp6guoIx"
              imageAlt="Mechanical Gear Set"
              price="150 EGP"
              time="5h"
              description="Interlocking planetary gear system for educational demonstrations."
              colorTagClass="text-teal-400 bg-teal-400/10"
            />
            <ProductCard
              title="Cairo Tower Scale"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBi7E_5GeaqE6BbriWGqfyObb4rP_M0SPpSqAQnHoPblo4JweZmlV-UAC1odnFd_xUTk5WXAmPqM0mtfk9SYyUyirvPZbGwGQgFSkBBFFnQRbQ7Dyouz7NUtZuxALv8trPwZdTboptuYhawQmNLCwdBaAyVVI6jnjTzOo_eux-h8b0Pm0S-5gzIb8vszN3UvxQUG3nxtC_OL6xzYkVSrMp_BDkklY3iwmQrqneMZJxAAEcMkc0IoStCy0yvpX648_sJyZysx6jv2Z1f"
              imageAlt="Architectural Model"
              price="1,200 EGP"
              time="24h"
              description="High-fidelity 1:500 scale model of the Cairo Tower. Multi-part assembly."
              colorTagClass="text-purple-400 bg-purple-400/10"
            />
            <ProductCard
              title="Modular Phone Stand"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCadUQtEIEN10Ru8g-aYlOLeLdTxZNBNmLft93M0obIA_Qdjlfhk4886796BfgLoqkydoVER2KgC0H4Fp7WmnjSIVXNmO2gaU-S-D-sCFljjb4OGXuC2O2xVLbs_uSYrYb2qw8iPx8I1SDA4QG4kP_1tZAkS1YVqvlMwSlmSYoFthxFANJPXaK_SGCye_aPy_hKdEiekBBxzW_eGHa81Lmd6ws0AGyELYfHsCEF1kRRNzVyYovJoRjCTax1h7xi-SqmITGCx0NGnTei"
              imageAlt="Phone Stand"
              price="90 EGP"
              time="3h"
              description="Ergonomic stand with adjustable viewing angles. Snap-fit assembly."
              colorTagClass="text-green-400 bg-green-400/10"
              colors={["#000000", "#ffffff"]}
            />
            <ProductCard
              title="Spiral Vase"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDaSPACw30akg0ONYPfADwIYJVaRCTDbUUFj5Tn9zVJbs3n_MKStqVx-Z1TB084QMuQw3R9XS_gCDa1wywaeOWCXXTR8LQsf0S0PC-y63IvTxQL1PSPbfG0j5HjSAhqYAJi3VFCU27bKcUaxE7F7JTZw91zDe1YAZrjH1DxlEixJdjP2wGZGbhG2H2TFaHrddILjTid0ooqIRICe5ScaUDWqh5SR0_dhPpKIcm87A0D-Y7-CNk59eSpEFapioqW0rIrrpc-cZCZidha"
              imageAlt="Vase"
              price="220 EGP"
              time="8h"
              description="Watertight single-perimeter vase mode print. Great for dried flowers."
              colorTagClass="text-orange-400 bg-orange-400/10"
            />
            <ProductCard
              title="Drone Arm Replacement"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBQilV8rFzciHeXdMaoAqGLZjJQTfS7XmQ5kOKr3C5KZKnlKOHaQnb1SCXSs6z6ZoRtKIPyk5-U2mltjincoPFPVzGaeycgx6cMpQ8nFRPLemEUkGbT0B6nBpsx7yo1BdGMyztDGmRFPl0hDWkTnNJqobCvk6DJC1i9wbQbLN0sf6NWUgU1U2RzfTC117QKhlFvvhT7pM_9nqcZLlDSXytoeSuf8AXaHiBRmeSWmOHi-C6xTIsbDpBgDnbNjhJ6-CLhmG3p0sPLwQwH"
              imageAlt="Drone Arm"
              price="75 EGP"
              time="2h"
              description="Reinforced replacement arm for standard 5-inch freestyle drone frames."
              colorTagClass="text-blue-400 bg-blue-400/10"
            />
          </div>

          {/* Pagination */}
          <div className="mt-8 pb-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">8</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
    </div>
  );
};
