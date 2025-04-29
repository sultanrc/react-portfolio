import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Header";
import Section from "../Section";
import Experience from "./Experience";
import TabButton from "./TabButton";

export default function Experiences() {
  const [selectedTab, setTab] = useState(0);

  const handleTab = (index: number) => {
    setTab(index);
  };

  return (
    <Section>
      <div
        id="experiences"
        className="w-full flex flex-col justify-center md:justify-start lg:mx-24 lg:pt-36"
      >
        <motion.div
          className="flex flex-col gap-4 md:gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Header headerNumber="2" headerName="Experiences" />
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TabButton selectedTabProps={selectedTab} onTabClick={handleTab} />
          <div className="md:w-[75%] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab} // kunci supaya motion tau tab ganti
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Experience selectedTabProps={selectedTab} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
