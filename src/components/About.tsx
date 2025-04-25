import profileImage from "../assets/Sultan.jpg";
import MainHeader from "./MainHeader";
import TechStack from "./TechStack";
import { ABOUT } from "../constants/about";
import Section from "./Section";

export default function About() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="lg:w-3/5 flex flex-col">
          <MainHeader headerNumber="1" headerName="About Me" />

          <div>
            {ABOUT.map((aboutParagraph, index) => (
              <p
                key={index}
                className="text-xs md:text-[16px] text-stone-400 mb-4 leading-relaxed"
              >
                {aboutParagraph}
              </p>
            ))}
          </div>

          <TechStack />
        </div>
        <img
          src={profileImage}
          alt="Profile"
          className="w-full max-w-md lg:max-w-2xl lg:w-2/5 h-[320px] md:h-auto aspect-[3/4] object-cover border-2 border-white rounded-xl mx-auto lg:mx-0 mt-4"
        />
      </div>
    </Section>
  );
}
