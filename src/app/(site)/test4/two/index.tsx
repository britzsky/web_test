"use client";

import Link from "next/link";

const Page = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f7fb] px-6 py-16 text-[#123a63]">
      <div className="w-full max-w-3xl rounded-[28px] border border-[#dbe4ee] bg-white p-10 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <p className="text-sm font-semibold tracking-[0.18em] text-[#2f7d32]">
          TEST4 SUB PAGE
        </p>
        <h1 className="mt-4 text-3xl font-bold text-[#123a63]">
          test4 두 번째 페이지
        </h1>
        <p className="mt-4 text-sm leading-7 text-[#4b5563]">
          기존 공용 컴포넌트 의존성을 제거하고, test4 범위 안에서만 유지되는
          독립 페이지로 정리했습니다.
        </p>
        <div className="mt-8">
          <Link
            href="/test4/one"
            className="inline-flex items-center justify-center rounded-md bg-[#123a63] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            test4 메인으로 이동
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;
