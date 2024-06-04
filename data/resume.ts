import type { IconType } from "@icons-pack/react-simple-icons"
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiBun,
  SiCss3,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "@icons-pack/react-simple-icons"

type ResumeLink = {
  type: "website" | "email" | "github" | "linkedin"
  text: string
  url: string
}

type ResumeExperience = {
  id: string
  title: string
  company: string
  logo: string
  tags: string[]
  date: string
  contributions: Array<{
    title: string
    items: string[]
  }>
}

type ResumeCertification = {
  degree: string
  school: string
  date: string
}

type ResumeSkill = {
  title: string
  items: Array<{
    name: string
    Icon: IconType
  }>
}

type ResumeLanguage = {
  name: string
  level: string
  flag: string
}

type ResumeHobby = {}

export type ResumeData = {
  name: string
  titles: string[]
  about: {
    title: string
    description: string
  }
  links: ResumeLink[]
  experiences: ResumeExperience[]
  certifications: ResumeCertification[]
  skills: ResumeSkill[]
  languages: ResumeLanguage[]
  hobbys: ResumeHobby[]
}

export const resumeData = {
  name: "Djobbo Maiga",
  titles: ["Web Development", "UI Design", "Logo Design"],
  about: {
    title: "Heya 👋, I'm Djobbo,",
    description: `I'm a Web Developer and UI Designer specializing in **React**, **TypeScript**, and **Tailwind** in order to craft beautiful and accessible web applications.
      Let's build something awesome together!`,
  },
  links: [
    {
      url: "https://djobbo.com",
      text: "djobbo.com",
      type: "website",
    },
    {
      url: "mailto:hi@djobbo.com",
      text: "hi@djobbo.com",
      type: "email",
    },
    {
      url: "https://github.com/djobbo",
      text: "djobbo",
      type: "github",
    },
    {
      url: "https://linkedin.com/in/djobbo",
      text: "djobbo",
      type: "linkedin",
    },
  ],
  experiences: [
    {
      id: "klaxoon",
      title: "Frontend Engineer",
      company: "Klaxoon",
      logo: "/assets/imgs/klaxoon.png",
      tags: ["Fulltime", "Remote"],
      date: "2022 - Present",
      contributions: [
        {
          title: "Maintained the flagship Whiteboard:",
          items: [
            "Tackled technical and UI challenges with **React**, **TypeScript**, and **MobX**.",
            "Actively monitored the whiteboard’s performances.",
            "Integrated advanced **AI features** into the whiteboard application.",
          ],
        },
        {
          title: "Contributed to the enhancement of the developer experience:",
          items: [
            "Developed internal tools such as command autocompletion and **Gitlab** CI scripts.",
            "Implemented **Module Federation** with **Webpack** for scalable and modular micro-frontends",
            "Integrated **NX** to manage the monorepo.",
          ],
        },
        {
          title:
            "Maintained a video conferencing system using **Amazon Chime SDK**:",
          items: [
            "Implemented a new UI.",
            "Added a background replacement and blurring feature.",
          ],
        },
      ],
    },
    {
      id: "corehalla",
      title: "Fullstack Developer and Designer",
      company: "Corehalla",
      logo: "/assets/imgs/corehalla.png",
      tags: ["Personal Project", "Open Source"],
      date: "2018 - Present",
      contributions: [
        {
          title:
            "Developed a fullstack application for Corehalla, a statistics platform for the game Brawlhalla:",
          items: [
            "Designed and developed the UI with **Typescript**, **React** and **Tailwind CSS**.",
            "Implemented the backend with **Node.js** and **tRPC**.",
            "Integrated **Supabase**, a **PostgreSQL** database.",
          ],
        },
        {
          title: "Designed the branding, Website UI, color palette and logo.",
          items: [],
        },
        {
          title: "Developed a Discord bot for Corehalla:",
          items: [
            "Implemented a Discord bot with Discord.js to manage Corehalla's Discord server.",
            "Created a lobby system to manage voice channels.",
          ],
        },
      ],
    },
  ],
  certifications: [
    {
      degree: "Driver's License",
      school: "Dominique Formation, Alençon",
      date: "2017",
    },
    {
      degree: "Baccalauréat Scientifique",
      school: "Lycée Marguerite de Navarre, Alençon",
      date: "2014-2017",
    },
    {
      degree: "Diplôme National du Brevet",
      school: "Collège Saint-Exupéry, Alençon",
      date: "2011-2014",
    },
    {
      degree: "Men's Artistic Gymnastics Judge",
      school: "Avant-Garde Caennaise Gymnastique, Caen",
      date: "2011",
    },
  ],
  skills: [
    {
      title: "Languages",
      items: [
        { name: "HTML5", Icon: SiHtml5 },
        { name: "CSS3", Icon: SiCss3 },
        { name: "JavaScript", Icon: SiJavascript },
        { name: "TypeScript", Icon: SiTypescript },
        { name: "SCSS/SASS", Icon: SiSass },
        { name: "Python", Icon: SiPython },
      ],
    },
    {
      title: "Libraries / Frameworks",
      items: [
        { name: "NodeJS", Icon: SiNodedotjs },
        { name: "Bun", Icon: SiBun },
        { name: "React", Icon: SiReact },
        { name: "NextJS", Icon: SiNextdotjs },
        { name: "Tailwind", Icon: SiTailwindcss },
        { name: "Jest", Icon: SiJest },
      ],
    },
    {
      title: "Tools / Software",
      items: [
        { name: "VS Code", Icon: SiVisualstudiocode },
        { name: "Figma", Icon: SiFigma },
        { name: "Photoshop", Icon: SiAdobephotoshop },
        {
          name: "Illustrator",
          Icon: SiAdobeillustrator,
        },
        { name: "Git", Icon: SiGit },
      ],
    },
  ],
  languages: [
    {
      name: "Français",
      level: "Native",
      flag: "/assets/imgs/flag_fr.png",
    },
    {
      name: "English",
      level: "Professional",
      flag: "/assets/imgs/flag_en.png",
    },
    {
      name: "Deutsch",
      level: "Rusty A2",
      flag: "/assets/imgs/flag_de.png",
    },
    {
      name: "日本語",
      level: "Beginner",
      flag: "/assets/imgs/flag_jp.png",
    },
  ],
  hobbys: [],
} as const satisfies ResumeData
