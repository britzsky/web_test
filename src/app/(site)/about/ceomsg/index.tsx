"use client";
import Image from "next/image";

const CeoMessage = () => {
  return (
    <main className="bg-white dark:bg-darkmode">
      <section className="relative h-[320px] w-full overflow-hidden">
        <Image
          src="/images/productdoc/Portfolio-1.jpg"
          alt="회사소개 배경"
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
                CEO 메시지
              </div>
              <div className="mt-2 h-px w-64 bg-[#3C8B5B]" />
              <p className="mt-3 text-sm text-black/60 dark:text-white/60">
                고객만족을 넘어 고객감동으로 채워드리는 맞춤형 급식 솔루션으로
                다가가겠습니다.
              </p>
            </div>
            <div className="text-sm text-black/50 dark:text-white/60">
              홈 / 회사소개 / CEO 메시지
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 py-16">
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 col-span-12">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/productdoc/Portfolio-2.jpg"
                alt="CEO 메시지 이미지"
                width={520}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 col-span-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
              고객만족을 넘어 고객감동으로
              <br />
              가득찬 밥상을 약속드립니다.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-black/70 dark:text-white/70">
              <p>안녕하십니까. 더채움 대표이사 최희영입니다.</p>
              <p>
                설립일부터 지금까지 더채움은 정직과 신뢰 그리고 고객 감동을
                최우선으로 생각하여 고객 여러분의 건강과 만족을 위해 최상의
                서비스를 제공하고자 헌신하고 있습니다.
              </p>
              <p>
                더채움은 까다로운 식재료의 선별 과정을 거친 후 정교한 조리
                기술과 엄격한 위생 관리를 통해 최고의 식사를 제공하여
                제공하고자 하며, 고객님들과 적극적인 소통을 통해 실제적인 요구를
                이해하고 신속하게 대응함으로써 고객만족을 넘어 고객감동을
                채워드리고 있습니다.
              </p>
              <p>
                더채움의 목표는 항상 건강하고 맛있는 식사를 제공하는 동시에
                고객과의 신뢰를 더욱 강화하여 함께 성장하는 파트너가 되는
                것입니다. 고객 여러분의 식사 만족을 더 가득 채워 드리고자
                최선을 다하겠습니다. 더채움의 노력에 따뜻한 관심을
                부탁드립니다.
              </p>
              <p>감사합니다.</p>
              <p className="font-semibold text-black dark:text-white">
                대표이사 : 최희영
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CeoMessage;
