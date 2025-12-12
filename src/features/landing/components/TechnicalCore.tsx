import { Package, Settings, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const TechnicalCore = () => {
    return (
        <section className="w-full max-w-[1280px] px-4 md:px-8 py-16 flex flex-col animate-fade-in-up delay-200">
            <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200 dark:to-gray-700"></div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">The Technical Core</h2>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200 dark:to-gray-700"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Digital Inventory */}
                <Card className="bg-white dark:bg-surface-dark border-slate-200 dark:border-white/5 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group shadow-sm dark:shadow-none border h-full">
                    <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <Package className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-2">Digital Inventory</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                            Store your molds and designs in the cloud. Order on-demand without warehousing costs.
                        </CardDescription>
                    </CardContent>
                </Card>

                {/* Backend Automation */}
                <Card className="bg-white dark:bg-surface-dark border-slate-200 dark:border-white/5 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group shadow-sm dark:shadow-none border h-full">
                    <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                            <Settings className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-2">Backend Automation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                            Automated file checking, slicing, and machine routing for zero-error production runs.
                        </CardDescription>
                    </CardContent>
                </Card>

                {/* Quality Control */}
                <Card className="bg-white dark:bg-surface-dark border-slate-200 dark:border-white/5 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group shadow-sm dark:shadow-none border h-full">
                    <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-500 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-2">Quality Control</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                            AI-driven visual inspection combined with expert review ensures every part meets spec.
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
