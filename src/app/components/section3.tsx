import Image from "next/image";
// import Section1 from "./components/section1";

interface PropsBox {
  title: string;
  description: string;
  color: string;
}

const BoxComponent: React.FC<PropsBox> = ({ description, title, color }) => {
  return (
    <div className={`${color} group relative`}>
      <div className="group-hover:translate-x-4 group-hover:-translate-y-4 transition duration-300 ease-in-out px-12 py-16 flex-col border-white border-solid border-4 gap-5">
        <span className="text-5xl font-bold">{title}</span>
        <p className="text-3xl">{description}</p>
      </div>
    </div>
  );
};

export default function Section3() {
  return (
    <section className="flex w-full flex-col min-h-screen bg-[#3e88ff] p-40">
      <div className="flex justify-start gap-10 flex-col">
        <span className="text-6xl font-bold">Our projects</span>
        <p className="text-4xl">
          are very different in terms of priority, scale and complexity of
          implementation
        </p>
      </div>
      <div className="flex pt-10 flex-col gap-7">
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
