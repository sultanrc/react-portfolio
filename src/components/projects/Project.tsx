import { motion } from "framer-motion";
import { PROJECTS } from "../../constants/projects";

type ProjectProps = {
  showAll: boolean;
};

export default function Project({ showAll }: ProjectProps) {
  const projectsToDisplay = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col gap-10 lg:gap-24 text-right">
      {projectsToDisplay.map((project, index) => (
        <motion.div
          key={index}
          className={`flex gap-10  ${
            index % 2 === 1 ? "flex-row-reverse" : ""
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="sm:w-1/2 hidden sm:flex rounded-lg  grayscale hover:grayscale-0 transition duration-500 object-contain"
          />
          <div
            className={`sm:w-1/2 flex flex-col ${
              index % 2 === 1
                ? "text-left items-start"
                : "text-left items-start md:text-right md:items-end"
            }`}
          >
            <div
              className={`w-full flex md:items-end justify-between gap-4 ${
                index % 2 === 0 ? "flex-row md:flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="flex flex-col">
                <p className="text-sm text-accent">{project.subtitle}</p>
                <h1 className="text-lg font-semibold text-textPrimary">
                  {project.title}
                </h1>
              </div>

              <div className="flex items-center gap-2 mt-1">
                {project.github?.url && (
                  <a
                    href={project.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <img
                      src={project.github.icon}
                      alt="GitHub"
                      className="w-5 h-5 md:w-7 md:h-7"
                    />
                  </a>
                )}
                {project.link?.url && (
                  <a
                    href={project.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <img
                      src={project.link.icon}
                      alt="Live Demo"
                      className="w-5 h-5 md:w-7 md:h-7"
                    />
                  </a>
                )}
              </div>
            </div>
            <div className="bg-stone-800 text-textSecondary text-sm md:text-[15px] 2xl:text-[17px] 2xl:leading-relaxed mt-4 p-6">
              {project.description}
            </div>
            <div
              className={`mt-4 flex flex-wrap gap-4 text-[10px] md:text-xs 2xl:text-sm ${
                index % 2 === 1
                  ? "justify-start"
                  : "justify-start md:justify-end"
              } text-textSecondary tracking-wider`}
            >
              {project.techsUsed.map((techUsed, idx) => (
                <span key={idx}>{techUsed}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
