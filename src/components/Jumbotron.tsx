import { JUMBOTRON } from "../constants/jumbotron";

export default function Jumbotron() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="flex flex-col items-start gap-6 mx-4 md:mx-20 lg:mx-40">
        <div className="flex flex-col">
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-200">
            {JUMBOTRON.greeting}
          </p>
          <h1 className="text-[32px] md:text-[60px] 2xl:text-[80px] font-bold text-white">
            {JUMBOTRON.name}
          </h1>
          <p className="text-[22px] md:text-[40px] lg:text-[56px] font-bold text-green-300">
            {JUMBOTRON.tagline}
          </p>
        </div>
        <p className="text-md md:text-2xl font-light text-stone-300 max-w-xl">
          {JUMBOTRON.description}
        </p>
      </div>
    </div>
  );
}
