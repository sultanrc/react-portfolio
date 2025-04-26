import Section from "./Section";
import MainHeader from "./MainHeader";
import Project from "./Project";

export default function Projects() {
  return (
    <Section>
      <div className="flex flex-col justify-center md:justify-start gap-2 2xl:mx-40">
        <MainHeader headerNumber="3" headerName="Projects" />
        <Project />
        <a
          href="#contact"
          className="w-fit my-8 hover:text-gray-300 mx-auto text-sm transition border border-white py-3 px-8 rounded-lg"
        >
          Read More
        </a>
      </div>
    </Section>
  );
}
