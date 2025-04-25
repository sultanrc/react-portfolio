export type Project = {
  title: string;
  subtitle: string;
  description: string;
  techsUsed: string[];
  reverse?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: "Early Warning System Vue",
    subtitle: "Featured Project",
    description:
      "Early Warning System Vue (EWSV) tracks server room temp and humidity via ESP8266 & DHT11. Data flows to a live web dashboard (Vue.js frontend, Express.js API). I built the UI with Tailwind CSS and implemented alert triggers (>30°C or >80% humidity) to prevent overheating.",
    techsUsed: ["Vue.js", "Tailwind CSS", "Express.js", "Supabase"],
    reverse: true,
  },
  {
    title: "Early Warning System",
    subtitle: "Featured Project",
    description:
      "The original Early Warning System (EWS) was built with CodeIgniter4 for backend logic and Bootstrap for the responsive frontend. This version established the core monitoring framework before being upgraded to the Vue.js/Express.js iteration.",
    techsUsed: ["CodeIgniter4", "Bootstrap"],
    reverse: false,
  },
  {
    title: "React Portfolio Website",
    subtitle: "Featured Project",
    description:
      "A modern portfolio built with React and TypeScript, featuring a responsive design powered by Tailwind CSS. The site effectively showcases projects and skills through a clean, structured interface that highlights professional experience.",
    techsUsed: ["React.js", "Tailwind CSS", "TypeScript"],
    reverse: true,
  },
];
