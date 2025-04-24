import { useState } from "react";
import MainHeader from "./MainHeader";
import Experience from "./Experience";
import TabButton from "./TabButton";

export default function Experiences() {
  const [selectedTab, setTab] = useState(0);

  const handleTab = (index: number) => {
    setTab(index);
  };

  return (
    <div className="flex items-center min-h-screen text-white bg-primary mx-4 md:mx-20 lg:mx-64">
      <div className="flex flex-col justify-center md:justify-start">
        <MainHeader headerNumber="2" headerName="Experiences" />
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <TabButton selectedTabProps={selectedTab} onTabClick={handleTab} />
          <Experience selectedTabProps={selectedTab} />
        </div>
      </div>
    </div>
  );
}
