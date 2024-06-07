import Image from "next/image";
import Section1 from "./components/section1";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Donate from "./components/donate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Donate />
      <Section1 />
      <Section3 />
      <Section4 />
    </main>
  );
}
