
import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
  FaServer,
  FaMicrochip,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiHostinger,
  SiMysql,
  SiPhp,
  SiArduino,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// Data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          FaNodeJs,
        ],
      },
      {
        title: "Database & Backend",
        icons: [
          FaDatabase,
          SiMysql,
          SiPhp,
        ],
      },
      {
        title: "Tools & Version Control",
        icons: [
          FaGitAlt,
          FaGithub,
        ],
      },
      {
        title: "Programming",
        icons: [
          FaPython,
          FaJava,
        ],
      },
      {
        title: "Hardware",
        icons: [
          SiArduino,
          FaMicrochip,
        ],
      },
      {
        title: "Deployment",
        icons: [
          SiHostinger,
          FaServer,
        ],
      },
    ],
  },

  {
    title: "certificates",
    info: [
      {
        title: "Secure Web Developmentl",
        stage: "on Social Media",
        file: "/cert11.png",
      },
      {
        title: "IoT Innovator",
        stage: "Build, Connect and Automate with Arduino",
        file: "/cert12.png",
      },
      {
        title: "AI-Powered Multimedia",
        stage: "Certificate",
        file: "/cert13.png",
      },
      {
        title: "Connected but Protected",
        stage: "IoT Security Essentials for a Safer World",
        file: "/cert14.png",
      },
      {
        title: "The Web Developer Blueprint",
        stage: "Certificate",
        file: "/cert15.png",
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Teleperformance",
        stage: "Nicholas Holiday Account | Oct 2024 - Dec 2024",
        file: "/coe1.pdf",
      },
      {
        title: "Alorica By the Bay",
        stage: "Ticketing Account | Feb 2025 - Apr 2025",
        file: "/coe2.pdf",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">

          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building{" "}
            <span className="text-accent">skills</span>{" "}
            through learning and real-world experience.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
           Information Technology professional with practical experience in full-stack web development, database administration, data analytics, and computer systems. Skilled in various web technologies, programming languages, relational database systems, Arduino programming, and cloud deployment. Additionally, brings experience in the BPO industry, with strong abilities in communication, technical troubleshooting, problem-solving, and providing customer-focused support.
          </motion.p>

        </div>

        {/* Information */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >

          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <button
                type="button"
                key={itemI}
                onClick={() => setIndex(itemI)}
                className={`capitalize xl:text-lg relative cursor-pointer
                  after:content-[''] after:absolute after:left-0
                  after:-bottom-1 after:h-[2px] after:transition-all
                  after:duration-300
                  ${
                    index === itemI
                      ? "text-accent after:w-full after:bg-accent"
                      : "text-white after:w-8 after:bg-white"
                  }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Information */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-4 xl:gap-y-5 items-center xl:items-start overflow-y-auto">

            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col md:flex-row max-w-full gap-x-2 items-center text-center text-white/60"
              >

                {/* Clickable certificate or experience text */}
                {item.file ? (
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${item.title} - ${item.stage}`}
                    className="group flex flex-col md:flex-row items-center gap-x-2 cursor-pointer transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    <span className="font-light mb-1 md:mb-0 group-hover:underline">
                      {item.title}
                    </span>

                    <span className="hidden md:inline">
                      -
                    </span>

                    <span className="text-sm group-hover:underline">
                      {item.stage}
                    </span>
                  </a>
                ) : (
                  <>
                    {/* Regular title */}
                    <div className="font-light mb-2 md:mb-0">
                      {item.title}
                    </div>

                    <div className="hidden md:flex">
                      -
                    </div>

                    {/* Regular description */}
                    <div className="text-sm">
                      {item.stage}
                    </div>
                  </>
                )}

                {/* Skill icons */}
                {item.icons && (
                  <div className="flex gap-x-4 mt-2 md:mt-0">
                    {item.icons.map((Icon, iconI) => (
                      <div
                        key={iconI}
                        className="text-2xl text-white"
                      >
                        <Icon />
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))}

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
