import { PROJECTS } from "../constants/projects";

export default function Project() {
  return (
    <div className="flex flex-col gap-10 text-right">
      {PROJECTS.map((project, index) => (
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
            <p className="text-sm">{project.subtitle}</p>
            <h1 className="text-lg font-semibold">{project.title}</h1>
            <div className="bg-stone-800 text-stone-400 text-sm md:text-[15px] mt-4 p-3">
              {project.description}
            </div>
            <div
              className={`mt-4 flex flex-wrap gap-4 text-xs ${
                index % 2 === 1 ? "justify-start" : "justify-end"
              } text-stone-400 tracking-wider`}
            >
              {project.techsUsed.map((techUsed, index) => (
                <span key={index}>{techUsed}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
