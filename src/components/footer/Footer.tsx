import { FOOTER } from "../../constants/footer";
import Links from "../sidebar/Links";

export default function Footer() {
  return (
    <>
      <div className="lg:hidden">
        <Links />
      </div>
      <footer className="flex flex-col mt-10 pb-4 items-center justify-center text-textSecondary text-sm">
        <p>Designed and developed in 2025 by</p>
        <div className="flex py-2 gap-4">
          <p className="text-sm">Muhammad Sultan</p>
          <span>+</span>
          {FOOTER.techUsed.map((tech, index) => (
            <img
              key={index}
              src={tech.image}
              alt={tech.alt}
              className="h-4 w-auto  transition"
            />
          ))}
        </div>
      </footer>
    </>
  );
}
