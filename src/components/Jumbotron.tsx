export default function Jumbotron() {
  return (
    <div className="min-h-screen flex items-center ">
      <div className="flex flex-col items-start gap-6 mx-40">
        <div className="flex flex-col">
          <p className="text-3xl font-light text-gray-200">
            Hello, world, my name is
          </p>
          <h1 className="text-[84px] -mt-4 font-bold text-white">
            Muhammad Sultan.
          </h1>
          <p className="text-[60px] -mt-4 font-bold text-stone-300">
            I bring designs to life on the web.
          </p>
        </div>
        <p className="text-3xl font-light text-stone-300 max-w-2xl">
          I’m a frontend developer who thrives on learning and innovation.
          Transforming ideas into stunning visuals and seamless digital
          experiences—one line of code at a time. Always evolving, always
          building.
        </p>
      </div>
    </div>
  );
}
