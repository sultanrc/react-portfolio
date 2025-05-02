import profileImage from "../../assets/Sultan.jpg";
import { motion } from "framer-motion";

export default function Photo() {
  return (
    <div className="relative w-full max-w-[200px] md:max-w-[300px] lg:max-w-[220px] xl:max-w-[300px] aspect-square mx-auto lg:mx-0 mt-10 group">
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-textSecondary group-hover:border-accent"
        initial={{ rotate: 0 }}
        whileInView={{ rotate: 12 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 2.2 }}
      />
      <div className="absolute inset-2 rounded-lg group-hover:-rotate-12 group-hover:bg-accent transition-all duration-300 ease-in-out" />
      <img
        src={profileImage}
        alt="Profile"
        className="w-full h-full object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out relative z-10 border-2 border-textSecondary group-hover:border-accent"
      />
    </div>
  );
}
