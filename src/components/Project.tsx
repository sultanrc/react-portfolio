import { PROJECTS } from "../constants/projects";

type ProjectProps = {
  showAll: boolean;
};

export default function Project({ showAll }: ProjectProps) {
  const projectsToDisplay = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col gap-10 text-right">
      {projectsToDisplay.map((project, index) => (
        <div
          key={index}
          className={`flex gap-10 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
        >
          <img src="" alt={project.title} className="sm:w-1/2 hidden sm:flex" />
          <div
            className={`sm:w-1/2 flex flex-col ${
              index % 2 === 1 ? "text-left items-start" : "text-right items-end"
            }`}
          >
            <p className="text-sm text-accent">{project.subtitle}</p>
            <h1 className="text-lg font-semibold text-textPrimary">
              {project.title}
            </h1>
            <div className="bg-stone-800 text-textSecondary text-sm md:text-[15px] mt-4 p-6">
              {project.description}
            </div>
            <div
              className={`mt-4 flex flex-wrap gap-4 text-xs ${
                index % 2 === 1 ? "justify-start" : "justify-end"
              } text-textSecondary tracking-wider`}
            >
              {project.techsUsed.map((techUsed, idx) => (
                <span key={idx}>{techUsed}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
