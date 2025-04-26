import MainHeader from "./MainHeader";
import TechStack from "./TechStack";
import Section from "./Section";
import Photo from "./Photo";

export default function About() {
  return (
    <Section>
      <div
        id="about"
        className="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:mx-16 2xl:mx-20 lg:pt-36"
      >
        <div className="lg:w-3/5 flex flex-col">
          <MainHeader headerNumber="1" headerName="About Me" />

          <div className="text-xs md:text-[16px] text-stone-400 mb-4 leading-relaxed">
            <p>
              <strong className="text-accent">Hello, world, I'm Sultan!</strong>{" "}
              I build websites and make them look good. I first fell in love
              with this work in 2023 during my internship, where I got to design
              a dashboard screen in Figma and then turn it into a real webpage
              using HTML and CSS. Seeing my designs come to life on the screen
              was so exciting – that's when I knew this was for me!
            </p>

            <p className="mt-4">
              As a{" "}
              <a href="#experiences" className="text-accent  hover:underline">
                fresh Computer Science graduate
              </a>
              , I’ve honed my skills further through hands-on experience,
              including an{" "}
              <a href="#experiences" className="text-accent  hover:underline">
                internship at PetroChina International Jabung Ltd
              </a>{" "}
              as an IT Support & Developer, where I bridged technical solutions
              with user needs.
            </p>
          </div>

          <TechStack />
        </div>
        <Photo />
      </div>
    </Section>
  );
}
