"use client";
import Image from "next/image";
import { motion } from "motion/react";

const partnerLogos = [
  {
    src: "/images/logo/friendship1.png",
    alt: "Friendship partner 1",
    width: 180,
    height: 60,
  },
  {
    src: "/images/logo/friendship2.png",
    alt: "Friendship partner 2",
    width: 180,
    height: 60,
  },
  {
    src: "/images/logo/friendship3.png",
    alt: "Friendship partner 3",
    width: 180,
    height: 60,
  },
];

const Partners = () => {
  return (
    <motion.section
      className="bg-white dark:bg-darkmode py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {partnerLogos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-10 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Partners;
