import React from "react";
import { Metadata } from "next";
import Hero from "@/app/components/Home/Hero";
import BusinessArea from "@/app/components/Home/BusinessArea";
import Stats from "@/app/components/Home/Stats";
import Introducing from "@/app/components/Home/Introducing";
import Partners from "@/app/components/Home/Partner";

export const metadata: Metadata = {
  title: "(주)더채움",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <BusinessArea />
      <Stats />
      <Introducing />
      <Partners />
    </main>
  );
}
