import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

export default function Main({ children }: MainProps) {
  return <div className="w-full mx-4 xl:mx-20 2xl:mx-60">{children}</div>;
}
