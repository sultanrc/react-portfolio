import { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
  position: "left" | "right";
};

export default function Sidebar({ children, position }: SidebarProps) {
  const positionClass = position === "left" ? "left-0" : "right-6";

  return (
    <div
      className={`fixed ${positionClass} top-32 w-[10%] h-[calc(100vh-128px)] bg-primary flex flex-col items-center justify-end text-white`}
    >
      {children}
      <div className="w-[3px] h-40 bg-stone-400"></div>
    </div>
  );
}
