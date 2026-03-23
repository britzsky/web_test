"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const items = [
  {
    image: "/images/test1/clientstroies/11.webp",
    quote: "입소자 건강 상태에 맞춘 식단으로 만족도가 확실히 높아졌습니다.",
    name: "요양원 A",
  },
  {
    image: "/images/test1/clientstroies/12.webp",
    quote: "식단 상담과 피드백 반영이 빨라 운영 부담이 줄었습니다.",
    name: "요양원 B",
  },
  {
    image: "/images/test1/clientstroies/13.webp",
    quote: "위생 관리 기준이 명확해 신뢰가 생겼습니다.",
    name: "요양원 C",
  },
  {
    image: "/images/test1/clientstroies/14.webp",
    quote: "학생 반응을 고려한 메뉴 구성 덕분에 잔반이 감소했습니다.",
    name: "학교 A",
  },
  {
    image: "/images/test1/clientstroies/15.jpg",
    quote: "영양 균형을 맞춘 급식으로 만족도가 높습니다.",
    name: "학교 B",
  },
  {
    image: "/images/test1/clientstroies/16.jpg",
    quote: "식자재 관리가 체계적이라 안심하고 맡길 수 있습니다.",
    name: "학교 C",
  },
  {
    image: "/images/test1/clientstroies/17.jpg",
    quote: "현장 요청 반영이 빠르고 커뮤니케이션이 매끄럽습니다.",
    name: "산업체 A",
  },
  {
    image: "/images/test1/clientstroies/18.jpg",
    quote: "근무자 만족도가 올라 운영 효율이 좋아졌습니다.",
    name: "산업체 B",
  },
  {
    image: "/images/test1/clientstroies/19.jpg",
    quote: "대량 운영에서도 품질이 안정적으로 유지됩니다.",
    name: "산업체 C",
  },
];

const ClientStories = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const pendingShift = useRef(0);
  const [snapReady, setSnapReady] = useState(false);
  const [itemStep, setItemStep] = useState(0);
  const [slides, setSlides] = useState([...items, ...items, ...items]);

  const getStep = () => {
    if (itemStep) {
      return itemStep;
    }
    const width = itemRef.current?.getBoundingClientRect().width ?? 0;
    const gap = 40;
    return width ? Math.round(width) + gap : 0;
  };

  const scrollByStep = (direction: -1 | 1) => {
    const list = listRef.current;
    const step = getStep();
    if (!list || step === 0) {
      return;
    }
    list.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  useLayoutEffect(() => {
    const node = itemRef.current;
    if (!node) {
      return;
    }
    const update = () => {
      const width = node.getBoundingClientRect().width;
      if (width) {
        setItemStep(Math.round(width) + 40);
      }
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [slides.length]);

  useLayoutEffect(() => {
    const list = listRef.current;
    const step = getStep();
    if (!list || step === 0) {
      return;
    }
    const targetLeft = step * items.length;
    list.scrollLeft = targetLeft;
    requestAnimationFrame(() => {
      list.scrollLeft = targetLeft;
    });
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setSnapReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handlePrev = () => {
    const list = listRef.current;
    const step = getStep();
    if (!list || step === 0) {
      return;
    }
    if (list.scrollLeft < step * 2) {
      pendingShift.current = step * items.length;
      setSlides((prev) => [...items, ...prev]);
      return;
    }
    scrollByStep(-1);
  };

  const handleNext = () => {
    const list = listRef.current;
    const step = getStep();
    if (!list || step === 0) {
      return;
    }
    const remaining = list.scrollWidth - list.clientWidth - list.scrollLeft;
    if (remaining < step * 2) {
      setSlides((prev) => [...prev, ...items]);
      scrollByStep(1);
      return;
    }
    scrollByStep(1);
  };

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list || pendingShift.current === 0) {
      return;
    }
    list.scrollLeft += pendingShift.current;
    pendingShift.current = 0;
    scrollByStep(-1);
  }, [slides.length]);

  return (
    <section className="bg-[#F2EEEB] py-16 sm:py-20">
      <div className="container mx-auto lg:max-w-6xl md:max-w-4xl px-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-4xl text-[#2b2b2b] sm:text-5xl">
            Client Stories
          </h2>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous"
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-none border border-black/20 text-black/70"
            >
              <span aria-hidden="true">&#8249;</span>
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-none border border-black/20 text-black/70"
            >
              <span aria-hidden="true">&#8250;</span>
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div
            className="overflow-visible"
            style={{ marginRight: "calc(50% - 50vw)" }}
          >
            <div
              ref={listRef}
              className={`client-stories-row flex gap-10 overflow-x-auto ${
                snapReady ? "scroll-smooth snap-x snap-mandatory" : ""
              }`}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollBehavior: snapReady ? "smooth" : "auto",
              }}
            >
              {slides.map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  ref={index === 0 ? itemRef : undefined}
                  className="snap-start shrink-0 w-[250px] sm:w-[280px] lg:w-[320px] bg-white flex flex-col"
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex h-full flex-col p-4">
                    <p className="text-[15px] leading-relaxed text-[#2b2b2b]">
                      {item.quote}
                    </p>
                    <p className="mt-auto pt-3 text-xs uppercase tracking-[0.3em] text-black/50">
                      {item.name}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .client-stories-row::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ClientStories;
