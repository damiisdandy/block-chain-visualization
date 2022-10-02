import { BiLinkAlt } from "react-icons/bi";
import { IconType } from "react-icons";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

interface FooterLinkType extends Pick<LinkType, "href"> {
  icon: IconType;
}

const LINKS: FooterLinkType[] = [
  {
    icon: BiLinkAlt,
    href: "https://www.damiisdandy.com",
  },
  {
    icon: BsGithub,
    href: "https://github.com/damiisdandy/block-chain-visualization",
  },
  {
    icon: BsLinkedin,
    href: "https://www.linkedin.com/in/damiisdandy/",
  },
  {
    icon: BsTwitter,
    href: "https://twitter.com/realdamiisdandy",
  },
];

export const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-7 h-12">
      {LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
};
