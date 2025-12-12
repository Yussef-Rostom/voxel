import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ProductGallery } from "./components/ProductGallery";
import { ProductInfo } from "./components/ProductInfo";
import { ProductTabs } from "./components/ProductTabs";

export const ProductDetailsPage = () => {
  const productImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDuVofIL1R-FoIVMYP4mHTtPkFVgwEDrz18cJX2Q1hpMrdEbUgFCCV-_LMDwemaXVCKwuAf2zUV9zwHEnQda7RzEPimIxKkJLHOzVcKjFTxjfpiiAy0T-2oyMSqPk5hGfK7fdl9ClrKy28zbfV6icJ_3xp_vADb1kbkkzBKG-2Je0SfbbS1by4AnNSdypymjYg-nEW6JpEaJroVw4tDMgGpVgF6VJ4W3tM2LnkehFTGl4gyLB3voLcQ47bDtYTSeqYteIDVNZuMdP8d",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC2yUTcp_ZR1vHEey3ruWjNPsrFzZpq-x8BAqUP4qUzpIUh4nQV7D5hiEE1cgKf4RI2auvbF-1z0awSJgClz4fLNAFIToQxtMILh0h4zRLb_OfWwE3_eY8Hfyx-HsSUAwXRbLzg2g90iYw14LfipE54JQ9XdPX5KK8UlZi-3khI8R9KxgLMaRdB-9UNYQfbNQiGo7RlchOKL0UqrJFthXTzXvHftfgxknvfKN7-TJ3BeREywrVfcgKQ1NU4FN2s9UA1DPl_EDKSUGw8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBc_zOTThPtCvEUNsMp_cLHCN1nFaXShFYICD276xXtpEZXXnM2cjDYnIZdfNF-9ECVMVwu1C723sxhNByYwbiXg2ETQRewn0ppeF3gTMEgJalLu0yt99EL_a3x7FXxxUSkacMh46cNPVflKIEvuy_uR_qBExcPuEPIxzIOUHQExxs1SRy3jKfjNHNkakjGQAZ8N1rToiznWnGlsbzB5p6otpiEH2MmPEuMlaVWuTrRn5kSb-NSwVBH9ONDVK-bAPesdf2Ou7PaSGFI",
  ];

  return (
    <div className="w-full max-w-7xl px-4 md:px-10 py-6">
      
      {/* Breadcrumb */}
      <div className="py-4 mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-slate-500 dark:text-[#9cabba] hover:text-slate-900 dark:hover:text-white transition-colors">
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-slate-400 dark:text-[#9cabba]" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-slate-500 dark:text-[#9cabba] hover:text-slate-900 dark:hover:text-white transition-colors">
                <Link to="/catalog">Catalog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-slate-400 dark:text-[#9cabba]" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-slate-900 dark:text-white font-medium">Industrial Gear Rotor v2</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Images */}
        <div className="lg:col-span-7">
          <ProductGallery images={productImages} isNew={true} />
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-5">
          <ProductInfo 
            title="Industrial Gear Rotor v2"
            price="450 EGP"
            rating={4.8}
            reviewsCount={24}
            description="High-durability PLA+ gear designed for continuous rotation systems. Optimized for industrial prototyping and replacement parts. Features reinforced internal structure for maximum torque resistance."
          />
        </div>
      </div>

      <div className="mt-16 w-full">
        <ProductTabs />
      </div>
    </div>
  );
};
