import type { ReactNode } from "react";
// import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    // const location = useLocation();
    // const isHomePage = location.pathname === "/";
    const isHomePage = true;

    return (
        <TooltipProvider>
            <div className="relative flex min-h-screen flex-col bg-background text-foreground font-display overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
                {isHomePage && (
                    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                        {/* Ambient Glows */}
                        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] dark:mix-blend-screen dark:bg-primary/10" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-electric-blue/5 blur-[120px] dark:mix-blend-screen dark:bg-electric-blue/5" />
                        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] rounded-full bg-purple-500/5 blur-[100px] dark:mix-blend-screen dark:bg-purple-900/10" />

                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-[image:var(--background-image-grid-pattern-light)] dark:bg-[image:var(--background-image-grid-pattern)] opacity-[0.6] dark:opacity-[0.4]" />

                        {/* Radial Fade for Grid */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                    </div>
                )}
                <Navbar />
                <Separator />
                <main className="relative z-10 flex flex-col items-center w-full grow">
                    {children}
                </main>
                <div className="relative z-10 w-full">
                    <Footer />
                </div>
                <Toaster />
            </div>
        </TooltipProvider>
    );
};
