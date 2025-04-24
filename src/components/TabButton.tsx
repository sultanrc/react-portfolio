import { EXPERIENCES } from "../constants/experiences";

type TabProps = {
  selectedTabProps: number;
  onTabClick: (index: number) => void;
};

export default function Tab({ selectedTabProps, onTabClick }: TabProps) {
  return (
    <div className="w-[25%] flex flex-col">
      {EXPERIENCES.map((exp, index) => (
        <button
          key={index}
          className={`py-3 px-4 text-left text-sm font-light ${
            selectedTabProps === index
              ? "text-white border-l-2 border-green-400"
              : "text-stone-300 border-l-2 border-stone-700"
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
