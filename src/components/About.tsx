import profileImage from "../assets/Sultan.jpg";
import MainHeader from "./MainHeader";
import TechStack from "./TechStack";
import { ABOUT } from "../constants/about";

export default function About() {
  return (
    <div className="flex items-center min-h-screen text-white bg-primary px-40">
      <div className="flex gap-20">
        <div className="w-3/5 flex flex-col">
          <MainHeader headerNumber="1" headerName="About Me" />

          <div>
            {ABOUT.map((aboutParagraph, index) => (
              <p
                key={index}
                className="text-md text-stone-400 mb-4 leading-relaxed"
              >
                {aboutParagraph}
              </p>
            ))}
          </div>

          <TechStack />
        </div>
        <img
          src={profileImage}
          className="w-2/5 h-[400px] object-cover border-2 border-white rounded-xl mt-4"
        />
      </div>
    </div>
  );
}
