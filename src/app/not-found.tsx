import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
};

export default function ErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f7fb] px-6">
      <div className="w-full max-w-xl rounded-[28px] border border-[#dbe4ee] bg-white p-10 text-center shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <p className="text-sm font-semibold tracking-[0.18em] text-[#2f7d32]">
          404 ERROR
        </p>
        <h1 className="mt-4 text-3xl font-bold text-[#123a63]">
          요청하신 페이지를 찾을 수 없습니다.
        </h1>
        <p className="mt-4 text-sm leading-7 text-[#6b7280]">
          주소가 변경되었거나 더 이상 제공되지 않는 페이지입니다. 아래 버튼으로
          test4 메인 페이지로 돌아가실 수 있습니다.
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
}
