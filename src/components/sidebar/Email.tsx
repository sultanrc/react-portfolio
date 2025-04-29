export default function Email() {
  return (
    <a className="relative group rotate-[90deg] origin-center mb-24 text-textSecondary hover:text-accent text-md">
      soeltaan@gmail.com
      <span className="absolute bottom-1 left-0 w-full h-[1px] bg-textSecondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </a>
  );
}
