import { motion } from "framer-motion";
import { EXPERIENCES } from "../../constants/experiences";

type ExperienceProps = {
  selectedTabProps: number;
};

export default function Experience({ selectedTabProps }: ExperienceProps) {
  const experience = EXPERIENCES[selectedTabProps];

  return (
    <div className="md:w-[75%] flex flex-col">
      <div className="flex flex-col lg:flex-row lg:gap-3">
        <motion.h2
          className="text-lg text-white font-semibold"
          initial={{ opacity: 0, y: 50 }} // Mulai dari bawah
          whileInView={{ opacity: 1, y: 0 }} // Muncul saat di-scroll ke viewport
          viewport={{ once: true }} // Animasi hanya sekali
          transition={{ duration: 0.6 }}
        >
          {experience.role}
        </motion.h2>
        <motion.h2
          className="text-accent text-sm md:text-lg"
          initial={{ opacity: 0, y: 50 }} // Mulai dari bawah
          whileInView={{ opacity: 1, y: 0 }} // Muncul saat di-scroll ke viewport
          viewport={{ once: true }} // Animasi hanya sekali
          transition={{ duration: 0.6, delay: 0.2 }} // Delay sedikit
        >
          @ {experience.company}
        </motion.h2>
      </div>
      <motion.p
        className="text-textSecondary text-sm mt-1 md:mt-0 md:text-md"
        initial={{ opacity: 0, y: 50 }} // Mulai dari bawah
        whileInView={{ opacity: 1, y: 0 }} // Muncul saat di-scroll ke viewport
        viewport={{ once: true }} // Animasi hanya sekali
        transition={{ duration: 0.6, delay: 0.4 }} // Delay lebih lama
      >
        {experience.period}
      </motion.p>
      <motion.ul
        className="text-sm md:text-[15px] list-disc h-[360px] pl-5 mt-4 space-y-3 text-textSecondary leading-relaxed"
        initial={{ opacity: 0, y: 50 }} // Mulai dari bawah
        whileInView={{ opacity: 1, y: 0 }} // Muncul saat di-scroll ke viewport
        viewport={{ once: true }} // Animasi hanya sekali
        transition={{ duration: 0.6, delay: 0.6 }} // Delay lebih lama untuk list
      >
        {experience.responsibilities.map((exp, id) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, y: 50 }} // Mulai dari bawah
            whileInView={{ opacity: 1, y: 0 }} // Muncul saat di-scroll ke viewport
            viewport={{ once: true }} // Animasi hanya sekali
            transition={{ duration: 0.6, delay: id * 0.2 }} // Delay berurutan
          >
            {exp}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
