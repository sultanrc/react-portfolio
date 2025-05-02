import { motion } from "framer-motion";
import Header from "../Header";
import TechStack from "./TechStack";
import Section from "../Section";
import Photo from "./Photo";

export default function About() {
  return (
    <Section>
      <div
        id="about"
        className="flex flex-col lg:flex-row gap-10 lg:gap-20  xl:mx-16 2xl:mx-20  xl:pt-36"
      >
        <div className="lg:w-3/5 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Header headerNumber="1" headerName="About Me" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }} // Delay agar muncul setelah header
          >
            <div className="text-xs md:text-[16px] text-stone-400 mb-4 leading-relaxed">
              <p>
                Hello, world, I'm Sultan! I build websites and make them look
                good. I first fell in love with this work in 2023 during my
                internship, where I got to design a dashboard screen in Figma
                and then turn it into a real webpage using HTML and CSS. Seeing
                my designs come to life on the screen was so exciting – that's
                when I knew this was for me!
              </p>

              <p className="mt-4">
                As a{" "}
                <a
                  href="#experiences"
                  className="relative text-accent group inline-block"
                >
                  fresh Computer Science graduate
                  <span className="absolute bottom-1 left-0 w-full h-[1px] bg-textPrimary origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
                , I’ve honed my skills further through hands-on experience,
                including an{" "}
                <a
                  href="#experiences"
                  className="relative text-accent group inline-block"
                >
                  internship at PetroChina International Jabung Ltd
                  <span className="absolute bottom-1 left-0 w-full h-[1px] bg-textPrimary origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>{" "}
                as an IT Support & Developer, where I bridged technical
                solutions with user needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TechStack />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <Photo />
        </motion.div>
      </div>
    </Section>
  );
}
