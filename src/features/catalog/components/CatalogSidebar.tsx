import { CatalogFilters } from "./CatalogFilters";

export const CatalogSidebar = () => {
    return (
        <aside className="hidden lg:flex flex-col w-[420px] max-h-[80vh] m-6 rounded-xl bg-[#151c24]/90 dark:bg-[#151c24]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden shrink-0 sticky top-24">
            <div className="p-6">
                <CatalogFilters />
            </div>
        </aside>
    );
};
