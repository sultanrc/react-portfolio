import { useState } from "react";
import MainHeader from "./MainHeader";
import Section from "./Section";
import Experience from "./Experience";
import TabButton from "./TabButton";

export default function Experiences() {
  const [selectedTab, setTab] = useState(0);

  const handleTab = (index: number) => {
    setTab(index);
  };

  return (
    <Section>
      <div
        id="experiences"
        className="w-full flex flex-col justify-center md:justify-start lg:mx-24"
      >
        <MainHeader headerNumber="2" headerName="Experiences" />
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 ">
          <TabButton selectedTabProps={selectedTab} onTabClick={handleTab} />
          <Experience selectedTabProps={selectedTab} />
        </div>
      </div>
    </Section>
  );
}
