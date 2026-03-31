import Link from "next/link";

const menuItems = [
  {
    label: "조합소개",
    href: "/about",
    children: [
      { label: "이사장인사말", href: "/test4/one/greeting" },
      { label: "연혁", href: "/about/history" },
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
    label: "기부금 및 지원금",
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

export default function SiteHeader() {
  return (
    <header className="relative z-50 border-b border-[#e5e7eb] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-1 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="hidden sm:block">
            <p className="text-lg font-bold text-[#123a63]">
              남양주시축구단 사회적 협동조합
            </p>
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
  );
}
