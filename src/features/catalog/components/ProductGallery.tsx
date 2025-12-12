import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  isNew?: boolean;
}

export const ProductGallery = ({ images, isNew = false }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white dark:bg-[#1a2128] border border-slate-200 dark:border-[#283039] shadow-sm dark:shadow-glow group">
        {isNew && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20 dark:border-primary/30 backdrop-blur-sm">
              NEW ARRIVAL
            </span>
          </div>
        )}
        <div
          className="w-full h-full bg-center bg-no-repeat bg-contain transition-all duration-300"
          style={{ backgroundImage: `url("${activeImage}")` }}
        ></div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setActiveImage(img)}
            className={`cursor-pointer border-2 rounded-lg overflow-hidden h-24 bg-white dark:bg-[#1a2128] transition-colors ${
              activeImage === img
                ? "border-primary"
                : "border-slate-200 dark:border-[#283039] hover:border-primary/50"
            }`}
          >
            <div
              className={`w-full h-full bg-center bg-no-repeat bg-cover transition-opacity ${
                activeImage === img ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
              style={{ backgroundImage: `url("${img}")` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
