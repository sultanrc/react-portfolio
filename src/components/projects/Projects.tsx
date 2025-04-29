import Section from "../Section";
import Header from "../Header";
import Project from "./Project";
import { useState } from "react";
import Button from "../Button";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  return (
    <Section>
      <div
        id="projects"
        className="flex flex-col justify-center md:justify-start gap-2 2xl:mx-10 lg:pt-36"
      >
        <Header headerNumber="3" headerName="Projects" />
        <Project showAll={showAll} />
        <Button
          onClickButton={() => setShowAll(!showAll)}
          classProps="w-fit my-8 mx-auto mt-10 py-3 px-6"
        >
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </div>
    </Section>
  );
}
