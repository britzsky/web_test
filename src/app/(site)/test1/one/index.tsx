import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import ClientStories from "./ClientStories";

const IMAGE_EXTENSIONS = ["avif", "webp", "png", "jpg", "jpeg"];

const resolvePublicImage = (srcBase: string) => {
  const normalized = srcBase.startsWith("/") ? srcBase.slice(1) : srcBase;
  const publicDir = path.join(process.cwd(), "public");

  for (const ext of IMAGE_EXTENSIONS) {
    const filePath = path.join(publicDir, `${normalized}.${ext}`);
    if (fs.existsSync(filePath)) {
      return `/${normalized}.${ext}`;
    }
  }

  return `/${normalized}.png`;
};

const Page = () => {
  const mainImageSrc = resolvePublicImage("/images/test1/main1");
  const partner1Src = resolvePublicImage("/images/logo/friendship1");
  const partner2Src = resolvePublicImage("/images/logo/friendship2");
  const partner3Src = resolvePublicImage("/images/logo/friendship3");

  return (
    <main className="relative bg-[#F2EEEB] text-[#5a5a5a] dark:bg-[radial-gradient(circle_at_top_left,_#1b2433_0%,_#0f1622_48%,_#0b101a_100%)] dark:text-white">
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-none bg-white/60 blur-[100px] dark:bg-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-none bg-white/60 blur-[120px] dark:bg-[#2a3445]"
        />

        <section className="py-0 sm:py-0">
          <div className="container mx-auto lg:max-w-5xl md:max-w-5xl px-4 pt-28 sm:pt-32 pb-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)] items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-none lg:ml-15 lg:scale-130 lg:origin-left -ml-6 lg:-ml-12 lg:-translate-x-34">
                  <div className="relative">
                    <Image
                      src={mainImageSrc}
                      alt="The Full main visual"
                      width={680}
                      height={820}
                      priority
                      className="h-full w-full object-cover rounded-none slide-in-right"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-black/60 dark:text-white/60">
                  The Full Table
                </p>
                <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#464646] dark:text-white sm:text-6xl">
                  <span className="rise-text">더채움으로 완성되는</span>
                  <span className="block mt-2 text-3xl sm:text-4xl">
                    건강한 한 끼의 기준
                  </span>
                </h1>

                <ul className="mt-5 space-y-1 text-sm sm:text-base text-black/70 dark:text-white/70">
                  {[
                    "매일, 하루 종일 함께하는 더채움",
                    "개인의 필요에 맞춘 건강 효능-목표 중심의 구성",
                    "어떤 식단이든 맞춰 바꿀 수 있는 영양 밀도 높은 레시피료",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/30 text-[11px] text-black/70 dark:border-white/40 dark:text-white/80">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-none bg-[#1f1b18] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(29,25,20,0.2)] transition hover:bg-black"
                  >
                    상담 예약
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-none border border-black/30 px-7 py-3 text-sm font-semibold text-black/80 transition hover:border-black/60 hover:text-black dark:border-white/40 dark:text-white/80 dark:hover:border-white"
                  >
                    더채움 소개
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 py-0 dark:border-white/10 -mt-6">
          <div className="container mx-auto lg:max-w-5xl md:max-w-5xl px-4 -mt-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs uppercase tracking-[0.38em] text-black/50 dark:text-white/50">
                Trusted by partners
              </span>
              <div className="flex flex-wrap items-center gap-15 dark:bg-white dark:px-3 dark:py-2 dark:rounded-none">
                <Image
                  src={partner1Src}
                  alt="Friendship partner 1"
                  width={120}
                  height={40}
                  className="brightness-0"
                />
                <Image
                  src={partner2Src}
                  alt="Friendship partner 2"
                  width={120}
                  height={40}
                  className="brightness-0"
                />
                {/*
                <Image
                  src={partner3Src}
                  alt="Friendship partner 3"
                  width={120}
                  height={40}
                  className="invert brightness-0"
                />
                */}
              </div>
            </div>
          </div>
        </section>

        <section className="-mt-6 py-10 sm:py-12">
          <div className="relative w-full overflow-hidden">
            <video
              className="h-[420px] w-full object-cover sm:h-[620px] lg:h-[800px]"
              src="/images/test1/mainvideo1.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="pointer-events-none absolute inset-0 bg-black/50" />
            <div className="absolute left-10 top-16 max-w-xl text-white sm:left-60 sm:top-30">
              <p className="text-xs uppercase tracking-[0.45em] text-white/90">
                The Full Table
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-6xl rise-text">
                <span className="font-semibold text-[1.2em]">건강</span>을 담아
                <span className="block">
                  <span className="font-semibold text-[1.2em]">식탁</span>
                  을 <span className="font-semibold text-[1.2em]">완성</span>하는 시간
                </span>
              </h2>
              <p className="mt-4 text-sm text-white sm:text-xl">
                영양과 맛의 균형을 지키는 더채움의 조리 철학입니다.
              </p>
            </div>
          </div>
        </section>

        <ClientStories />


        <section className="bg-[#C09057] text-white">
          <div className="flex flex-col px-0 lg:flex-row lg:items-stretch">
            <div className="flex flex-col justify-center px-6 py-0 sm:px-12 lg:w-[45%] lg:px-20 lg:py-0 lg:overflow-hidden">
              <p className="text-xs uppercase tracking-[0.45em] text-white/80">
                서비스 문의
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
                위탁급식 상담을 <br></br> 빠르게 안내드립니다
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="회사명 / 담당자 *"
                  className="h-11 border-b border-white/60 bg-transparent text-sm text-white placeholder:text-white/70 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="이메일 주소 *"
                  className="h-11 border-b border-white/60 bg-transparent text-sm text-white placeholder:text-white/70 focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="mt-6 inline-flex items-center justify-center rounded-none bg-white px-6 py-3 text-sm font-semibold text-[#7c4f22]"
              >
                상담 신청
              </button>
            </div>
            <div className="w-full lg:w-[55%]">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/test1/con.jpg"
                  alt="Fresh salad"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F2EEEB] py-16 sm:py-20">
          <div className="container mx-auto lg:max-w-5xl md:max-w-5xl px-4">
            <h2 className="font-display text-4xl text-[#2b2b2b] sm:text-5xl">
              
              <span className="font-semibold tracking-tight text-black/80">
                Your Health & Wellness
              </span>
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                {
                  image: "/images/test1/new/1.jpg",
                  title: "맞춤 식단 설계",
                  body: "시설 특성과 인원 구성에 맞춘 식단을 제공합니다.",
                },
                {
                  image: "/images/test1/new/2.jpg",
                  title: "위생/안전 관리",
                  body: "HACCP 기반 위생 프로세스와 정기 점검을 진행합니다.",
                },
                {
                  image: "/images/test1/new/3.jpg",
                  title: "운영 지원",
                  body: "효율적인 운영과 비용 최적화를 돕습니다.",
                },
              ].map((item) => (
                <article key={item.title}>
                  <div className="relative aspect-square w-full bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#2b2b2b]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-black/70">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#BBCFD4] py-16 sm:py-20">
          <div className="container mx-auto lg:max-w-5xl md:max-w-5xl px-4">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-display text-4xl text-[#2b2b2b] sm:text-5xl">
                Recipes
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-none bg-black px-6 py-3 text-sm font-semibold text-white"
              >
                메뉴 상담 받기
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  image: "/images/test1/new/4.jpg",
                  title: "프리미엄 건강식 세트",
                },
                {
                  image: "/images/test1/new/5.jpg",
                  title: "시즌 스페셜",
                },
                {
                  image: "/images/test1/new/2.jpg",
                  title: "일상 균형 플레이트",
                },
                {
                  image: "/images/test1/new/3.jpg",
                  title: "신선한 마켓 메뉴",
                },
              ].map((item) => (
                <article key={item.title}>
                  <div className="relative h-60 w-full bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#2b2b2b]">
                    {item.title}
                  </h3>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-none bg-black py-3 text-center font-semibold text-x uppercase tracking-[0.35em] text-white/80">
              위탁급식 운영 문의 및 상담 가능합니다
            </div>
          </div>
        </section>

        <section className="bg-[#F2EEEB] py-16 sm:py-20">
          <div className="container mx-auto lg:max-w-5xl md:max-w-5xl px-4">
            <div className="relative overflow-hidden rounded-none">
              <div className="relative min-h-[420px]">
                <Image
                  src="/images/test1/main12.jpg"
                  alt="Healthy taste"
                  fill
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />
              </div>
              <div className="absolute inset-0 grid place-items-center px-6">
                <div className="max-w-xl text-center text-white">
                  <h2 className="font-display text-white text-4xl sm:text-5xl">
                    위탁급식의 품질을
                    <span className="font-semibold tracking-tight text-white/90">
                      한 단계 더
                    </span>
                  </h2>
                  <p className="mt-4 text-sm text-white/85 sm:text-base">
                    품질, 위생, 운영 모든 과정을 체계적으로 개선합니다.
                  </p>
                  <Link
                    href="/about"
                    className="mt-6 inline-flex items-center justify-center rounded-none bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur"
                  >
                    더 알아보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
