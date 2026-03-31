import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0f172a] py-8 text-white/70">
      <div className="mx-auto grid max-w-6xl gap-8 px-12 text-sm leading-7 md:grid-cols-2">
        <div>
          <p className="font-semibold text-white">남양주시축구단 사회적 협동조합</p>
          <p>주소: 경기도 남양주시 화도읍 경춘로 2155번길 KD 타워 4층</p>
          <p>Copyright © Namyangju Football Social Cooperative. All rights reserved.</p>
        </div>
        <div>
          <p className="font-semibold text-white">남양주시축구단 사회적 협동조합</p>
          <p className="mt-2">
            조합 홈페이지는 연간 기부금 모금액 및 활용실적을 공개할 수 있는
            기부금 카테고리와 국민권익위원회, 국세청 또는 주무관청 중 1개 이상
            링크가 연결되어 있어야 하며, 포털 검색이 가능해야 합니다.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            <Link
              href="https://www.acrc.go.kr/"
              target="_blank"
              rel="noreferrer"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              국민권익위원회
            </Link>
            <Link
              href="https://www.nts.go.kr/"
              target="_blank"
              rel="noreferrer"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              국세청
            </Link>
            <Link
              href="https://www.mcst.go.kr/"
              target="_blank"
              rel="noreferrer"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              문화체육관광부
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
