import Section from "../Section";
import Header from "../Header";
import Project from "./Project";
import { useState } from "react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  return (
    <Section>
      <div
        id="projects"
        className="flex flex-col justify-center md:justify-start gap-2 2xl:mx-40 lg:pt-36"
      >
        <Header headerNumber="3" headerName="Projects" />
        <Project showAll={showAll} />
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-fit my-8 hover:text-gray-300 mx-auto text-sm transition border border-textPrimary text-textPrimary py-3 px-8 rounded-lg"
        >
          {showAll ? "Show Less" : "Show All Projects"}
        </button>
      </div>
    </Section>
  );
}
