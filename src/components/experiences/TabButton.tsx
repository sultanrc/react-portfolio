import { EXPERIENCES } from "../../constants/experiences";

type TabProps = {
  selectedTabProps: number;
  onTabClick: (index: number) => void;
};

export default function Tab({ selectedTabProps, onTabClick }: TabProps) {
  return (
    <div className="w-full md:w-[25%] flex md:flex-col ">
      {EXPERIENCES.map((exp, index) => (
        <button
          key={index}
          className={`py-3 px-8 md:px-4 md:text-left text-sm font-medium
        ${
          selectedTabProps === index
            ? "text-textPrimary border-b-2 md:border-b-0 md:border-l-2 border-accent"
            : "text-secondary border-b-2 md:border-b-0 md:border-l-2 border-inactive"
        } focus:outline-none hover:bg-stone-800 transition-colors`}
          onClick={() => onTabClick(index)}
          aria-selected={selectedTabProps === index}
          role="tab"
        >
          {exp.buttonName}
        </button>
      ))}
    </div>
  );
}
