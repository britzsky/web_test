"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SiteFooter from "./_components/site-footer";

const menuItems = [
  {
    label: "조합소개",
    href: "/about",
    children: [
      { label: "이사장인사말", href: "/test4/one/greeting" },
      { label: "연혁", href: "/about/history" },
      { label: "임원소개", href: "/about/executives" },
    ],
  },
  {
    label: "행사마당",
    href: "/event",
    children: [
      { label: "알림마당", href: "/event/notice" },
      { label: "행사 갤러리", href: "/event/gallery" },
    ],
  },
  {
    label: "지원금 지급실적",
    href: "/support-result",
  },
  {
    label: "구단소개",
    href: "/team",
    children: [
      { label: "연혁", href: "/team/history" },
      { label: "연간기부금 실적", href: "/team/donation-result" },
    ],
  },
  {
    label: "오시는길",
    href: "/location",
  },
  {
    label: "선수단 소개",
    href: "/test4/one/players",
  },
];

type BoardItem = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  imageUrl?: string;
};

const serviceItems = [
  {
    title: "조합 소개",
    desc: "남양주시축구단사회적협동조합의 비전과 운영 방향을 소개합니다.",
    image: "/images/logo/logo_jahwal.png",
    href: "/about",
  },
  {
    title: "행사 및 알림",
    desc: "조합의 소식과 주요 행사, 갤러리를 확인하실 수 있습니다.",
    image: "/images/test4/t2.jpg",
    href: "/event",
  },
  {
    title: "구단 및 선수단",
    desc: "구단 연혁과 선수단 소개, 주요 실적 정보를 안내합니다.",
    image: "/images/logo/namyang.svg",
    href: "/team",
  },
];

type PageProps = {
  initialBoardPosts?: BoardItem[];
};

const Page = ({ initialBoardPosts = [] }: PageProps) => {
  const [boardPosts] = useState<BoardItem[]>(initialBoardPosts);
  const [activeSlide, setActiveSlide] = useState(0);

  const formatKoreanDate = (value?: string) => {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return `${y}.${String(m).padStart(2, "0")}.${String(d).padStart(2, "0")}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#222]">
      <header className="relative z-50 border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-1 py-4">
          <Link href="/" className="flex items-center gap-3">
            {/* <Image
              src="/images/logo/logo_jahwal.png"
              alt="로고"
              width={200}
              height={80}
              className="h-17 w-auto"
            />
            <Image
              src="/images/logo/namyang.svg"
              alt="로고"
              width={200}
              height={80}
              className="h-18 w-auto"
            /> */}
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-[#123a63]">
                남양주시축구단 사회적 협동조합
              </p>
              <p className="text-xs text-[#6b7280]">함께 성장하는 지역 축구 공동체</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-md font-semibold text-[#123a63] md:flex">
            {menuItems.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex h-10 items-center transition hover:text-[#2f7d32]"
                >
                  {item.label}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 translate-y-2 rounded-md border border-[#e5e7eb] bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm font-medium text-[#123a63] transition hover:bg-[#f8fafc] hover:text-[#2f7d32]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#f3f7fb]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#2f7d32]">
              NAMYANGJU FOOTBALL SOCIAL COOPERATIVE
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#123a63] sm:text-5xl">
              지역과 함께 뛰는
              <br />
              축구 공동체
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4b5563]">
              남양주시축구단사회적협동조합은 지역사회와 함께 성장하며,
              건강한 스포츠 문화와 나눔의 가치를 실천합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md bg-[#123a63] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                조합소개
              </Link>
              <Link
                href="/test4/one/players"
                className="inline-flex items-center justify-center rounded-md border border-[#123a63] bg-white px-6 py-3 text-sm font-semibold text-[#123a63] transition hover:bg-[#f8fafc]"
              >
                선수단 소개
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/info/namyang_cov.png"
                alt="메인 비주얼"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-[#2f7d32]">
                MAIN MENU
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#123a63]">
                주요 안내
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {serviceItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 200px) 100vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#123a63]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4b5563]">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#123a63]">조합 소개</h3>
              <Link
                href="/about"
                className="text-sm font-semibold text-[#2f7d32]"
              >
                더보기
              </Link>
            </div>
            <p className="mt-5 text-sm leading-7 text-[#4b5563]">
              남양주시축구단사회적협동조합은 지역 축구 발전과 건강한 스포츠
              문화 확산을 위해 다양한 활동을 이어가고 있습니다.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#4b5563]">
              조합원과 지역사회가 함께 참여하는 구조를 통해 지속가능한 축구
              공동체를 만들어가고 있습니다.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#123a63]">알림마당</h3>
              <Link
                href="/event/notice"
                className="text-sm font-semibold text-[#2f7d32]"
              >
                전체보기
              </Link>
            </div>

            <div className="mt-5 space-y-4">
              {(boardPosts.length > 0 ? boardPosts.slice(0, 4) : []).map((post) => (
                <a
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block border-b border-[#eef2f7] pb-4 last:border-b-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="line-clamp-1 text-sm font-semibold text-[#1f2937]">
                      {post.title}
                    </p>
                    <span className="shrink-0 text-xs text-[#6b7280]">
                      {formatKoreanDate(post.pubDate)}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-[#6b7280]">
                    {post.description}
                  </p>
                </a>
              ))}

              {boardPosts.length === 0 && (
                <p className="text-sm text-[#6b7280]">
                  등록된 소식이 없습니다.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#123a63] py-14 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8">
            <p className="text-sm font-semibold tracking-[0.18em] text-white/70">
              CONTACT
            </p>
            <h3 className="mt-2 text-3xl font-bold">문의하기</h3>
            <p className="mt-3 text-sm text-white/80">
              조합 관련 문의를 남겨주시면 확인 후 안내드리겠습니다.
            </p>
          </div>

          <form className="grid gap-5 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="성명"
                className="rounded-md border border-white/30 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none"
              />
              <input
                type="tel"
                placeholder="연락처"
                className="rounded-md border border-white/30 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="이메일"
              className="rounded-md border border-white/30 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none"
            />

            <textarea
              placeholder="문의 내용을 입력해주세요."
              className="min-h-[160px] rounded-md border border-white/30 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none"
            />

            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-md bg-[#2f7d32] px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                문의 접수
              </button>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default Page;
