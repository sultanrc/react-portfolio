import { EXPERIENCES } from "../constants/experiences";

type ExperienceProps = {
  selectedTabProps: number;
};
export default function Experience({ selectedTabProps }: ExperienceProps) {
  const experience = EXPERIENCES[selectedTabProps];
  return (
    <div className="w-[75%] flex flex-col">
      <div className="flex gap-3 text-lg">
        <h2>{experience.role}</h2>
        <h2 className="text-green-200">@ {experience.company}</h2>
      </div>
      <p className="text-stone-500 text-sm font-semibold">
        {experience.period}
      </p>
      <ul className="list-disc h-64 pl-5 mt-4 space-y-3 text-stone-400 leading-relaxed ">
        {experience.responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
