import { TECH_STACK } from "../data";
import profileImage from "../assets/Sultan.jpg";
export default function About() {
  return (
    <div className="flex items-center min-h-screen text-white px-40">
      <div className="flex gap-10">
        <div className="w-3/5 flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center w-8 h-8 text-xl border border-white rounded-md">
                1
              </span>
              <h2 className="text-4xl font-semibold">About Me</h2>
            </div>
            <div className="flex-grow h-px bg-white"></div>
          </div>

          <p className="text-xl text-stone-400 mb-6 leading-relaxed">
            Hello, world, I'm Sultan! I build websites and make them look good.
            I first fell in love with this work in 2023 during my internship,
            where I got to design a dashboard screen in Figma and then turn it
            into a real webpage using HTML and CSS. Seeing my designs come to
            life on the screen was so exciting – that's when I knew this was for
            me!
          </p>
          <p className="text-xl text-stone-400 mb-8 leading-relaxed">
            As a fresh Computer Science graduate, I’ve honed my skills further
            through hands-on experience, including an internship at PetroChina
            International Jabung Ltd as an IT Support & Developer, where I
            bridged technical solutions with user needs.
          </p>

          <div>
            <p className="text-xl text-stone-400 mb-4 font-medium">
              Here’s the tech I love working with:
            </p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-xl text-stone-400 list-disc pl-5">
              {TECH_STACK.map((techItems, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4 text-xs border border-white rounded-md">
                    {index + 1}
                  </span>
                  {techItems}
                </li>
              ))}
            </div>
          </div>
        </div>
        <img
          src={profileImage}
          className="w-2/5 h-[450px] object-cover border-2 border-white rounded-xl mt-4"
        />
      </div>
    </div>
  );
}
