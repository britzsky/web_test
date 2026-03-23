"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "기관소개", href: "/about" },
  { label: "사업안내", href: "/program" },
  { label: "공지사항", href: "/notice" },
  { label: "오시는길", href: "/location" },
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
    title: "기관 소개",
    desc: "이용자 중심의 돌봄과 맞춤형 서비스를 제공하는 기관입니다.",
    image: "/images/test4/t1.jpg",
    href: "/about",
  },
  {
    title: "주요 사업 안내",
    desc: "일상지원, 급식운영, 생활관리 등 체계적인 운영 서비스를 안내합니다.",
    image: "/images/test4/t2.jpg",
    href: "/program",
  },
  {
    title: "공지 및 소식",
    desc: "기관의 최신 공지사항과 운영 소식을 빠르게 확인하실 수 있습니다.",
    image: "/images/test4/t3.jpg",
    href: "/notice",
  },
];

const Page = () => {
  const [boardPosts, setBoardPosts] = useState<BoardItem[]>([]);
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

  useEffect(() => {
    let isMounted = true;

    const loadBoard = async () => {
      try {
        const res = await fetch("/api/naver-blog?blogId=far_rain", {
          cache: "no-store",
        });
        if (!res.ok) return;
        const data = await res.json();
        if (!isMounted || !data?.items) return;
        setBoardPosts(data.items);
      } catch {
        // ignore
      }
    };

    loadBoard();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#222]">
      <header className="border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/thefull_logo.svg"
              alt="로고"
              width={150}
              height={48}
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-[#123a63]">송화</p>
              <p className="text-xs text-[#6b7280]">함께하는 따뜻한 공간</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#123a63] md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-[#2f7d32]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#f3f7fb]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#2f7d32]">
              SONGHWA WELFARE CENTER
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#123a63] sm:text-5xl">
              함께 돌보고,
              <br />
              따뜻하게 이어가는 일상
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4b5563]">
              이용자와 가족이 안심할 수 있도록 일상 돌봄, 급식, 생활 지원,
              맞춤형 프로그램을 체계적으로 운영합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md bg-[#123a63] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                기관 소개
              </Link>
              <Link
                href="/program"
                className="inline-flex items-center justify-center rounded-md border border-[#123a63] bg-white px-6 py-3 text-sm font-semibold text-[#123a63] transition hover:bg-[#f8fafc]"
              >
                사업 안내
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/hero/1%20(2).jpg"
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
                OUR SERVICE
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
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
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
              <h3 className="text-2xl font-bold text-[#123a63]">기관 소개</h3>
              <Link
                href="/about"
                className="text-sm font-semibold text-[#2f7d32]"
              >
                더보기
              </Link>
            </div>
            <p className="mt-5 text-sm leading-7 text-[#4b5563]">
              송화는 이용자의 생활 안정과 편의를 위해 다양한 복지 서비스를
              운영하며, 안전하고 따뜻한 환경 속에서 신뢰받는 기관이 되기 위해
              노력하고 있습니다.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#4b5563]">
              현장 중심의 운영, 체계적인 관리, 이용자 맞춤 서비스를 바탕으로
              일상 속 만족도를 높이는 것을 목표로 합니다.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#123a63]">공지사항</h3>
              <Link
                href="/notice"
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
              기관 이용 및 서비스 관련 문의를 남겨주시면 확인 후 안내드리겠습니다.
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

      <footer className="bg-[#0f172a] py-8 text-white/70">
        <div className="mx-auto max-w-6xl px-6 text-sm leading-7">
          <p className="font-semibold text-white">송화</p>
          <p>주소 및 연락처 정보를 이 영역에 배치하세요.</p>
          <p>Copyright © Songhwa. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Page;