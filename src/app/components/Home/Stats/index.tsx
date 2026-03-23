"use client";
import Image from "next/image";
import { motion } from "motion/react";

const Stats = () => {
  const stats = [
    { value: "103억", label: "매출액" },
    { value: "48개", label: "지점운영" },
    { value: "135명", label: "직원수" },
    { value: "13,400명", label: "일식수" },
  ];

  return (
    <motion.section
      className="relative py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero/1%20(5).jpg"
          alt="Stats background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>
      <div className="relative container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-semibold">
                {stat.value}
              </div>
              <div className="mt-2 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;
