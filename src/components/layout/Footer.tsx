import { Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="w-full border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0f1118] py-12">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="size-6 text-slate-400 dark:text-gray-500">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <span className="text-slate-500 dark:text-gray-500 font-bold text-sm">© 2024 Etb3haly. All rights reserved.</span>
                </div>
                
                <div className="flex gap-6">
                    <a className="text-slate-400 dark:text-gray-500 hover:text-primary transition-colors" href="#">
                        <span className="sr-only">Facebook</span>
                        <Facebook className="text-lg" />
                    </a>
                    <a className="text-slate-400 dark:text-gray-500 hover:text-primary transition-colors" href="#">
                        <span className="sr-only">Twitter</span>
                        <Twitter className="text-lg" />
                    </a>
                    <a className="text-slate-400 dark:text-gray-500 hover:text-primary transition-colors" href="#">
                        <span className="sr-only">Instagram</span>
                        <Instagram className="text-lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
