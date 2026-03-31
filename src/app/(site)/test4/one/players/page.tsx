import fs from "node:fs/promises";
import path from "node:path";

import Image from "next/image";
import SiteFooter from "../_components/site-footer";
import SiteHeader from "../../../../../components/site-header";
import SquadGallery from "./squad-gallery";

const getSquadImages = async () => {
  const squadDir = path.join(process.cwd(), "public", "images", "squad");
  const fileNames = await fs.readdir(squadDir);

  return fileNames
    .filter((fileName) => /\.(jpg|jpeg|png|webp)$/i.test(fileName))
    .sort((a, b) =>
      a.localeCompare(b, "ko", {
        numeric: true,
        sensitivity: "base",
      })
    );
};

export default async function PlayersPage() {
  const squadImages = await getSquadImages();
  const [heroImage, ...galleryImages] = squadImages;

  return (
    <main className="min-h-screen bg-white text-[#222]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#f3f7fb]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#2f7d32]">
              PLAYER SQUAD
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#123a63] sm:text-5xl">
              선수단 소개
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4b5563]">
              선수단 활동 사진을 중심으로 현장의 분위기를 전하는 소개
              페이지입니다. `public/images/squad` 폴더의 이미지를 그대로
              반영합니다.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#dbe4ee] bg-white p-5 shadow-sm">
                <p className="text-sm text-[#6b7280]">등록 이미지</p>
                <p className="mt-3 text-3xl font-bold text-[#123a63]">
                  {squadImages.length}장
                </p>
              </div>
              <div className="rounded-2xl border border-[#dbe4ee] bg-white p-5 shadow-sm">
                <p className="text-sm text-[#6b7280]">콘텐츠 구성</p>
                <p className="mt-3 text-3xl font-bold text-[#123a63]">사진형</p>
              </div>
              <div className="rounded-2xl border border-[#dbe4ee] bg-white p-5 shadow-sm">
                <p className="text-sm text-[#6b7280]">업데이트 방식</p>
                <p className="mt-3 text-3xl font-bold text-[#123a63]">폴더 연동</p>
              </div>
            </div>
          </div>

          {heroImage && (
            <div className="overflow-hidden rounded-2xl border border-[#dbe4ee] bg-white p-4 shadow-lg">
              <div className="relative flex aspect-[4/3] items-center justify-center rounded-xl bg-[#f8fafc]">
                <Image
                  src={`/images/squad/${heroImage}`}
                  alt="선수단 대표 사진"
                  fill
                  priority
                  className="object-contain p-3"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-[#2f7d32]">
                SQUAD GALLERY
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#123a63]">
                선수단 사진 갤러리
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#6b7280]">
              `public/images/squad` 폴더에 이미지를 추가하면 이 화면에도 같은
              순서로 반영됩니다.
            </p>
          </div>

          <SquadGallery images={galleryImages} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
