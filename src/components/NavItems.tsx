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
        className="flex items-center gap-2 hover:text-gray-300 transition"
      >
        <span className="inline-flex items-center justify-center w-6 h-6 text-xs border border-white rounded-md">
          {navItemNumber}
        </span>
        {navItemName}
      </a>
    </li>
  );
}
