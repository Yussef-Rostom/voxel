import { LayoutGrid, Brain, Sliders, Upload, Briefcase, ArrowRight } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export const TracksGrid = () => {
    return (
        <section className="w-full max-w-[1280px] px-4 md:px-8 py-12 flex flex-col items-center">
            <div className="mb-10 text-center animate-fade-in-up delay-100">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Choose Your Path</h2>
                <p className="text-slate-600 dark:text-gray-400">Select a specialized track for your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full auto-rows-[240px]">
                {/* Catalog */}
                <Card className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-white/50 dark:bg-transparent backdrop-blur-md border-slate-200 dark:border-transparent dark:glass-panel relative overflow-hidden group cursor-pointer p-0 h-full border-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity z-20">
                        <LayoutGrid className="h-10 w-10 text-slate-900 dark:text-white" />
                    </div>
                    <CardHeader className="relative z-10 h-full flex flex-col justify-end p-6">
                        <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:translate-x-2 transition-transform">Catalog</CardTitle>
                        <CardDescription className="text-slate-600 dark:text-gray-400 text-sm group-hover:text-primary dark:group-hover:text-white transition-colors">Browse ready-made designs.</CardDescription>
                    </CardHeader>
                    <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-electric-blue/20 rounded-full blur-3xl group-hover:bg-electric-blue/30 transition-colors"></div>
                </Card>

                {/* AI Creator */}
                <Card className="col-span-1 row-span-1 bg-white/50 dark:bg-transparent backdrop-blur-md border-slate-200 dark:border-transparent dark:glass-panel relative overflow-hidden group cursor-pointer animate-fade-in-up delay-300 p-0 h-full border-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    <div className="absolute top-4 right-4 text-cyber-cyan z-20">
                        <Brain className="h-8 w-8" />
                    </div>
                    <CardHeader className="relative z-10 h-full flex flex-col justify-end p-6">
                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-1">AI Creator</CardTitle>
                        <CardDescription className="text-slate-600 dark:text-gray-400 text-xs">Generate models from text.</CardDescription>
                    </CardHeader>
                </Card>

                {/* Smart Configurator */}
                <Card className="col-span-1 md:col-span-1 row-span-1 bg-white/50 dark:bg-transparent backdrop-blur-md border-slate-200 dark:border-transparent dark:glass-panel relative overflow-hidden group cursor-pointer animate-fade-in-up delay-400 p-0 h-full border-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 text-primary z-20">
                        <Sliders className="h-8 w-8" />
                    </div>
                    <CardHeader className="relative z-10 h-full flex flex-col justify-end p-6">
                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-1">Smart Configurator</CardTitle>
                        <CardDescription className="text-slate-600 dark:text-gray-400 text-xs">Customize parameters instantly.</CardDescription>
                    </CardHeader>
                </Card>

                {/* Pro Upload */}
                <Card className="col-span-1 row-span-1 bg-white/50 dark:bg-transparent backdrop-blur-md border-slate-200 dark:border-transparent dark:glass-panel relative overflow-hidden group cursor-pointer animate-fade-in-up delay-500 p-0 h-full border-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    <div className="absolute top-4 right-4 text-slate-500 dark:text-dark-gray z-20">
                        <Upload className="h-8 w-8" />
                    </div>
                    <CardHeader className="relative z-10 h-full flex flex-col justify-end p-6">
                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-1">Pro Upload</CardTitle>
                        <CardDescription className="text-slate-600 dark:text-gray-400 text-xs">For engineering-grade files.</CardDescription>
                    </CardHeader>
                </Card>

                {/* Business Solutions */}
                <Card className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 bg-white/50 dark:bg-transparent backdrop-blur-md border-slate-200 dark:border-transparent dark:glass-panel relative overflow-hidden group cursor-pointer animate-fade-in-up delay-500 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] p-0 h-full border-0">
                    <div 
                        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity scale-100 group-hover:scale-105 duration-700" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0zEiNdtgUTES9njUWhYlJDsdYgogSMEPMuZhYeGLpVnJsJaLKZO5jwkCQIHZFjwQFGKNXkyyxs_81t9jwL7-q35i0zKoyp2j5bN8_a3YMpFirbPKZsj3RRZNqzVRZvlva8MRjXcPNRNmk-C9wtXzlldlaJbtzyS3XfdzpPb6Q9i4o7yzFRlbymXunIsLnWZ0b1BpKuQxT2ihHKRA3shFXNPrVVgvp7-VrUNnYOXaG_zekZ5SjD4bYD7QjSYXJdC-N_cKS34jgpWVa")' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-100/80 via-slate-100/50 dark:from-background-dark dark:via-background-dark/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 z-20">
                        <Briefcase className="h-8 w-8 text-slate-900 dark:text-white" />
                    </div>
                    <CardHeader className="relative z-10 h-full flex flex-col justify-center max-w-md p-6 pl-10">
                        <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Business Solutions</CardTitle>
                        <CardDescription className="text-slate-700 dark:text-gray-300 text-sm mb-4">Dedicated pipelines for mass production & B2B partnerships. Scale your manufacturing with our digital infrastructure.</CardDescription>
                        <Button variant="link" className="p-0 h-auto text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1 w-fit hover:no-underline">
                            Learn More <ArrowRight className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                </Card>
            </div>
        </section>
    );
};
