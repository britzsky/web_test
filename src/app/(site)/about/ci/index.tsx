"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

const Reveal = ({ children, className }: RevealProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

const CiPage = () => {
  return (
    <main className="bg-white dark:bg-darkmode">
      <section className="relative h-[320px] w-full overflow-hidden">
        <Image
          src="/images/productdoc/Portfolio-1.jpg"
          alt="회사소개"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            회사소개
          </h1>
        </div>
      </section>

      <section className="border-b border-black/10 dark:border-white/10">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="text-4xl font-semibold text-[#3C3D5E] dark:text-white">
                CI
              </div>
              <div className="mt-2 h-px w-64 bg-[#3C8B5B]" />
              <p className="mt-3 text-sm text-black/60 dark:text-white/60">
                고객만족을 넘어 고객감동으로 채워드리는 맞춤형 급식 솔루션으로 다가가겠습니다.
              </p>
            </div>
            <div className="text-sm text-black/50 dark:text-white/60">
              홈 / 회사소개 / CI
            </div>
          </div>
        </div>
      </section>

      <Reveal className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 py-16">
        <Image
          src="/images/about/ci/ci-vision-mission.png"
          alt="비전 & 미션"
          width={1200}
          height={700}
          className="h-auto w-full"
        />
      </Reveal>

      <Reveal className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 py-16">
        <Image
          src="/images/about/ci/ci-slogan.png"
          alt="슬로건과 CI 소개"
          width={1200}
          height={700}
          className="h-auto w-full"
        />
      </Reveal>

      <Reveal className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 py-16">
        <Image
          src="/images/about/ci/ci-logo-concept.png"
          alt="로고 컨셉"
          width={1200}
          height={700}
          className="h-auto w-full"
        />
      </Reveal>

      <Reveal className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 py-16">
        <Image
          src="/images/about/ci/ci-symbol-meaning.png"
          alt="심볼 의미"
          width={1200}
          height={520}
          className="h-auto w-full"
        />
      </Reveal>

      <Reveal className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 pb-24 pt-16">
        <Image
          src="/images/about/ci/ci-color-chip.png"
          alt="컬러칩"
          width={1200}
          height={700}
          className="h-auto w-full"
        />
      </Reveal>
    </main>
  );
};

export default CiPage;
