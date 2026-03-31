import SiteFooter from "../test4/one/_components/site-footer";
import SiteHeader from "../../../components/site-header";

const address = "경기도 남양주시 화도읍 경춘로 2155번길";
const mapQuery = encodeURIComponent(address);
const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const naverMapUrl = `https://map.naver.com/v5/search/${mapQuery}`;
const embedMapUrl = `https://www.google.com/maps?q=${mapQuery}&hl=ko&z=17&output=embed`;

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-white text-[#222]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#f3f7fb]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#2f7d32]">
              LOCATION
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#123a63] sm:text-5xl">
              오시는길
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4b5563]">
              남양주시축구단 사회적 협동조합 방문을 위한 주소와 지도 안내입니다.
              아래 주소와 지도를 통해 쉽게 찾아오실 수 있습니다.
            </p>
            <div className="mt-8 rounded-2xl border border-[#dbe4ee] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold tracking-[0.16em] text-[#2f7d32]">
                ADDRESS
              </p>
              <p className="mt-4 text-lg font-semibold leading-8 text-[#123a63]">
                {address}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                건물명은 KD 타워이며 4층으로 방문하시면 됩니다. 도로명 주소로
                검색하시면 보다 편하게 찾으실 수 있습니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={googleMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#123a63] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  구글 지도
                </a>
                <a
                  href={naverMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-[#123a63] bg-white px-6 py-3 text-sm font-semibold text-[#123a63] transition hover:bg-[#f8fafc]"
                >
                  네이버 지도
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#dbe4ee] bg-white shadow-lg">
            <iframe
              title="남양주시축구단 사회적 협동조합 오시는길"
              src={embedMapUrl}
              className="h-[520px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
