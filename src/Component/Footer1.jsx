import React from "react";
import Logo from "./Logo";
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";

const SocialLinks = [
  {
    link: "https://www.facebook.com/Printify/",
    icon: <FaFacebookF />,
  },
  {
    link: "https://www.instagram.com/printify/",
    icon: <FiInstagram />,
  },
  {
    link: "https://www.linkedin.com/company/printify/",
    icon: <TiSocialLinkedin />,
  },
  {
    link: "https://x.com/printify",
    icon: <FaXTwitter />,
  },
  {
    link: "https://www.youtube.com/c/printify",
    icon: <TiSocialYoutube />,
  },
  {
    link: "about:blank",
    icon: <FaTiktok />,
  },
  {
    link: "about:blank",
    icon: <FaRedditAlien />,
  },
];

const Footer1 = () => {
  return (
    <>
      <footer>
        <div className="lg:w-[100vw] flex-wrap my-10 md:w-[100vw]  sm:w-[100vw] xs:w-[100vw]  flex items-center justify-between h-[5rem]">
          <Logo />
          <div className="sm:w-full xs:w-full md:w-[50%]  lg:w-[50%] p-2 flex gap-3 lg:justify-center md:justify-center ">
            {SocialLinks.map((curr, id) => (
              <div
                key={id}
                className="w-[2.1rem] min-w-[2.1rem] flex text-2xl text-white justify-center items-center h-[2.1rem] bg-green-500 rounded-full"
              >
                <a href={curr.link}>{curr.icon}</a>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer1;
