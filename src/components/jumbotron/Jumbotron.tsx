import { motion } from "framer-motion";
import { JUMBOTRON } from "../../constants/jumbotron";

export default function Jumbotron() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.5,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center">
      <motion.div
        className="flex flex-col items-start gap-6 mx-4 md:mx-20 lg:mx-40"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div className="flex flex-col">
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-light text-textSecondary"
            variants={itemVariants}
          >
            {JUMBOTRON.greeting}
          </motion.p>
          <motion.h1
            className="text-[32px] md:text-[60px] 2xl:text-[80px] font-bold text-textPrimary"
            variants={itemVariants}
          >
            {JUMBOTRON.name}
          </motion.h1>
          <motion.p
            className="text-[22px] md:text-[40px] lg:text-[56px] font-bold text-accent"
            variants={itemVariants}
          >
            {JUMBOTRON.tagline}
          </motion.p>
        </motion.div>
        <motion.p
          className="text-md md:text-2xl font-light text-textSecondary max-w-xl"
          variants={itemVariants}
        >
          I’m a <strong className="text-accent">frontend developer</strong> who
          thrives on learning and innovation. Transforming ideas into stunning
          visuals and seamless digital experiences—one line of code at a time.
          <strong className="text-accent">
            {" "}
            Always evolving, always building.
          </strong>
        </motion.p>
      </motion.div>
    </div>
  );
}
