import Image from "next/image";

type SimpleHeroPageProps = {
  title: string;
  breadcrumb: string;
};

const SimpleHeroPage = ({ title, breadcrumb }: SimpleHeroPageProps) => {
  return (
    <main className="bg-white dark:bg-darkmode">
      <section className="relative h-[320px] w-full overflow-hidden">
        <Image
          src="/images/productdoc/Portfolio-1.jpg"
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            {title}
          </h1>
        </div>
      </section>

      <section className="border-b border-black/10 dark:border-white/10">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="text-4xl font-semibold text-[#3C3D5E] dark:text-white">
                {title}
              </div>
              <div className="mt-2 h-px w-64 bg-[#3C8B5B]" />
              <p className="mt-3 text-sm text-black/60 dark:text-white/60">
                Placeholder content for {title}.
              </p>
            </div>
            <div className="text-sm text-black/50 dark:text-white/60">{breadcrumb}</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SimpleHeroPage;
