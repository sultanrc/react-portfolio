import { TECH_STACK } from "../../constants/about";
import arrowIcon from "../../assets/Arrow.svg";

export default function TechStack() {
  return (
    <div>
      <p className="text-md text-stone-400 mb-4">
        Here’s the tech I love working with:
      </p>
      <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-xs md:text-[16px] text-stone-400 list-none pl-5 font-light">
        {TECH_STACK.map((techItems, index) => (
          <li key={index} className="flex items-center gap-2">
            <img src={arrowIcon} alt="" className="w-5 h-5 object-contain" />
            {techItems}
          </li>
        ))}
      </div>
    </div>
  );
}
