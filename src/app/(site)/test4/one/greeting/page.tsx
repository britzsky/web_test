import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../_components/site-footer";

const menuItems = [
  {
    label: "조합소개",
    href: "/test4/one/greeting",
    children: [
      { label: "이사장인사말", href: "/test4/one/greeting" },
      { label: "연혁", href: "/team/history" },
      { label: "임원소개", href: "/about/executives" },
    ],
  },
  {
    label: "행사마당",
    href: "/event",
    children: [
      { label: "알림마당", href: "/event/notice" },
      { label: "행사 갤러리", href: "/event/gallery" },
    ],
  },
  {
    label: "지원금 지급실적",
    href: "/support-result",
  },
  {
    label: "구단소개",
    href: "/team",
    children: [
      { label: "연혁", href: "/team/history" },
      { label: "연간기부금 실적", href: "/team/donation-result" },
    ],
  },
  {
    label: "오시는길",
    href: "/location",
  },
  {
    label: "선수단 소개",
    href: "/test4/one/players",
  },
];

const messagePoints = [
  "윤영환 이사장",
  "이   완 이사", 
  "강민희 이사",
  "박성민 이사",
  "최인서 이사", 
  "김종일 감사",
];

export default function GreetingPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#222]">
      <header className="relative z-50 border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-1 py-4">
          <Link href="/test4/one" className="flex items-center gap-3">
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-[#123a63]">남양주시축구단 사회적 협동조합</p>
              <p className="text-xs text-[#6b7280]">함께 성장하는 지역 축구 공동체</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-md font-semibold text-[#123a63] md:flex">
            {menuItems.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex h-10 items-center transition hover:text-[#2f7d32]"
                >
                  {item.label}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 translate-y-2 rounded-md border border-[#e5e7eb] bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm font-medium text-[#123a63] transition hover:bg-[#f8fafc] hover:text-[#2f7d32]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>
      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-[#dbe4ee] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#2f7d32]">MESSAGE</p>
            <h2 className="mt-2 text-3xl font-bold text-[#123a63]">
              함께 만드는 지속가능한 축구 공동체
            </h2>
            <div className="mt-2 space-y-3 text-sm leading-8 text-[#4b5563] sm:text-base">
              <p>
                이사장 인사말
                안녕하십니까? 남양주시축구단 사회적 협동조합 이사장 윤영환 입니다.<br />
                74만 남양주시민 누구나 함께 할수 있는 축구와 스포츠 유소년과 동호인<br />그리고 엘리트인 전문 선수 육성에 
                시민들의 오랫동안 준비한 남양주시축구단<br />사회적협동조합에 많은 관심을 가져주셔서 진심으로 감사드립니다. 
              </p>
              <p>
                "장학금의 지원이 특정인 또는 경제적으로 부유한 사람에게 지원하는 것이 아니라<br />
                경제적 생활의 어려움으로 인하여 스포츠에 참여 및 접근하지 못하는 학생선수와<br />
                어려운 여건에서도 스포츠에 도움이 될 수 있도록 훈련 환경을 지원하자.<br />
                장학금 등의 수여자는 지역발전을 위하여 지역의 학생을 위주로 지원하자" 등 입니다.<br />
                앞으로 남양주시축구단 사회적 협동조합은 약속을 합니다.
              </p>
              <p>
                앞으로 남양주시축구단 사회적 협동조합은 약속을 합니다.<br />
                그 어떤 투자 중 ‘교육’과 ‘사람’에 대한 투자야 말로<br />가장 존귀하고 귀중한 투자라고 생각합니다.<br />
                남양주시 사회적협동조합은 이 값지고 보람된 일을 앞으로도 계속 묵묵히 해 나가겠습니다.<br />
                이런 사회적 협동조합의 내일을 위해 여러분의 애정 어린 고견과 격려 부탁드립니다.<br />
                지역 출신 우수 선수를 발굴하고 육성하여 국가대표 배출하고 건강한 삶을 유지하는<br />
                남양주시축구단 사회적협동조합으로 도약하고 다양한 프로그램을 통해 지역사회에 공헌하며<br />
                시민과 늘 함께하겠습니다.
              </p>
              <p>
                감사합니다.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-[#dbe4ee] bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold tracking-[0.16em] text-[#2f7d32]">Director Introduction</p>
              <h3 className="mt-2 text-2xl font-bold text-[#123a63]">이사 소개</h3>
              <div className="mt-5 space-y-1">
                {messagePoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl bg-[#fffff] px-4 py-4 text-sm font-semibold tracking-[0.16em] leading-7 text-[#5E0006]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-[#123a63] p-7 text-white shadow-sm">
              <p className="text-sm font-semibold tracking-[0.16em] text-white/70">QUICK LINK</p>
              <h3 className="mt-2 text-2xl font-bold">바로가기</h3>
              <div className="mt-5 grid gap-3">
                <Link
                  href="/test4/one"
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-sm font-medium transition hover:bg-white/15"
                >
                  메인 페이지
                </Link>
                <Link
                  href="/test4/one/players"
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-sm font-medium transition hover:bg-white/15"
                >
                  선수단 소개
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
