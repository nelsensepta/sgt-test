const Donate: React.FC = () => {
  return (
    <div className="bg-white group fixed top-5 right-5 flex z-50">
      <div className="group-hover:translate-x-2 flex w-full justify-start items-center group-hover:-translate-y-2 transition duration-300 ease-in-out border-black border-solid border-4 p-1 md:p-2">
        <span className="text-md md:text-2xl lg:text-3xl text-black text-center">
          donate
        </span>
      </div>
    </div>
  );
};

export default Donate;
