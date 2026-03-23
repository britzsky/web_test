"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { headerData } from "@/app/components/Layout/Header/Navigation/menuData";

const galleryImages = [
  "/images/test2/1.avif",
  "/images/test2/2.avif",
  "/images/test2/3.avif",
  "/images/test2/4.avif",
  "/images/test2/5.avif",
  "/images/test2/6.avif",
  "/images/test2/7.avif",
];

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const testimonials = [
    {
      quote:
        "현장 운영이 체계적이고 소통이 빨라 만족도가 높습니다. 식단과 위생 관리가 안정적입니다.",
      name: "A요양원",
    },
    {
      quote:
        "맞춤 메뉴 제안이 현실적이고 반영 속도가 빠릅니다. 어르신 만족도가 확실히 올라갔어요.",
      name: "B요양원",
    },
    {
      quote:
        "운영 리포트가 꼼꼼해서 신뢰가 갑니다. 위탁급식 품질 관리에 큰 도움이 됩니다.",
      name: "C요양원",
    },
  ];
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [prevTestimonial, setPrevTestimonial] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeTestimonial = (nextIndex: number) => {
    if (nextIndex === activeTestimonial) {
      return;
    }
    setPrevTestimonial(activeTestimonial);
    setActiveTestimonial(nextIndex);
    setIsAnimating(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeTestimonial((activeTestimonial + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeTestimonial, testimonials.length]);

  useEffect(() => {
    if (!isAnimating) {
      return;
    }
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setPrevTestimonial(null);
    }, 600);
    return () => clearTimeout(timer);
  }, [isAnimating]);

  return (
    <main
      className="min-h-screen bg-[var(--deep)] text-[var(--deep)]"
      style={
        {
          "--sage": "#e6f0e6",
          "--deep": "#1f4d3a",
          "--accent": "#3f7f61",
        } as CSSProperties
      }
    >
      <div className="mx-auto min-h-screen w-full p-4 sm:p-6">
        <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-none border border-white/30 bg-white shadow-[0_20px_60px_rgba(17,69,50,0.3)]">
          <aside className="hidden w-20 flex-col py-10 sm:flex">
            <div className="fixed left-10 top-4 flex flex-col items-center gap-6">
              <button
                type="button"
                aria-label="Open menu"
                className="flex h-20 w-10 flex-col items-center justify-center gap-1"
                onClick={() => setMenuOpen(true)}
              >
                <span className="block h-0.5 w-6 bg-[var(--deep)]" />
                <span className="block h-0.5 w-6 bg-[var(--deep)]" />
                <span className="block h-0.5 w-6 bg-[var(--deep)]" />
              </button>
              <div className="flex flex-col gap-1">
                {[
                  { label: "Instagram", src: "/images/sns_logo/instagram.png" },
                  { label: "Facebook", src: "/images/sns_logo/facebook.png" },
                  { label: "YouTube", src: "/images/sns_logo/youtube.png" },
                  { label: "KakaoTalk", src: "/images/sns_logo/kakaotalk.png" },
                  { label: "LINE", src: "/images/sns_logo/line.png" },
                  { label: "TikTok", src: "/images/sns_logo/tictok.png" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className="flex h-8 w-8 items-center justify-center p-0"
                    aria-label={item.label}
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <section className="flex flex-1 flex-col px-6 pb-10 pt-6 sm:px-12">
            <div className="flex flex-col items-center text-center">
              <h1 className="mt-4 font-display text-5xl text-[var(--deep)] sm:text-6xl">
                더채움
              </h1>
              <p className="text-sm pt-3 uppercase tracking-[0.2em] text-[var(--accent)]">
                Contract Catering Services
              </p>
              {/*<p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                위탁급식 서비스
              </p> */}
            </div>

            <div className="relative mt-12 flex-1">
              <div className="relative mx-auto h-[520px] w-full max-w-5xl">
                {[
                  { x: 410, y: 0, w: 240, h: 180 },
                  { x: 190, y: 110, w: 250, h: 180 },
                  { x: 20, y: 220, w: 220, h: 170 },
                  { x: 260, y: 315, w: 230, h: 190 },
                  { x: 540, y: 180, w: 300, h: 230 },
                  { x: 320, y: 185, w: 240, h: 170 },
                  { x: 480, y: 355, w: 240, h: 200 },
                ].map((pos, index) => (
                  <Image
                    key={galleryImages[index]}
                    src={galleryImages[index]}
                    alt="Catering dish"
                    width={pos.w}
                    height={pos.h}
                    sizes="(min-width: 1024px) 520px, 80vw"
                    className="absolute object-cover shadow-[0_30px_60px_rgba(31,77,58,0.18)] opacity-0"
                    style={{
                      left: `${pos.x}px`,
                      top: `${pos.y}px`,
                      zIndex: index === 5 ? 20 : index + 1,
                      animation: `scatter-in 0s linear ${index * 0.2}s forwards`,
                    }}
                  />
                ))}
              </div>

              <div className="hidden sm:block">
                <div className="fixed right-20 top-20">
                  <Link
                    href="/contact"
                    className="flex h-36 w-36 items-center justify-center rounded-full border border-[var(--deep)] text-center text-sm tracking-[0.1em] text-[var(--deep)]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <section className="mt-46 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="mx-auto flex h-64 w-64 items-center justify-center bg-[var(--deep)] text-center text-3xl font-semibold text-white sm:h-72 sm:w-72">
                Cooking
                <br />
                Your
                <br />
                Desire
              </div>
              <div className="max-w-xl text-[var(--deep)]">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
                  About us
                </p>
                <h2 className="mt-4 font-display text-3xl text-[var(--deep)] sm:text-4xl">
                  더채움 위탁급식 서비스
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--deep)]/80">
                  더채움은 현장 맞춤 식단과 운영 프로세스로 위탁급식의 품질을
                  높입니다. <br></br>
                  위생, 영양, 운영 효율을 함께 설계해 안정적인 급식 운영을 지원합니다.
                </p>
                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--accent)]"
                >
                  Read more →
                </Link>
              </div>
            </section>

            <section className="mt-24 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
                What people say about us
              </p>
              <div className="mx-auto mt-4 h-px w-full max-w-2xl bg-[var(--accent)]/40" />
              <div className="relative mx-auto mt-8 max-w-2xl">
                {prevTestimonial !== null && (
                  <div className="testimonial-out text-sm leading-relaxed text-[var(--deep)]/80">
                    <p>“{testimonials[prevTestimonial].quote}”</p>
                    <p className="mt-4 text-sm font-semibold text-[var(--deep)]">
                      {testimonials[prevTestimonial].name}
                    </p>
                  </div>
                )}
                <div
                  className={`testimonial-in text-sm leading-relaxed text-[var(--deep)]/80 ${
                    isAnimating ? "is-animating" : ""
                  }`}
                >
                  <p>“{testimonials[activeTestimonial].quote}”</p>
                  <p className="mt-4 text-sm font-semibold text-[var(--deep)]">
                    {testimonials[activeTestimonial].name}
                  </p>
                </div>
              </div>
              <div className="mx-auto mt-10 flex items-center justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to testimonial ${index + 1}`}
                    onClick={() => changeTestimonial(index)}
                    className={`h-2 w-2 rounded-full ${
                      index === activeTestimonial
                        ? "bg-[var(--accent)]"
                        : "border border-[var(--accent)]"
                    }`}
                  />
                ))}
              </div>
              <div className="mx-auto mt-10 h-px w-full max-w-2xl bg-[var(--accent)]/40" />
            </section>

            <section className="mt-24 mx-auto grid w-full max-w-4xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-2xl font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  고객문의
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="이름 *"
                    className="border-b border-[var(--accent)]/40 bg-transparent py-2 text-sm text-[var(--deep)] placeholder:text-[var(--deep)]/60 focus:outline-none sm:col-span-2"
                  />
                  <input
                    type="email"
                    placeholder="이메일 주소 *"
                    className="border-b border-[var(--accent)]/40 bg-transparent py-2 text-sm text-[var(--deep)] placeholder:text-[var(--deep)]/60 focus:outline-none sm:col-span-2"
                  />
                  <textarea
                    placeholder="여기에 문의내용을 적어주세요."
                    className="min-h-[120px] border-b border-[var(--accent)]/40 bg-transparent py-2 text-sm text-[var(--deep)] placeholder:text-[var(--deep)]/60 focus:outline-none sm:col-span-2"
                  />
                </div>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex items-center gap-2 text-xs text-[var(--deep)]/80">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[#b7d7c2]"
                    />
                    <span className="mt-0.4">개인정보처리방침 동의</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm font-semibold text-[var(--accent)]"
                  >
                    문의하기
                  </button>
                </div>
              </div>
              <div className="relative min-h-[260px] overflow-hidden">
                <Image
                  src="/images/test2/submit.jpg"
                  alt="Submit"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            </section>

            <section className="mt-20 flex flex-wrap items-center justify-center gap-16 text-2xl font-semibold text-[var(--accent)]">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>YouTube</span>
              <span>KaKaoTalk</span>
              <span>Line</span>
              <span>TicTok</span>
            </section>
          </section>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scatter-in {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slide-out-left {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-30%);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .testimonial-out {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          animation: slide-out-left 0.6s ease-out forwards;
        }

        .testimonial-in {
          opacity: 1;
        }

        .testimonial-in.is-animating {
          animation: slide-in-right 0.6s ease-out forwards;
        }
      `}</style>

      {menuOpen && (
        <div className="fixed left-0 top-0 z-50 h-full w-72 bg-[#0f2f22] shadow-[20px_0_40px_rgba(15,47,34,0.3)]">
          <div className="flex items-center justify-between px-6 py-6 text-white">
            <span className="text-sm uppercase tracking-[0.35em]">The Full</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-[0.35em]"
            >
              닫기
            </button>
          </div>
          <nav className="px-6 py-10">
            <ul className="space-y-5 text-2xl text-white">
              {headerData.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </main>
  );
};

export default Page;
