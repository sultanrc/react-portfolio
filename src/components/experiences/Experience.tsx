import { EXPERIENCES } from "../../constants/experiences";
import arrowIcon from "../../assets/Arrow.svg";

type ExperienceProps = {
  selectedTabProps: number;
};
export default function Experience({ selectedTabProps }: ExperienceProps) {
  const experience = EXPERIENCES[selectedTabProps];
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-3">
        <h2 className="text-lg text-white font-semibold">{experience.role}</h2>
        <a
          href={experience.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group text-accent text-sm md:text-lg"
        >
          @ {experience.company}
          <span className="absolute bottom-1 left-0 w-full h-[1px] bg-textPrimary origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </a>
      </div>
      <p className="text-textSecondary text-sm mt-1 md:mt-0 md:text-md">
        {experience.period}
      </p>
      <ul className="text-sm md:text-[15px] h-[360px] pl-5 mt-4 space-y-3 text-textSecondary leading-relaxed">
        {experience.responsibilities.map((exp, id) => (
          <li key={id} className="flex items-start gap-2">
            <img
              src={arrowIcon}
              alt=""
              className="w-5 h-5 object-contain mt-1"
            />
            {exp}
          </li>
        ))}
      </ul>
    </>
  );
}
