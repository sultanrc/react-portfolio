import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpWithDelay = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay } },
});

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex items-center min-h-[calc(100vh-140px)] mx-4 md:mx-20 lg:mx-40 2xl:mx-60"
    >
      <div className="w-full flex flex-col items-center justify-center md:justify-start lg:mx-24">
        <motion.div
          className="flex items-center gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 text-sm md:text-xl border-2 border-accent text-accent rounded-md">
            4
          </span>
          <h1 className="text-lg md:text-4xl font-semibold text-accent">
            Let's connect
          </h1>
        </motion.div>
        <motion.h1
          className="text-3xl md:text-[60px] font-semibold my-2 md:my-4 text-textPrimary"
          variants={fadeUpWithDelay(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          I'm open to work!
        </motion.h1>
        <motion.p
          className="mt-4 mx-4 md:mx-20 text-xs md:text-lg text-stone-400 text-center"
          variants={fadeUpWithDelay(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          I'm early in my career and actively looking for opportunities to
          grow—whether internships, freelance work, or junior developer roles.
          While I'm still gaining experience, I'm eager to contribute, learn,
          and collaborate on meaningful projects. If you have an opportunity or
          just want to connect,
        </motion.p>
        <motion.p
          className="text-xs md:text-lg text-accent"
          variants={fadeUpWithDelay(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          I'd love to hear from you!
        </motion.p>
        <motion.a
          href="#contact"
          className="w-fit mt-6 md:mt-10 mx-auto text-sm transition border border-textPrimary text-textPrimary py-3 px-8 rounded-lg"
          variants={fadeUpWithDelay(1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Hit Me Up!
        </motion.a>
      </div>
    </div>
  );
}
