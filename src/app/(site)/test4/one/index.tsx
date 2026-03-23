"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "test1", href: "/test1/one" },
  { label: "test2", href: "/test2/one" },
  { label: "test3", href: "/test3/one" },
  { label: "test4", href: "/test4/one" },
];

const heroImages = ["1%20(1).jpg"];

const mealPosts = [
  {
    title: "오늘의 식단 안내",
    subtitle: "균형 잡힌 한 끼를 준비했습니다.",
    body:
      "신선한 식재료로 만든 메인 메뉴와 계절 반찬을 함께 제공합니다. 알레르기 및 선호 식단은 현장 요청에 맞춰 조정합니다.",
    image: "/images/test4/t1.jpg",
  },
  {
    title: "단체급식 운영 팁",
    subtitle: "배식 동선과 온도 관리가 핵심입니다.",
    body:
      "피크 타임에는 배식 라인을 분리하고, 보온/보냉 기준을 지키는 것이 만족도를 높입니다. 더채움은 현장 흐름에 맞춘 운영안을 제안합니다.",
    image: "/images/test4/t2.jpg",
  },
  {
    title: "주간 메뉴 미리보기",
    subtitle: "현장 피드백을 반영해 업데이트합니다.",
    body:
      "주간 메뉴는 반복률을 낮추고, 영양 균형과 만족도를 함께 고려합니다. 요청 주시는 식단 방향은 다음 주 편성에 빠르게 반영합니다.",
    image: "/images/test4/t3.jpg",
  },
];

type NaverBlogItem = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  imageUrl?: string;
};

