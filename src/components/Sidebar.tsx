import { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
  position: "left" | "right";
};

export default function Sidebar({ children, position }: SidebarProps) {
  const positionClass = position === "left" ? "left-0" : "right-0";

  return (
    <div
      className={`hidden fixed ${positionClass} top-32 w-[10%] h-[calc(100vh-128px)] lg:flex flex-col items-center justify-end text-white`}
    >
      {children}
      <div className="w-[3px] h-28 bg-stone-400"></div>
    </div>
  );
}
