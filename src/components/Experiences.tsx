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
    <div className="flex items-center min-h-screen text-white bg-primary px-64">
      <div className="flex flex-col">
        <MainHeader headerNumber="2" headerName="Experiences" />
        <div className="flex gap-10">
          <TabButton selectedTabProps={selectedTab} onTabClick={handleTab} />
          <Experience selectedTabProps={selectedTab} />
        </div>
      </div>
    </div>
  );
}
