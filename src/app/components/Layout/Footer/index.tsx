"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  if (pathname?.startsWith("/test3")) {
    return null;
  }
  return (
    <motion.footer
      className="bg-[#25292A] text-[#EAE8EA] border-t border-black/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 py-12">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div>
              <h4 className="text-xl mb-4 font-semibold text-[#EAE8EA]">
                Contact us
              </h4>
              <p className="mt-2 text-base mb-4 text-[#EAE8EA]/70">
                평일 : AM 09:00 ~ PM 18:00 (주말 및 공휴일 휴무)
              </p>
              <p className="mt-4 text-3xl font-semibold text-[#EAE8EA]">
                031.223.7324
              </p>
            </div>
            <div className="flex gap-6 text-base font-semibold text-[#EAE8EA]">
              <Link
                href="/about"
                className="px-3 py-1.5 rounded-md hover:bg-[#1f1b18] hover:text-[#EAE8EA]"
              >
                회사소개
              </Link>
              <Link
                href="/about/followroad"
                className="px-3 py-1.5 rounded-md hover:bg-[#1f1b18] hover:text-[#EAE8EA]"
              >
                오시는길
              </Link>
              <Link
                href="/privacy"
                className="px-3 py-1.5 rounded-md hover:bg-[#1f1b18] hover:text-[#EAE8EA]"
              >
                개인정보처리방침
              </Link>
            </div>
          </div>
          <div className="text-sm text-[#EAE8EA] leading-relaxed">
            <p className="-mt-5 text-[#EAE8EA]/70">
              회사명 : (주)더채움 &nbsp;|&nbsp; 대표명 : 최희영 &nbsp;|&nbsp;
              사업자번호 : 875-87-02456 &nbsp;|&nbsp; 주　소 : (본사) 경기도 수원시
              권선구 세류로32, 403호 - 404호
            </p>
            <div className="mt-0 flex flex-col gap-2 text-[#EAE8EA]/70 lg:flex-row lg:items-center lg:justify-between">
              <span>
                대표메일 : Thefull@thefull.co.kr &nbsp;|&nbsp; TEL : 031-223-7324
              </span>
              <span>ⓒ thefull all rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
