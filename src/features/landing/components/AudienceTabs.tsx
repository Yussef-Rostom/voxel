import { ShoppingBag, Lightbulb, Hammer, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
    {
        id: "shoppers",
        label: "Shoppers",
        icon: ShoppingBag,
        title: "Unique Products, Personalized.",
        description: "Don't settle for mass-produced generic items. Discover a catalog of unique, 3D-printed home decor, accessories, and gadgets that you can customize to fit your style perfectly.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM_pDEMJj31r37ul6H4ye8c0Ka4ubgXYZGbxduESfKfWZy_Rllghq-b7rzZIKEH3T-WC4ONehATMkivwPQ1Yq2zn7vmzSzqL8BKBEJPGruzIr_o4CJrBWr2ISGmVPdTRqRIDYnVgR-GHVwMKk9hPDiAQGulZs_FzdUMdi0mHnOcs8S7GM5KygAqD9wv3PBy3wTLDb11GmkFWY99Rf5APFe_7Lj-5n8ks3eS-ndkni6r615iNYaV1l95JhN0tTH0vsf14gPbt4NU9CY",
        cta: "Start Shopping"
    },
    {
        id: "innovators",
        label: "Innovators",
        icon: Lightbulb,
        title: "Rapid Prototyping.",
        description: "Turn your concepts into physical reality in hours, not weeks. Iterate faster with our high-precision printing services designed for rapid product development.",
        image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?q=80&w=2000&auto=format&fit=crop", // Placeholder or similar tech image
        cta: "Start Prototyping"
    },
    {
        id: "makers",
        label: "Makers",
        icon: Hammer,
        title: "Parts for Your Projects.",
        description: "Get the exact parts you need for your DIY builds. From gears to casings, we print with engineering-grade materials to ensure durability.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop", 
        cta: "Upload Model"
    },
    {
        id: "business",
        label: "Business",
        icon: Building2,
        title: "Scale Your Production.",
        description: " leverage our digital factory for on-demand manufacturing. Reduce inventory costs and supply chain risks with our B2B manufacturing solutions.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0zEiNdtgUTES9njUWhYlJDsdYgogSMEPMuZhYeGLpVnJsJaLKZO5jwkCQIHZFjwQFGKNXkyyxs_81t9jwL7-q35i0zKoyp2j5bN8_a3YMpFirbPKZsj3RRZNqzVRZvlva8MRjXcPNRNmk-C9wtXzlldlaJbtzyS3XfdzpPb6Q9i4o7yzFRlbymXunIsLnWZ0b1BpKuQxT2ihHKRA3shFXNPrVVgvp7-VrUNnYOXaG_zekZ5SjD4bYD7QjSYXJdC-N_cKS34jgpWVa", 
        cta: "Contact Sales"
    }
];


export const AudienceTabs = () => {
    return (
        <section className="w-full max-w-[1280px] px-4 md:px-8 py-16 mb-20 animate-fade-in-up delay-300">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Who We Serve</h2>
                
                <Tabs defaultValue="shoppers" className="w-full flex flex-col items-center">
                    <TabsList className="flex flex-wrap justify-center gap-2 p-1 bg-slate-100 dark:bg-surface-dark/50 backdrop-blur border border-slate-200 dark:border-white/5 rounded-full mb-10 w-fit h-auto">
                        {tabs.map((tab) => (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.id}
                                className="px-6 py-2 rounded-full text-sm font-bold transition-all data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:shadow-lg text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5"
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <TabsContent key={tab.id} value={tab.id} className="w-full">
                                <div className="w-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[400px] shadow-sm dark:shadow-none animate-in fade-in zoom-in-95 duration-300">
                                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                                        <div className="inline-flex items-center gap-2 text-primary mb-4 font-bold tracking-wider text-sm uppercase">
                                            <Icon className="text-lg" />
                                            For {tab.label}
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{tab.title}</h3>
                                        <p className="text-slate-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                                            {tab.description}
                                        </p>
                                        <Button className="flex items-center gap-2 text-slate-900 dark:text-white font-bold bg-transparent hover:bg-transparent hover:text-primary transition-colors group w-fit p-0 h-auto">
                                            {tab.cta}
                                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                    
                                    <div className="flex-1 bg-slate-200 dark:bg-black/20 relative min-h-[300px] md:min-h-full">
                                        <div 
                                            className="absolute inset-0 bg-cover bg-center transition-all duration-500" 
                                            style={{ backgroundImage: `url("${tab.image}")` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 dark:from-surface-dark dark:via-surface-dark/20 to-transparent md:bg-gradient-to-l md:from-white md:via-white/20 md:dark:from-surface-dark md:dark:via-surface-dark/20"></div>
                                    </div>
                                </div>
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};
