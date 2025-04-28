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
        <span className="text-textPrimary">{navItemName}</span>
      </a>
    </li>
  );
}