const Page = () => {
  const [activePost, setActivePost] = useState<number | null>(null);
  const [blogPosts, setBlogPosts] = useState<NaverBlogItem[]>([]);

  const formatKoreanDate = (value?: string) => {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const w = weekdays[date.getDay()];
    return `${y}년 ${String(m).padStart(2, "0")}월 ${String(d).padStart(
      2,
      "0"
    )}일 (${w})`;
  };

  useEffect(() => {
    if (activePost === null) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePost]);

  const currentPost = activePost === null ? null : mealPosts[activePost];
  const goPrev = () => {
    if (activePost === null) return;
    setActivePost((activePost - 1 + mealPosts.length) % mealPosts.length);
  };
  const goNext = () => {
    if (activePost === null) return;
    setActivePost((activePost + 1) % mealPosts.length);
  };

  useEffect(() => {
    let isMounted = true;
    const loadBlog = async () => {
      try {
        const res = await fetch("/api/naver-blog?blogId=far_rain", {
          cache: "no-store",
        });
        if (!res.ok) return;
        const data = await res.json();
        if (!isMounted || !data?.items) return;
        setBlogPosts(data.items);
      } catch {
        // Keep the section empty on error.
      }
    };
    loadBlog();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#FBB04C] text-[#2d2a26]">
      <header className="bg-[#F8EEE1]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/logo/thefull_logo.svg"
                alt="The Full logo"
                width={120}
                height={44}
                className="h-9 w-auto"
              />
            </Link>
          </div>
          <nav className="flex items-center gap-6 text-sm font-semibold">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`uppercase ${
                  item.label === "test4"
                    ? "text-[#e3503f]"
                    : "text-[#2d2a26] hover:text-[#e3503f]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <span className="rounded-full border border-[#2d2a26]/20 px-3 py-1">
              Login
            </span>
          </div>
        </div>
      </header>

      <section id="hero" className="relative">
        <div className="pointer-events-none absolute left-1/2 top-10 z-10 -translate-x-1/2 rotate-2 text-center text-[80px] font-black leading-none text-[#2d2a26]">
          THE
          <br />
          FULL.
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative">
            <div className="grid gap-4">
              {heroImages.map((file, index) => (
                <div
                  key={file}
                  className="relative left-3 w-full max-w-[600px] overflow-hidden rounded-[28px] aspect-[4/3]"
                >
                  <Image
                    src={`/images/hero/${file}`}
                    alt={`Hero image ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 600px, 92vw"
                    className="object-contain rotate-90"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-30 left-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2d2a26]/70">
              Contract Catering Services
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#2d2a26]">
              위탁급식 전문 운영으로 현장 맞춤형 식사를 제공합니다.
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-[#2d2a26]">
            하루 세끼의 품질을 꾸준히 관리합니다.
            </p>
            <div className="relative z-10 -mb-20 mt-2 w-full max-w-[380px]">
              <Image
                src="/images/hero/1%20(2).jpg"
                alt="Meal service"
                width={380}
                height={400}
                className="relative z-0 h-auto w-full object-cover"
              />
              <div className="absolute right-[-34px] top-12 z-1">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 120 120"
                  className="h-18 w-18 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M60 8 L69 41 L96 18 L71 49 L112 57 L73 65 L106 92 L64 74 L58 112 L51 74 L16 102 L44 70 L8 60 L42 54 L14 24 L50 40 Z" />
                  <path d="M58 16 L66 46 L86 30 L68 53 L98 62 L71 67 L92 86 L63 73 L59 98 L54 74 L30 90 L48 69 L22 61 L44 55 L26 34 L50 43 Z" />
                  <path d="M62 20 L70 48 L90 34 L72 56 L102 63 L74 69 L96 90 L66 76 L61 102 L55 76 L34 94 L50 70 L24 62 L46 56 L30 36 L54 46 Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto -mt-26 max-w-6xl px-6 pb-14">
          <div className="text-center text-[72px] font-black tracking-tight text-[#2d2a26] sm:text-[96px]">
            SHOW NOW
          </div>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-[#2d2a26]/80">
            <button
              type="button"
              onClick={() => setActivePost(0)}
              className="inline-flex items-center gap-3 border-b border-[#2d2a26] pb-1 font-semibold text-[#2d2a26] transition-colors hover:border-[#e3503f] hover:text-[#e3503f]"
            >
              <span>오늘의 식단 보기</span>
              <span className="text-2xl leading-none">-&gt;</span>
            </button>
          </div>
        </div>
      </section>
      
      <div className="w-full bg-[#2b2b2b] text-white/90 font-semibold text-[11px] sm:text-[11px] tracking-[0.1em] text-center py-1">
        바로 지금, 놀라운 일이 찾아옵니다.
      </div>


      <section className="bg-[#7f89bf] text-white">
        <div className="bg-[#7f89bf] text-white">
          <div className="mx-auto max-w-6xl px-6 pb-20  pt-0 text-center">
            <h2 className="mt-2 text-5xl sm:text-6xl font-black leading-tight text-[#2b2b2b]">
              OK
              <br />
              WHO?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/80">
              더채움은 위탁급식 운영 전문 파트너입니다.
              <br />
              현장에 맞춘 식단과 동선, 운영 인력까지 한 번에 설계합니다.
              <br />
              위생·품질·물류까지 표준화하여 서비스 결과를 만듭니다.
            </p>
          </div>
        </div>

        <div className="bg-[#f6eee2]">
          <div className="mx-auto grid max-w-6xl gap-8 px-40 -pt-30 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative -mt-10 z-10">
              <div className="overflow-hidden bg-white max-w-[360px]">
                <Image
                  src="/images/test4/f2.png"
                  alt="위탁급식 운영 소개"
                  width={420}
                  height={420}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 pt-4 text-[#2d2a26] lg:pl-6">
              <p className="relative -top-0 text-left text-xs leading-relaxed whitespace-nowrap text-[#57302F]">
                사업장 규모와 운영 패턴에 맞춰 맞춤 메뉴를 제안합니다.
                <br />
                식재료 수급•검수•보관•물류까지 프로세스를 표준화해 품질을 안정합니다.
                <br />
                운영 데이터는 투명하게 공유하고, <br/> 피드백을 반영해 더 나은 경험으로 연결합니다.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="relative -top-0 overflow-hidden rounded-[20px] bg-white">
                  <Image
                    src="/images/test4/f1.png"
                    alt="식재료 운영"
                    width={260}
                    height={220}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
              <div className="relative -top-0 text-left text-xs leading-relaxed whitespace-nowrap text-[#57302F]">
                <p>
                  정말 핵심만 말씀드리면,
                  <br/> 더채움은 현장에 맞는 위탁급식 운영을 함께 만드는 가까운 파트너입니다.
                </p>
                <p className="mt-2">
                  맛·위생·안정적인 운영을 기본으로, 문제가 생기면 빠르게 대응해 불편을 줄이겠습니다.
                </p>
                <p className="mt-3">감사합니다.</p>
                <p className="mt-1 font-semibold">더채움 드림</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-0 bg-[#f6eee2]" />

        

      </section>
      <div className="-mt-48 h-48 bg-[#f6eee2]" />
      <div className="w-full bg-[#FBAF4B] text-black/80 font-semibold text-[11px] sm:text-[11px] tracking-[0.1em] text-center py-1">
        지금 어디쯤인지 몰라도, 그래도 분명 여기까지 왔어요.
      </div>
      <section className="bg-[#f6eee2] py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 flex items-center justify-between text-[#2b2b2b]">
            <h3 className="text-5xl text-black/60 tracking-tight">Blog</h3>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2b2b2b]/60">
              더채움 소식
            </span>
          </div>
          <div className="grid gap-6">
            {(blogPosts.length > 0 ? blogPosts.slice(0, 2) : []).map((post, idx) => (
              <article
                key={post.link || post.title || String(idx)}
                className="grid overflow-hidden border border-[#2b2b2b]/10 bg-white lg:grid-cols-[1.1fr_1fr]"
              >
                <div className="relative min-h-[220px] bg-[#ddd]">
                  <Image
                    src={
                      post.imageUrl ||
                      (idx % 2 === 0
                        ? "/images/test4/t1.jpg"
                        : "/images/test4/t2.jpg")
                    }
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 720px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center gap-3 p-6 text-[#2b2b2b] lg:p-10">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[#2b2b2b]/50">
                    <span>Naver Blog</span>
                    <span className="normal-case tracking-normal text-[#2b2b2b]/60">
                      {formatKoreanDate(post.pubDate)}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black leading-snug">{post.title}</h4>
                  <p className="line-clamp-3 text-sm leading-relaxed text-[#2b2b2b]/80">
                    {post.description}
                  </p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 text-sm font-semibold text-[#e3503f]"
                  >
                    자세히 보기 ->
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#7F89BF] py-0">
        <div className="mx-auto max-w-3xl px-6">
          <h3 className="text-3xl font-black tracking-tight text-white">
            문의하기
          </h3>
          <form className="mt-8 space-y-5 text-sm text-white">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold tracking-[0.12em] text-white/80">
                  성명
                </span>
                <input
                  className="mt-3 w-full rounded-[12px] border border-white/80 bg-white/5 px-3 py-2 text-white placeholder:text-white/70 outline-none"
                  placeholder="성명을 입력해주세요."
                  type="text"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold tracking-[0.12em] text-white/80">
                  휴대전화
                </span>
                <input
                  className="mt-3 w-full rounded-[12px] border border-white/80 bg-white/5 px-3 py-2 text-white placeholder:text-white/70 outline-none"
                  placeholder="010-0000-0000"
                  type="tel"
                />
              </label>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold tracking-[0.12em] text-white/80">
                  Email
                </span>
                <input
                  className="mt-3 w-full rounded-[12px] border border-white/80 bg-white/5 px-3 py-2 text-white placeholder:text-white/70 outline-none"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>
              <div />
            </div>
            <label className="block">
              <span className="text-xs font-semibold tracking-[0.12em] text-white/80">
                문의내용
              </span>
              <textarea
                className="mt-3 min-h-[140px] w-full rounded-[12px] border border-white/80 bg-white/5 p-3 text-white placeholder:text-white/70 outline-none"
                placeholder="문의내용을 입력해주세요."
              />
            </label>
            <div className="flex justify-end">
              <button
                className="min-w-[180px] bg-[#1f1f1f] px-8 py-3 text-sm font-semibold text-white"
                type="button"
              >
                OK
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="h-0 bg-[#f6eee2]" />
      {currentPost && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-6">
          <div className="relative w-full max-w-5xl bg-[#f6eee2] text-[#2b2b2b] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <button
              type="button"
              onClick={() => setActivePost(null)}
              className="absolute right-4 top-4 z-10 h-10 w-10 border border-[#2b2b2b] bg-white text-xl font-black leading-none"
              aria-label="닫기"
            >
              ×
            </button>
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[360px] bg-[#e9dfd0]">
                <Image
                  src={currentPost.image}
                  alt={currentPost.title}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-5 p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2b2b2b]/60">
                  Today Menu
                </p>
                <h4 className="text-3xl font-black leading-tight text-[#2b2b2b]">
                  {currentPost.title}
                </h4>
                <p className="text-sm font-semibold text-[#2b2b2b]/80">
                  {currentPost.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-[#2b2b2b]/80">
                  {currentPost.body}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs font-semibold tracking-[0.18em] text-[#2b2b2b]/50">
                    {activePost + 1} / {mealPosts.length}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="h-11 w-11 border border-[#2b2b2b] bg-white text-xl font-black"
                      aria-label="이전"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="h-11 w-11 border border-[#2b2b2b] bg-[#1f1f1f] text-xl font-black text-white"
                      aria-label="다음"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
      


export default Page;

