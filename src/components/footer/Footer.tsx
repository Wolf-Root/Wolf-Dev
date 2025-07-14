import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks: {
  icon: React.ReactNode;
  link: string;
  color: string;
  ariaLabel: string;
}[] = [
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/",
    color: "#3b5999",
    ariaLabel: "facebook",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/",
    color: "#e4405f",
    ariaLabel: "instagram",
  },
  {
    icon: <FaXTwitter />,
    link: "https://x.com/",
    color: "#aab8c2",
    ariaLabel: "x",
  },
  {
    icon: <FaYoutube />,
    link: "https://youtube.com/",
    color: "#cd201f",
    ariaLabel: "youtube",
  },
];

export default function Footer() {
  return (
    <footer className="container mx-auto h-16 flex flex-col-reverse md:flex-row items-center justify-between">
      <p className="text-lg opacity-80">
        ©{new Date().getUTCFullYear()}{" "}
        <span className="text-success font-semibold">WolfDev.</span> All rights
        reserved.
      </p>

      <ul className="flex gap-5 text-xl">
        {socialLinks.map(({ icon, link, color, ariaLabel }, index) => (
          <li
            key={index}
            style={{ color: color }}
            className="duration-300 hover:scale-110"
          >
            <a href={link} aria-label={ariaLabel}>
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
