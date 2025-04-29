type ButtonProps = {
  onClickButton?: () => void;
  children: React.ReactNode;
  classProps?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  onClickButton = () => {},
  children,
  classProps = "px-4 py-2",
  ...props
}: ButtonProps) {
  return (
    <a
      onClick={onClickButton}
      className={`cursor-pointer inline-block border border-accent text-sm hover:bg-accent hover:text-stone-700 text-textPrimary transition rounded-lg overflow-hidden ${classProps}`}
      {...props}
    >
      {children}
    </a>
  );
}
