// import Section from "./Section";

export default function Contact() {
  return (
    <div className="flex items-center min-h-[calc(100vh-140px)] text-white mx-4 md:mx-20 lg:mx-40 ">
      <div className="w-full flex flex-col items-center justify-center md:justify-start lg:mx-24">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 text-sm md:text-xl border border-white rounded-md">
            4
          </span>
          <h1 className="text-lg md:text-4xl font-semibold">Let's connect</h1>
        </div>
        <h1 className="text-3xl md:text-[60px] font-semibold my-2 md:my-4">
          I'm open to work!
        </h1>
        <p className="mt-4 mx-4 md:mx-20 text-xs md:text-lg text-stone-400 text-center">
          I'm early in my career and actively looking for opportunities to
          grow—whether internships, freelance work, or junior developer roles.
          While I'm still gaining experience, I'm eager to contribute, learn,
          and collaborate on meaningful projects. If you have an opportunity or
          just want to connect,
        </p>
        <p className="text-xs md:text-lg">I'd love to hear from you!</p>
        <a
          href="#contact"
          className="w-fit mt-6 md:mt-10 hover:text-gray-300 mx-auto text-sm transition border border-white py-3 px-8 rounded-lg"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
