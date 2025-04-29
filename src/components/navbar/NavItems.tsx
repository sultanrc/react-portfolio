import { ReactNode, AnchorHTMLAttributes } from "react";

type NavItemsProps = {
  navItemName: ReactNode;
  navItemNumber?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function NavItems({
  navItemName,
  navItemNumber,
  ...props
}: NavItemsProps) {
  return (
    <li>
      <a
        {...props}
        className="flex items-center gap-2 hover:text-gray-300 text-xs transition"
      >
        <span className="inline-flex items-center justify-center w-5 h-5 text-xs border border-accent text-accent rounded-md">
          {navItemNumber}
        </span>
        <span className="relative group text-textPrimary">
          {navItemName}
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-textPrimary origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
        </span>
      </a>
    </li>
  );
}
