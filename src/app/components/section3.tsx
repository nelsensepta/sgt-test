"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface PropsBox {
  title: string;
  description: string;
  color: string;
}

const BoxComponent: React.FC<PropsBox> = ({ description, title, color }) => {
  return (
    <div className={`${color} group relative box`}>
      <div className="group-hover:translate-x-4 group-hover:-translate-y-4 transition duration-300 ease-in-out lg:px-12 lg:py-16 px-10 py-8 flex-col border-white border-solid border-4 gap-5">
        <span className="text-2xl lg:text-5xl font-bold">{title}</span>
        <p className="text-md lg:text-3xl">{description}</p>
      </div>
    </div>
  );
};

export default function Section3() {
  const main = useRef<HTMLElement | any>();
  useGSAP(
    () => {
      gsap.defaults({ ease: "power3" });
      gsap.set(".box", { y: 50 });

      ScrollTrigger.batch(".box", {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: { each: 0.15, grid: [1, 3] },
            overwrite: true,
          }),
        onLeave: (batch) =>
          gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
        onEnterBack: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
        onLeaveBack: (batch) =>
          gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
      });
    },
    { scope: main }
  );
  return (
    <section className="flex w-full flex-col min-h-screen bg-[#3e88ff] p-12 md:p-20 lg:p-40">
      <div className="flex justify-start gap-5 lg:gap-10 flex-col">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Our projects
        </span>
        <p className="text-md md:text-2xl lg:text-4xl">
          are very different in terms of priority, scale and complexity of
          implementation
        </p>
      </div>
      <div className="flex pt-10 flex-col gap-7" ref={main}>
        <BoxComponent
          color="bg-[#000]"
          title="Emergency Aid. WAR 2022."
          description="providing food and medicine to the shelters and animals which lost their homes and families due to the war"
        />
        <BoxComponent
          color="bg-[#31be31]"
          title="Non-commercial feed line"
          description="construction of industrial production base where food for shelters will be produced on a free basis"
        />
        <BoxComponent
          color="bg-[#ff97d0]"
          title="Education and Control"
          description="lectures on communication, organisation and coordination of processes, control over the use of aid"
        />
      </div>
    </section>
  );
}
