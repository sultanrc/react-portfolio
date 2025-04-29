import { motion } from "framer-motion";
import { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
  position: "left" | "right";
};

export default function Sidebar({ children, position }: SidebarProps) {
  const positionClass = position === "left" ? "left-0" : "right-0";

  const sidebarVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.5, delay: 2 },
    },
  };

  return (
    <motion.div
      className={`hidden fixed ${positionClass} top-32 w-[10%] h-[calc(100vh-128px)] lg:flex flex-col items-center justify-end bg-transparent`}
      variants={sidebarVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      {children}
      <div className="w-[1px] h-28 bg-accent"></div>
    </motion.div>
  );
}
