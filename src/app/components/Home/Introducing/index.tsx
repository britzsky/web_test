"use client";
import Image from "next/image";

const Introducing = () => {
  return (
    <section className="bg-white dark:bg-darkmode py-20">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="text-center pb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3C3D5E] dark:text-white">
            더채움 소개
          </h2>
          <p className="mt-4 text-base sm:text-lg text-black/60 dark:text-white/60">
            고객의 식탁을 책임지는 파트너로, 신뢰와 품질을 지켜갑니다.
          </p>
        </div>
      </div>

      <div className="border-y border-black/10 dark:border-white/10">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 py-10">
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#3C3D5E] dark:text-white">
            INTRODUCING
          </h2>
        </div>
      </div>

      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 pt-26 pb-12">
        <div className="grid grid-cols-12 gap-30 items-start">
          <div className="lg:col-span-6 col-span-12 lg:mt-80">
            <div className="rounded-[28px] overflow-hidden">
              <Image
                src="/images/hero/1%20(7).jpg"
                alt="introducing-2"
                width={640}
                height={480}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                최고 가치를 전합니다
              </h3>
              <p className="mt-4 text-xl text-black/70 dark:text-white/70 leading-relaxed">
                고객의 일상이 더 행복해지도록 정성과 품질을 약속합니다.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 col-span-12 flex flex-col gap-20">
            <div className="rounded-[28px] overflow-hidden">
              <Image
                src="/images/hero/1%20(8).jpg"
                alt="introducing-1"
                width={640}
                height={480}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                고객만족의 약속
              </h3>
              <p className="mt-4 text-xl text-black/70 dark:text-white/70 leading-relaxed">
                기준을 지키는 운영과 빠른 대응으로 신뢰를 쌓아갑니다.
              </p>
            </div>

            <div className="rounded-[28px] overflow-hidden">
              <Image
                src="/images/hero/1%20(9).jpg"
                alt="introducing-3"
                width={520}
                height={520}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                건강한 식문화 확산
              </h3>
              <p className="mt-4 text-xl text-black/70 dark:text-white/70 leading-relaxed">
                맛과 균형을 고려한 식단으로 고객의 하루를 채웁니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introducing;
