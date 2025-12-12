import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  FlaskConical,
  Ruler,
  DraftingCompass,
  ZoomIn,
  Download,
  Star,
  StarHalf,
  Pencil,
  ChevronDown,
} from "lucide-react";

export const ProductTabs = () => {
  return (
    <div className="bg-white/60 dark:bg-[#1a2128]/60 backdrop-blur-sm border border-slate-200 dark:border-white/5 rounded-xl p-6 md:p-8">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="bg-transparent border-b border-slate-200 dark:border-[#283039] w-full justify-start h-auto p-0 mb-6 rounded-none">
          <TabsTrigger
            value="description"
            className="px-6 py-3 text-slate-500 dark:text-[#9cabba] data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none text-lg font-medium transition-colors"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="technical"
            className="px-6 py-3 text-slate-500 dark:text-[#9cabba] data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none text-lg font-medium transition-colors"
          >
            Technical Details
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="px-6 py-3 text-slate-500 dark:text-[#9cabba] data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none text-lg font-medium transition-colors"
          >
            Reviews
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="description"
          className="text-slate-600 dark:text-[#9cabba] leading-relaxed max-w-4xl animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-4">
            Product Overview
          </h3>
          <p className="mb-6">
            The Industrial Gear Rotor v2 represents the next step in rapid prototyping
            components. Manufactured using our state-of-the-art FDM farm, this part is
            sliced with optimal orientation to handle stress loads perpendicular to the
            Z-axis.
          </p>
          <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-4">
            Manufacturing Process
          </h3>
          <p className="mb-6">
            Each unit undergoes a rigorous post-processing phase, including support
            removal and surface smoothing if requested. We utilize premium PLA+ filaments
            that offer superior layer adhesion compared to standard PLA, making it
            suitable for functional mechanical testing.
          </p>
          <div className="bg-slate-50 dark:bg-[#111418] rounded-lg p-6 border border-slate-200 dark:border-[#283039] mt-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">
                Need a custom modification?
              </h4>
              <p className="text-sm">
                We can adjust the bore diameter or number of teeth to fit your specific
                assembly.
              </p>
            </div>
            <Button
              variant="link"
              className="text-primary font-bold text-sm hover:underline flex items-center gap-1 p-0 h-auto"
            >
              Contact Engineering Team
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent
          value="technical"
          className="animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-6">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            <div>
              <h4 className="text-primary font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <FlaskConical className="size-5" /> Material Properties
              </h4>
              <ul className="flex flex-col gap-0">
                {[
                  { label: "Material Type", value: "PLA+ (Polylactic Acid)" },
                  { label: "Tensile Strength", value: "45 MPa" },
                  { label: "Flexural Strength", value: "75 MPa" },
                  { label: "Impact Strength", value: "8.5 kJ/m²" },
                  { label: "Heat Deflection", value: "52°C (0.45 MPa)" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-[#283039]"
                  >
                    <span className="text-slate-500 dark:text-[#9cabba] text-sm">
                      {item.label}
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium text-sm">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-yellow-500 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Ruler className="size-5" /> Dimensions & Process
              </h4>
              <ul className="flex flex-col gap-0">
                {[
                  { label: "Outer Diameter", value: "120 mm" },
                  { label: "Bore Diameter", value: "12 mm" },
                  { label: "Face Width", value: "25 mm" },
                  { label: "Net Weight", value: "85g ± 2g" },
                  { label: "Technology", value: "FDM / FFF" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-[#283039]"
                  >
                    <span className="text-slate-500 dark:text-[#9cabba] text-sm">
                      {item.label}
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium text-sm">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <DraftingCompass className="size-5" /> Schematic View
              </h4>
              <div className="bg-slate-50 dark:bg-[#111418] border border-slate-200 dark:border-[#283039] rounded-xl overflow-hidden relative group h-full flex flex-col min-h-[250px] lg:min-h-0">
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#283039 1px, transparent 1px), linear-gradient(90deg, #283039 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
                <div
                  className="flex-1 w-full bg-center bg-no-repeat bg-contain m-4 z-10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBc_zOTThPtCvEUNsMp_cLHCN1nFaXShFYICD276xXtpEZXXnM2cjDYnIZdfNF-9ECVMVwu1C723sxhNByYwbiXg2ETQRewn0ppeF3gTMEgJalLu0yt99EL_a3x7FXxxUSkacMh46cNPVflKIEvuy_uR_qBExcPuEPIxzIOUHQExxs1SRy3jKfjNHNkakjGQAZ8N1rToiznWnGlsbzB5p6otpiEH2MmPEuMlaVWuTrRn5kSb-NSwVBH9ONDVK-bAPesdf2Ou7PaSGFI")',
                  }}
                ></div>
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <button
                    className="bg-white dark:bg-[#1a2128] hover:bg-primary text-slate-900 dark:text-white p-1.5 rounded-lg border border-slate-200 dark:border-[#283039] transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="size-4" />
                  </button>
                </div>
                <div className="bg-white/80 dark:bg-[#1a2128]/80 backdrop-blur-sm border-t border-slate-200 dark:border-[#283039] p-3 flex justify-between items-center text-xs mt-auto z-20">
                  <span className="text-slate-500 dark:text-[#9cabba]">
                    ISO 9001:2015
                  </span>
                  <button className="text-primary hover:text-white font-medium flex items-center gap-1 transition-colors">
                    <Download className="size-4" /> PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="reviews"
          className="animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <div className="text-slate-600 dark:text-[#9cabba] leading-relaxed w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-1">
                  Customer Reviews
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex text-yellow-500">
                    <Star className="size-5 fill-current" />
                    <Star className="size-5 fill-current" />
                    <Star className="size-5 fill-current" />
                    <Star className="size-5 fill-current" />
                    <StarHalf className="size-5 fill-current" />
                  </div>
                  <span className="text-slate-900 dark:text-white font-medium">4.8</span>
                  <span className="text-slate-500 dark:text-[#9cabba]">
                    based on 24 reviews
                  </span>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-5 rounded-lg transition-colors flex items-center gap-2 text-sm shadow-lg shadow-primary/20">
                <Pencil className="size-[18px]" />
                Write a Review
              </Button>
            </div>
            <div className="flex flex-col gap-6">
              {[
                {
                  name: "Karim Ezzat",
                  initials: "KE",
                  date: "Oct 12, 2023",
                  rating: 5,
                  title: "Perfect for robotics",
                  content:
                    "The 100% infill makes a huge difference in durability compared to standard prints. It fit perfectly into my assembly without any modification.",
                },
                {
                  name: "Mona Saif",
                  initials: "MS",
                  date: "Oct 05, 2023",
                  rating: 4,
                  title: "Good quality, slight tolerance needed",
                  content:
                    "Good quality print, but I had to sand the bore slightly to fit my 12mm shaft perfectly. It was a bit tight, which is better than loose I suppose. Otherwise, excellent structure.",
                },
                {
                  name: "Tarek Ali",
                  initials: "TA",
                  date: "Sep 28, 2023",
                  rating: 5,
                  title: "Fast delivery",
                  content:
                    "Fast delivery and great packaging. The gear teeth are clean with no stringing. Highly recommended for industrial replacements.",
                },
              ].map((review, i) => (
                <div
                  key={i}
                  className="border-b border-slate-200 dark:border-[#283039] pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-slate-100 dark:bg-[#283039] flex items-center justify-center text-slate-900 dark:text-white font-bold text-sm border border-slate-200 dark:border-[#3b4550]">
                        {review.initials}
                      </div>
                      <div>
                        <p className="text-slate-900 dark:text-white font-medium text-sm">
                          {review.name}
                        </p>
                        <div className="flex text-yellow-500 text-[14px]">
                          {[...Array(5)].map((_, starI) => (
                            <Star
                              key={starI}
                              className={`size-4 fill-current ${
                                starI < review.rating
                                  ? ""
                                  : "text-gray-300 dark:text-gray-600 fill-none"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-slate-400 dark:text-[#586472] text-xs font-medium">
                      {review.date}
                    </span>
                  </div>
                  <h5 className="text-slate-900 dark:text-white text-sm font-bold mb-1">
                    {review.title}
                  </h5>
                  <p className="text-slate-600 dark:text-[#9cabba] text-sm leading-relaxed">
                    {review.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-[#283039] flex justify-center">
              <Button
                variant="ghost"
                className="text-slate-900 dark:text-white hover:text-primary transition-colors text-sm font-medium flex items-center gap-2"
              >
                Load More Reviews
                <ChevronDown className="size-5" />
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
