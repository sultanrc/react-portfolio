import ewsvImg from "../assets/thumbnails/EWS.jpeg";
import v1 from "../assets/thumbnails/V1.jpeg";
import v2 from "../assets/thumbnails/V2.jpeg";
import aptImg from "../assets/thumbnails/APT.jpg";
import githubIcon from "../assets/links/GithubLink.svg";
import linkIcon from "../assets/links/Link.svg";

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  techsUsed: string[];
  reverse?: boolean;
  image: string;
  github: {
    icon: string;
    url: string;
  };
  link: {
    icon: string;
    url: string;
  };
};

export const PROJECTS: Project[] = [
  {
    title: "Early Warning System Vue",
    subtitle: "Featured Project",
    description:
      "Early Warning System Vue (EWSV) tracks server room temp and humidity via ESP8266 & DHT11. Data flows to a live web dashboard (Vue.js frontend, Express.js API). I built the UI with Tailwind CSS and implemented alert triggers (>30°C or >80% humidity) to prevent overheating.",
    techsUsed: ["Vue.js", "Tailwind CSS", "Express.js", "Supabase"],
    reverse: true,
    image: ewsvImg,
    github: {
      icon: githubIcon,
      url: "https://github.com/username/early-warning-system-vue",
    },
    link: {
      icon: linkIcon,
      url: "https://early-warning-system-vue.vercel.app",
    },
  },
  {
    title: "Portfolio Website V2",
    subtitle: "Featured Project",
    description:
      "A modern portfolio built with React and TypeScript, featuring a responsive design powered by Tailwind CSS. The site effectively showcases projects and skills through a clean, structured interface that highlights professional experience.",
    techsUsed: ["React.js", "Tailwind CSS", "TypeScript"],
    reverse: true,
    image: v2,
    github: {
      icon: githubIcon,
      url: "https://github.com/username/portfolio-v2",
    },
    link: {
      icon: linkIcon,
      url: "https://portfolio-v2.vercel.app",
    },
  },
  {
    title: "IoT-Based Rat Repeller",
    subtitle: "Featured Project",
    description:
      "A smart IoT device designed to repel rodents using ultrasonic sound. Built with ESP32, ESP32-CAM, PIR sensor for motion detection, and buzzer to emit ultrasonic frequencies. The system detects movement and triggers sound deterrents automatically.",
    techsUsed: ["ESP32-CAM", "PIR Sensor", "WhatsApp API"],
    reverse: false,
    image: aptImg,
    github: {
      icon: githubIcon,
      url: "https://github.com/username/rat-repeller",
    },
    link: {
      icon: linkIcon,
      url: "https://rat-repeller.vercel.app",
    },
  },
  {
    title: "Early Warning System",
    subtitle: "Featured Project",
    description:
      "The original Early Warning System (EWS) was built with CodeIgniter4 for backend logic and Bootstrap for the responsive frontend. This version established the core monitoring framework before being upgraded to the Vue.js/Express.js iteration.",
    techsUsed: ["CodeIgniter4", "Bootstrap", "MySQL", "RedNode"],
    reverse: false,
    image: ewsvImg,
    github: {
      icon: githubIcon,
      url: "https://github.com/username/early-warning-system",
    },
    link: {
      icon: linkIcon,
      url: "https://early-warning-system.example.com",
    },
  },
  {
    title: "Portfolio Website V1",
    subtitle: "Featured Project",
    description:
      "My first portfolio website, built using Vue.js and Tailwind CSS, showcases my skills and projects in a clean, minimalistic design. This responsive layout adapts seamlessly to different screen sizes, ensuring that the user experience remains consistent across devices.",
    techsUsed: ["Vue.js", "Tailwind CSS"],
    reverse: false,
    image: v1,
    github: {
      icon: githubIcon,
      url: "https://github.com/username/portfolio-v1",
    },
    link: {
      icon: linkIcon,
      url: "https://portfolio-v1.vercel.app",
    },
  },
];
