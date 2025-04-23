import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

export default function Main({ children }: MainProps) {
  return (
    <div className="ml-[10%] mr-[10%] w-[80%] min-h-[calc(100vh-128px)]">
      {children}
    </div>
  );
}
