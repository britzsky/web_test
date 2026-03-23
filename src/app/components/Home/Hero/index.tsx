"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const heroImages = ["1%20(1).jpg", "1%20(2).jpg", "1%20(3).jpg"];

  const slideCopy = [
    {
      eyebrow: "Everyday Joy on the Table",
      title: "일상에 더하는 즐거움,",
      highlight: "정성 가득한 밥상",
      description:
        "신선한 재료와 정성으로 매일의 식탁에 즐거움을 더합니다.",
    },
    {
      eyebrow: "Your Global Foodservice Partner",
      title: "글로벌 시장을 선도하는",
      highlight: "믿음의 푸드서비스,",
      description: "글로벌 기준의 품질과 서비스로 식문화를 이끕니다.",
    },
    {
      eyebrow: "Delivering Delight",
      title: "고객만족을 위해",
      highlight: "고객감동으로 보답",
      description: "고객의 기대를 넘어서는 책임을 다하겠습니다.",
    },
  ];

  const slides = heroImages.map((file, index) => ({
    ...slideCopy[index % slideCopy.length],
    image: `/images/hero/${file}`,
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const durationMs = 7000;
  const tickMs = 100;
  const progressStep = (100 * tickMs) / durationMs;

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + progressStep >= 100) {
          setActiveIndex((current) => (current + 1) % slides.length);
          return 0;
        }
        return prev + progressStep;
      });
    }, tickMs);
    return () => clearInterval(timer);
  }, [isPaused, progressStep, slides.length]);

  const changeSlide = (direction: number) => {
    setActiveIndex((current) => {
      const next = (current + direction + slides.length) % slides.length;
      return next;
    });
    setProgress(0);
  };

  const activeSlide = slides[activeIndex];
  const currentIndexLabel = String(activeIndex + 1).padStart(2, "0");
  const totalLabel = String(slides.length).padStart(2, "0");

  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${activeSlide.image})` }}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={activeSlide.image}
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" />
      <div className="relative z-10">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
          <div className="flex min-h-[70vh] lg:min-h-[85vh] items-center">
            <div className="max-w-3xl text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ x: -32, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 16, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <p className="text-sm md:text-base tracking-[0.35em] uppercase text-white/70">
                    {activeSlide.eyebrow}
                  </p>
                  <h1 className="mt-4 font-semibold leading-tight text-white">
                    <span className="block text-2xl mb-3 sm:text-3xl md:text-4xl">
                      {activeSlide.title}
                    </span>
                    <span className="block text-3xl sm:text-4xl md:text-5xl">
                      {activeSlide.highlight}
                    </span>
                  </h1>
                  <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl">
                    {activeSlide.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/about"
                      className="rounded-full bg-white text-black px-6 py-3 text-base font-semibold hover:bg-white/90 duration-300"
                    >
                      회사소개
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-full border border-white/70 text-white px-6 py-3 text-base font-semibold hover:bg-white/15 duration-300"
                    >
                      고객문의
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="mt-12 flex items-center gap-4 text-white/70">
                <span className="text-sm">{currentIndexLabel}</span>
                <div className="h-px w-24 bg-white/30 relative overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-white transition-[width] duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-sm">{totalLabel}</span>
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() => changeSlide(-1)}
                  className="ml-2 text-white/80 hover:text-white duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 18l-6-6l6-6"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
                  onClick={() => setIsPaused((prev) => !prev)}
                  className="text-white/80 hover:text-white duration-200"
                >
                  {isPaused ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5v14l11-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5v14m8-14v14"
                      />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() => changeSlide(1)}
                  className="text-white/80 hover:text-white duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 18l6-6l-6-6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


