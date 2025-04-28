import { motion } from "framer-motion";
import { PROJECTS } from "../../constants/projects";

type ProjectProps = {
  showAll: boolean;
};

export default function Project({ showAll }: ProjectProps) {
  const projectsToDisplay = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col lg:gap-16 text-right">
      {projectsToDisplay.map((project, index) => (
        <motion.div
          key={index}
          className={`flex gap-10 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="sm:w-1/2 hidden sm:flex rounded-lg shadow-xl hover:shadow-[0_0_15px_5px_var(--accent)]"
          />
          <div
            className={`sm:w-1/2 flex flex-col ${
              index % 2 === 1
                ? "text-left items-start"
                : "text-left items-start md:text-right md:items-end"
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
              className={`mt-4 flex flex-wrap gap-4 text-[10px] md:text-xs ${
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
