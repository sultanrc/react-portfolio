export default function Jumbotron() {
  return (
    <div className="min-h-screen flex items-center ">
      <div className="flex flex-col items-start gap-6 mx-4 md:mx-20 lg:mx-40">
        <div className="flex flex-col">
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-200">
            Hello, world, my name is
          </p>
          <h1 className="text-[26px] md:text-[60px] font-bold text-white">
            Muhammad Sultan.
          </h1>
          <p className="text-[22px] md:text-[40px] lg:text-[56px] font-bold text-stone-300">
            I bring designs to life on the web.
          </p>
        </div>
        <p className="text-md md:text-2xl font-light text-stone-300 max-w-xl">
          I’m a frontend developer who thrives on learning and innovation.
          Transforming ideas into stunning visuals and seamless digital
          experiences—one line of code at a time. Always evolving, always
          building.
        </p>
      </div>
    </div>
  );
}
