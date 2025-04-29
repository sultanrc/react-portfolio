import { LINKS } from "../../constants/about";

export default function Links() {
  const iconClass = "w-6 h-6 cursor-pointer ";
  return (
    <div className="flex lg:flex-col items-center justify-center lg:items-start gap-10 mb-6 lg:mb-10">
      {LINKS.map((link) => (
        <a
          key={link.alt}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 transition hover:animate-pulse hover:scale-150 hover:rotate-[-15deg]"
        >
          <img src={link.img} alt={link.alt} className={iconClass} />
        </a>
      ))}
    </div>
  );
}
