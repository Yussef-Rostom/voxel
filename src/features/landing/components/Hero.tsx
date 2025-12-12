import { Upload, Globe, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
    return (
        <section className="w-full max-w-[1280px] px-4 md:px-8 py-16 md:py-24 flex flex-col items-center text-center animate-fade-in-up">
            <Badge variant="secondary" className="gap-2 px-3 py-1 mb-6 border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                The Future of Manufacturing
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6 max-w-4xl">
                The First <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Digital Factory</span> in Egypt.
            </h1>
            <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                Your central hub for manufacturing, prototyping, and mass production. From digital file to physical product in clicks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Button 
                    className="group relative h-12 w-full sm:w-auto overflow-hidden rounded-full bg-slate-900 dark:bg-dark-gray px-8 text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(51,61,77,0.4)] hover:scale-105 active:scale-95"
                >
                    <Upload className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                    Upload Your File
                </Button>
                <Button 
                    variant="outline"
                    className="group h-12 w-full sm:w-auto rounded-full border-2 border-electric-blue text-electric-blue font-bold px-8 hover:bg-electric-blue hover:text-white transition-all hover:shadow-[0_0_20px_rgba(135,206,235,0.4)] hover:scale-105 active:scale-95 bg-transparent"
                >
                    <Globe className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Explore Catalog
                </Button>
            </div>
            
            <div className="mt-16 w-full max-w-5xl h-64 md:h-96 rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl group">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{
                        backgroundImage: `linear-gradient(rgba(15, 17, 24, 0.2), rgba(15, 17, 24, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAk-b1_7xBHs56IG_XAwlI63NvDWx324xP7onlDS17zPtDlUKWVDoFUSNedU-Xz_hsfHzChd6G1J1WtJUIGxTu67zA_ocnNolvYLx88nTmIhFW2lHwWQOIanLaPJ28Cw_SsFADf2vJBf8k7LTjxllb8stPT_KECrEDRM_4E0pjj8TbKGAmshv1tlEMAWIOiSJX6ugxRWhsO14U0kQ1CMCHuEC95Vk-u-dBtaLrYeR7ZFncui6NITYsbOrE9JHDq6eAcBXjRmbtAEbgt")`
                    }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 cursor-pointer hover:bg-primary hover:text-black hover:border-primary transition-all">
                        <Play className="h-8 w-8 ml-1 fill-current" />
                    </div>
                </div>
            </div>
        </section>
    );
};
