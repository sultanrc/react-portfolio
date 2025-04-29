import { EXPERIENCES } from "../../constants/experiences";

type ExperienceProps = {
  selectedTabProps: number;
};
export default function Experience({ selectedTabProps }: ExperienceProps) {
  const experience = EXPERIENCES[selectedTabProps];
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-3">
        <h2 className="text-lg text-white font-semibold">{experience.role}</h2>
        <h2 className="text-accent text-sm md:text-lg">
          @ {experience.company}
        </h2>
      </div>
      <p className="text-textSecondary text-sm mt-1 md:mt-0 md:text-md">
        {experience.period}
      </p>
      <ul className="text-sm md:text-[15px] list-disc h-[360px] pl-5 mt-4 space-y-3 text-textSecondary leading-relaxed">
        {experience.responsibilities.map((exp, id) => (
          <li key={id}>{exp}</li>
        ))}
      </ul>
    </>
  );
}
