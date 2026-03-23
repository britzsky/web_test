import { Documentation } from "@/app/components/Documentation/Documentation";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Featurs | (주)더채움",
};

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  );
}
