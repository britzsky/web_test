"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

const BusinessArea = () => {
    const areas = [
    {
      key: "meal",
      label: "위탁급식",
      title: "위탁급식이란?",
      description:
        "현장 맞춤형 식단과 운영 노하우로 위생적이고 체계적인 급식 서비스를 제공합니다. 학교, 공장, 기관 등 다양한 현장에 최적화된 메뉴를 제공합니다.",
      image: "/images/hero/1%20(4).jpg",
      href: "/businessarea/mealservice",
    },
    {
      key: "distribution",
      label: "식자재유통",
      title: "식자재유통이란?",
      description:
        "안정적인 공급망과 철저한 품질 관리로 신선한 식자재를 제공합니다. 체계적인 물류 시스템으로 고객 맞춤형 납품을 지원합니다.",
      image: "/images/hero/1%20(5).jpg",
      href: "/businessarea/fooddistribution",
    },
    {
      key: "kitchen",
      label: "주방설비",
      title: "주방설비란?",
      description:
        "현장 맞춤형 주방 설비 컨설팅과 설치를 제공합니다. 동선, 안전, 위생까지 고려한 효율적인 주방 환경을 구축합니다.",
      image: "/images/hero/1%20(6).jpg",
      href: "/businessarea/kitchenfacility",
    },
  ];

  const [activeKey, setActiveKey] = useState(areas[0].key);
  const activeArea = areas.find((area) => area.key === activeKey) || areas[0];

  return (
    <motion.section
      className="bg-white dark:bg-darkmode"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
            <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 pt-20 pb-14">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3C3D5E] dark:text-white">
            더채움 사업영역
          </h2>
          <p className="mt-4 text-base sm:text-lg text-black/60 dark:text-white/60">
            고객만족을 위해 고객감동으로 채워드립니다.
          </p>
        </div>
      </div>

      <div className="border-y border-black/10 dark:border-white/10">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3C3D5E] dark:text-white">
              BUSINESS AREA
            </h3>
            <div className="flex gap-8 text-base sm:text-lg">
              {areas.map((area) => (
                <button
                  key={area.key}
                  type="button"
                  onClick={() => setActiveKey(area.key)}
                  className={`relative pb-2 font-semibold ${
                    activeKey === area.key
                      ? "text-[#1A9CB7]"
                      : "text-black/60 dark:text-white/60"
                  }`}
                >
                  {area.label}
                  {activeKey === area.key && (
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#1A9CB7]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 py-16">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 col-span-12">
            <div className="bg-white dark:bg-darklight rounded-[28px] shadow-xl px-10 py-10">
              <h4 className="text-2xl font-semibold text-black dark:text-white">
                {activeArea.title}
              </h4>
              <p className="mt-6 text-base leading-relaxed text-black/70 dark:text-white/70 whitespace-pre-line">
                {activeArea.description}
              </p>
              <Link
                href={activeArea.href}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#46456B] text-white px-8 py-3 font-semibold"
              >
                더보기
                <span className="text-lg">-&gt;</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative overflow-hidden rounded-[32px]">
              <Image
                src={activeArea.image}
                alt={activeArea.label}
                width={720}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BusinessArea;



