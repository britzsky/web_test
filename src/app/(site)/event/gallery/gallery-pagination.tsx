"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const IMAGES_PER_PAGE = 20;

type Props = {
  images: string[];
};

export default function GalleryPagination({ images }: Props) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(images.length / IMAGES_PER_PAGE));

  const pagedImages = useMemo(() => {
    const start = (page - 1) * IMAGES_PER_PAGE;
    return images.slice(start, start + IMAGES_PER_PAGE);
  }, [images, page]);

  return (
    <div className="space-y-10">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {pagedImages.map((imageName, index) => (
          <figure
            key={imageName}
            className="overflow-hidden rounded-[24px] border border-[#dbe4ee] bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3] bg-[#f4f7fb]">
              <Image
                src={`/images/gallery/${imageName}`}
                alt={`행사 갤러리 이미지 ${(page - 1) * IMAGES_PER_PAGE + index + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <figcaption className="px-4 py-3 text-sm text-[#4b5563]">
              행사 사진 {(page - 1) * IMAGES_PER_PAGE + index + 1}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          className="rounded-full border border-[#c7d4e2] px-4 py-2 text-sm font-semibold text-[#123a63] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          이전
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            onClick={() => setPage(pageNumber)}
            className={`h-10 min-w-10 rounded-full px-3 text-sm font-semibold transition ${
              pageNumber === page
                ? "bg-[#123a63] text-white"
                : "border border-[#c7d4e2] bg-white text-[#123a63] hover:bg-[#f4f7fb]"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          type="button"
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={page === totalPages}
          className="rounded-full border border-[#c7d4e2] px-4 py-2 text-sm font-semibold text-[#123a63] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          다음
        </button>
      </div>
    </div>
  );
}
