import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export default function Section({ children }: SectionProps) {
  return (
    <div className="flex items-center min-h-screen text-white  mx-4 md:mx-20 lg:mx-40">
      {children}
    </div>
  );
}
