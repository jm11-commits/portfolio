import Link from "next/link";

import { RiGithubLine, RiLinkedinLine, RiMailLine } from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jm-besmonte-11b267396/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Email",
    link: "mailto:johnmarc.besmonte.work@gmail.com",
    Icon: RiMailLine,
  },
  {
    name: "Github",
    link: "https://github.com/jm11-commits",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target={social.name === "Email" ? "_self" : "_blank"}
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
