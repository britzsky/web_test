import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    label: "조합소개",
    href: "/about",
    children: [
      { label: "이사장 인사말", href: "/about/greeting" },
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

type Player = {
  number: string;
  name: string;
  role: string;
};

type PositionGroup = {
  key: string;
  title: string;
  accent: string;
  description: string;
  players: Player[];
};

const positionGroups: PositionGroup[] = [
  {
    key: "gk",
    title: "Goalkeeper",
    accent: "from-[#123a63] to-[#1f5b93]",
    description: "골문을 지키는 마지막 수비진",
    players: [
      { number: "1", name: "Han-geun Park", role: "골키퍼" },
      { number: "29", name: "Min-jae Kim", role: "골키퍼" },
      { number: "81", name: "Seok-min Park", role: "골키퍼" },
    ],
  },
  {
    key: "df",
    title: "Defender",
    accent: "from-[#0f766e] to-[#14b8a6]",
    description: "안정적인 수비 조직으로 경기를 운영하는 라인",
    players: [
      { number: "14", name: "Tae-hyeon Lee", role: "수비수" },
      { number: "22", name: "Su-hyuk An", role: "수비수" },
      { number: "88", name: "Chan-wool Jun", role: "수비수" },
      { number: "6", name: "Tae-young Kim", role: "중앙 수비수" },
      { number: "20", name: "Tae-keuk Lee", role: "중앙 수비수" },
      { number: "26", name: "Jun-suk Lee", role: "중앙 수비수" },
      { number: "3", name: "Gyeong-chan Cho", role: "좌측 풀백" },
      { number: "44", name: "Seo-ho Yoon", role: "우측 풀백" },
      { number: "66", name: "Sung-don Jang", role: "우측 풀백" },
    ],
  },
  {
    key: "mf",
    title: "Midfielder",
    accent: "from-[#2f7d32] to-[#6aa84f]",
    description: "공수 전환과 경기 운영을 책임지는 중원",
    players: [
      { number: "-", name: "Sung-uk Moon", role: "미드필더" },
      { number: "5", name: "Ki-wook Hwang", role: "수비형 미드필더" },
      { number: "77", name: "Sung-jae Shin", role: "수비형 미드필더" },
      { number: "16", name: "Jae-hyuk Cho", role: "미드필더" },
      { number: "23", name: "Je-yeong Park", role: "미드필더" },
      { number: "24", name: "Ji-wan Kang", role: "미드필더" },
    ],
  },
  {
    key: "fw",
    title: "Forward",
    accent: "from-[#b45309] to-[#f59e0b]",
    description: "득점과 침투로 승부를 결정짓는 공격 자원",
    players: [
      { number: "7", name: "Jae-hyuk Shin", role: "좌측 윙포워드" },
      { number: "19", name: "Seok-hwan Hong", role: "좌측 윙포워드" },
      { number: "13", name: "Min-seung Kang", role: "우측 윙포워드" },
      { number: "21", name: "Jeong-woo Han", role: "우측 윙포워드" },
      { number: "18", name: "Dong-gwan Hong", role: "중앙 공격수" },
      { number: "11", name: "Sae-han Lee", role: "공격수" },
      { number: "41", name: "Hyo-min Park", role: "공격수" },
      { number: "49", name: "Hyun-gi Kim", role: "공격수" },
    ],
  },
];

const summaryItems = [
  { label: "총 선수", value: "26명" },
  { label: "골키퍼", value: "3명" },
  { label: "수비수", value: "9명" },
  { label: "미드필더", value: "6명" },
  { label: "공격수", value: "8명" },
];

export default function PlayersPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#222]">
      <header className="relative z-50 border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-1 py-4">
          <Link href="/test4/one" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo_jahwal.png"
              alt="로고"
              width={200}
              height={80}
              className="h-17 w-auto"
            />
            <Image
              src="/images/logo/namyang.svg"
              alt="남양주 시민축구단 로고"
              width={200}
              height={80}
              className="h-18 w-auto"
            />
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-[#123a63]">
                남양주시축구단 사회적 협동조합
              </p>
              <p className="text-xs text-[#6b7280]">
                함께 성장하는 지역 축구 공동체
              </p>
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

      <section className="relative overflow-hidden bg-[#123a63] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_32%),linear-gradient(120deg,_rgba(47,125,50,0.35),_transparent_45%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-white/70">
              PLAYER SQUAD
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              남양주시민축구단
              <br />
              선수단 소개
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              포지션별로 정리한 선수단 명단입니다. 경기 운영의 중심이 되는
              미드필더진부터 득점을 책임지는 공격진까지, 현재 공개된 선수 구성을
              한눈에 확인할 수 있도록 구성했습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/test4/one"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#123a63] transition hover:opacity-90"
              >
                메인으로 돌아가기
              </Link>
              <a
                href="https://namu.wiki/w/%ED%8B%80:%EB%82%A8%EC%96%91%EC%A3%BC%EC%8B%9C%EB%AF%BC%EC%B6%95%EA%B5%AC%EB%8B%A8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                참고 문서 보기
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {summaryItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
              >
                <p className="text-sm text-white/70">{item.label}</p>
                <p className="mt-3 text-3xl font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-[#2f7d32]">
                SQUAD BY POSITION
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#123a63]">
                포지션별 선수 구성
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#6b7280]">
              각 포지션의 역할이 드러나도록 컬러와 카드 구성을 나눴습니다.
              선수 이름과 참고 가능한 공개 정보 기준으로 보기 쉽게 정리했습니다.
            </p>
          </div>

          <div className="space-y-8">
            {positionGroups.map((group) => (
              <section
                key={group.key}
                className="overflow-hidden rounded-[28px] border border-[#dbe4ee] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className={`bg-gradient-to-r ${group.accent} px-6 py-6 text-white`}>
                  <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                        {group.title}
                      </p>
                      <h3 className="mt-2 text-3xl font-bold">
                        {group.players.length}명의 {group.description}
                      </h3>
                    </div>
                    <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/85">
                      {group.players.map((player) => player.number).join(" / ")}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-3">
                  {group.players.map((player) => (
                    <article
                      key={`${group.key}-${player.number}-${player.name}`}
                      className="group rounded-2xl border border-[#e5e7eb] bg-[#fbfdff] p-5 transition hover:-translate-y-1 hover:border-[#bfd0e4] hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold tracking-[0.18em] text-[#6b7280]">
                            NO.
                          </p>
                          <p className="mt-2 text-4xl font-extrabold text-[#123a63]">
                            {player.number}
                          </p>
                        </div>
                        <span className="rounded-full bg-[#eef5fb] px-3 py-1 text-xs font-semibold text-[#123a63]">
                          {player.role}
                        </span>
                      </div>

                      <div className="mt-8">
                        <p className="text-xl font-bold text-[#111827]">{player.name}</p>
                        <p className="mt-2 text-sm text-[#6b7280]">
                          남양주시민축구단 {player.role}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[28px] border border-[#dbe4ee] bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-[0.16em] text-[#2f7d32]">
                  NOTICE
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#123a63]">
                  선수단 정보 안내
                </h3>
              </div>
              <Link
                href="/test4/one"
                className="inline-flex items-center justify-center rounded-md bg-[#123a63] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                메인 페이지로 이동
              </Link>
            </div>

            <div className="mt-6 grid gap-4 text-sm leading-7 text-[#4b5563] md:grid-cols-2">
              <p>
                본 페이지는 공개된 참고 자료를 바탕으로 정리한 선수단 소개
                화면입니다. 추후 실제 구단 데이터에 맞춰 프로필, 사진, 기록 카드로
                확장할 수 있도록 레이아웃을 단순하게 구성했습니다.
              </p>
              <p>
                테스트 목적의 `test4` 범위만 유지하기 위해 공용 모듈 의존성을
                최소화했고, 현재는 페이지 자체만으로도 확인 가능하도록 정리해
                두었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0f172a] py-8 text-white/70">
        <div className="mx-auto max-w-6xl px-6 text-sm leading-7">
          <p className="font-semibold text-white">남양주시축구단사회적협동조합</p>
          <p>주소: 경기도 남양주시 화도읍 경춘로 2155, 401호(케이앤디타워)</p>
          <p>Copyright © Namyangju Football Social Cooperative. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
