import fs from "node:fs/promises";
import path from "node:path";

import SiteFooter from "../../test4/one/_components/site-footer";
import SiteHeader from "../../../../components/site-header";
import GalleryPagination from "./gallery-pagination";

const getGalleryImages = async () => {
  const galleryDir = path.join(process.cwd(), "public", "images", "gallery");
  const fileNames = await fs.readdir(galleryDir);

  return fileNames
    .filter((fileName) => /\.(jpg|jpeg|png|webp)$/i.test(fileName))
    .sort((a, b) =>
      a.localeCompare(b, "ko", {
        numeric: true,
        sensitivity: "base",
      })
    );
};

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <main className="min-h-screen bg-white text-[#222]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#f3f7fb]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold tracking-[0.18em] text-[#2f7d32]">
            EVENT GALLERY
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#123a63] sm:text-5xl">
            행사 갤러리
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#4b5563]">
            업로드된 행사 사진을 갤러리 형식으로 정리했습니다. 한 페이지에
            20장씩 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-[#2f7d32]">
                PHOTO ARCHIVE
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#123a63]">
                총 {images.length}장의 행사 사진
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#6b7280]">
              `public/images/gallery` 폴더의 이미지를 순서대로 보여주며, 페이지
              버튼으로 다음 사진 묶음을 확인할 수 있습니다.
            </p>
          </div>

          <GalleryPagination images={images} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
