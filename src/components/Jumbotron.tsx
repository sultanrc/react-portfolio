import { JUMBOTRON } from "../constants/jumbotron";

export default function Jumbotron() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="flex flex-col items-start gap-6 mx-4 md:mx-20 lg:mx-40">
        <div className="flex flex-col">
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-textSecondary">
            {JUMBOTRON.greeting}
          </p>
          <h1 className="text-[32px] md:text-[60px] 2xl:text-[80px] font-bold text-textPrimary">
            {JUMBOTRON.name}
          </h1>
          <p className="text-[22px] md:text-[40px] lg:text-[56px] font-bold text-accent">
            {JUMBOTRON.tagline}
          </p>
        </div>
        <p className="text-md md:text-2xl font-light text-textSecondary max-w-xl">
          I’m a <strong className="text-accent">frontend developer</strong> who
          thrives on learning and innovation. Transforming ideas into stunning
          visuals and seamless digital experiences—one line of code at a time.
          <strong className="text-accent">
            {" "}
            Always evolving, always building.
          </strong>
        </p>
      </div>
    </div>
  );
}
