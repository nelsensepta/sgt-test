import Image from "next/image";
// import Section1 from "./components/section1";

interface PropsBox {
  title: string;
}

const BoxComponent: React.FC<PropsBox> = ({ title }) => {
  return (
    <div className="bg-white group relative flex">
      <div className="group-hover:translate-x-4 flex w-full justify-start items-center group-hover:-translate-y-4 transition duration-300 ease-in-out border-black border-solid border-4 p-10">
        <span className="text-xl text-black text-center">{title}</span>
      </div>
    </div>
  );
};

export default function Section4() {
  return (
    <section className="flex min-h-screen flex-col bg-[#fcf944] p-40">
      <div className="flex justify-start gap-10 flex-col">
        <span className="text-6xl font-bold text-black">We want to help</span>
        <p className="text-4xl text-black">
          homeless packs, volunteers, guardians, overstayers, shelters and other
          organisations
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 pt-10">
        <BoxComponent title="Shelter of Victoria Bulbyna" />
        <BoxComponent title="City of faithful hearts" />
        <BoxComponent title="Shelter of Natalia Tymoshenko" />
        <BoxComponent title="Shelter of Jeanne Sass" />
        <BoxComponent title="Shelter of Victoria Bondarenko" />
        <BoxComponent title="Sterilization center" />
        <BoxComponent title="Zoo chance" />
        <BoxComponent title="Save lives" />
        <BoxComponent title="City Center for the Treatment of Animals" />
        <BoxComponent title="Society for the Protection of Animals in Sumy" />
        <BoxComponent title="The right to life" />
        <BoxComponent title="4 paws" />
        <BoxComponent title="The kingdom of cats" />
        <BoxComponent title="Zvir" />
        <BoxComponent title="Mercy" />
        <BoxComponent title="Happy dog" />
        <BoxComponent title="Give me a paw, friend" />
        <BoxComponent title="Friend" />
        <BoxComponent title="Hope" />
        <BoxComponent title="We are for the right to life" />
        <BoxComponent title="Planeta" />
        <BoxComponent title="Second life" />
        <BoxComponent title="Happy shore" />
        <BoxComponent title="Retrieverteam" />
        <BoxComponent title="Shelter of Irina Dobrolyubova" />
        <BoxComponent title="Matilda" />
        <BoxComponent title="Life" />
        <BoxComponent title="Second chance" />
        <BoxComponent title="SOS" />
        <BoxComponent title="Best friends" />
      </div>

      <div className=" bg-[#ff97d0] w-72 items-center py-4 gap-6 px-5 flex border-black border-solid border-4 mt-10 group">
        <span className="text-2xl font-bold text-black">apply for help</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="40"
          width="40"
          className="group-hover:translate-x-3 transition duration-300 ease-in-out"
        >
          <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
        </svg>
      </div>
    </section>
  );
}
