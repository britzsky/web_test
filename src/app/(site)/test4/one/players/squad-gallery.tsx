"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
};

export default function SquadGallery({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {images.map((imageName, index) => (
          <figure
            key={imageName}
            className="overflow-hidden rounded-2xl border border-[#dbe4ee] bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(imageName)}
              className="relative flex aspect-[4/3] w-full items-center justify-center bg-[#eef5fb] p-3"
            >
              <Image
                src={`/images/squad/${imageName}`}
                alt={`선수단 사진 ${index + 1}`}
                fill
                className="object-contain p-3"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </button>
            <figcaption className="flex items-center justify-between px-4 py-3 text-sm text-[#4b5563]">
              <span>선수단 사진 {index + 1}</span>
              <button
                type="button"
                onClick={() => setSelectedImage(imageName)}
                className="font-semibold text-[#123a63]"
              >
                크게 보기
              </button>
            </figcaption>
          </figure>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-6"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl bg-white p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-[#123a63] px-3 py-2 text-sm font-semibold text-white"
            >
              닫기
            </button>
            <div className="relative flex h-[75vh] items-center justify-center rounded-xl bg-[#f8fafc]">
              <Image
                src={`/images/squad/${selectedImage}`}
                alt="확대된 선수단 사진"
                fill
                className="object-contain p-4"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
