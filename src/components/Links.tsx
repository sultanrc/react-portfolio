import { LINKS } from "../constants/about";

export default function Links() {
  const iconClass = "w-6 h-6 cursor-pointer";
  return (
    <div className="flex flex-col items-start gap-10 mb-10">
      {LINKS.map((link) => (
        <a
          key={link.alt}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 transition"
        >
          <img src={link.img} alt={link.alt} className={iconClass} />
        </a>
      ))}
    </div>
  );
}
