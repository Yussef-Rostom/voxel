import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-fade-in-up">
            <h1 className="text-9xl font-black text-slate-900 dark:text-white mb-4 opacity-10">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Page Not Found
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg mb-10 max-w-lg">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Button 
                onClick={() => navigate("/")}
                className="group relative h-12 w-auto overflow-hidden rounded-full bg-slate-900 dark:bg-dark-gray px-8 text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(51,61,77,0.4)] hover:scale-105 active:scale-95"
            >
                <Home className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                Return to Home
            </Button>
        </div>
    );
};
