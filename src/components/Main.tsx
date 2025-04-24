import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

export default function Main({ children }: MainProps) {
  return <div className="w-full mx-10 md:mx-20">{children}</div>;
}
