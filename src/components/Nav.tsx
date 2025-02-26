import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../assets/images/logo.png";

import config from "../config.json";

interface Props {
  isAbsolute: boolean;
}

const Nav = ({ isAbsolute }: Props) => {
  const [showNav, setShowNav] = useState(false);
  gsap.registerPlugin(useGSAP);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const mobileNavRef = useRef<HTMLUListElement>(null);

  const { contextSafe } = useGSAP(() => {
    tl.current = gsap.timeline();

    tl.current.to(mobileNavRef.current, {
      height: "auto",
      duration: 0.3,
      ease: "power1.inOut",
    });
  });

  const toggleTimeline = contextSafe(() => {
    setShowNav(!showNav);
  });

  useEffect(() => {
    if (showNav) {
      tl.current && tl.current.play();
    } else {
      tl.current && tl.current.reverse();
    }
  }, [showNav]);

  return (
    <div>
      <div
        className={`navbar z-50 ${
          isAbsolute ? "absolute top-0 left-0 bg-transparent" : "bg-secondary"
        } max-md:hidden py-4`}
      >
        <div className="navbar-start">
          <a className="btn btn-ghost btn-lg" href="/">
            <img src={logo.src} className="h-full w-full" alt="logo" />
          </a>
        </div>
        <div
          className={`navbar-center hidden lg:flex ${
            isAbsolute ? "text-gray-300" : "text-secondary-content"
          }`}
        >
          <ul className="menu menu-horizontal px-1">
            {config.pages.map((page, index) => (
              <li
                key={index}
                className={`text-xl font-medium ${
                  isAbsolute
                    ? "hover:text-stone-100"
                    : "hover:text-secondary-content/80"
                } transition`}
              >
                <a href={page.url}>{page.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a href={config.bookingLink} className="btn btn-primary text-white">
            Call Us Today
          </a> */}
        </div>
      </div>
      <div
        className={`flex flex-col ${
          isAbsolute ? "absolute top-0 left-0" : ""
        }  w-full h-full z-50 md:hidden`}
      >
        <div className="flex justify-between items-center py-4 px-4 sticky">
          <a className="btn btn-ghost btn-lg" href="/">
            <img src={logo.src} className="w-24" alt="logo" />
          </a>
          <button className="btn btn-ghost" onClick={toggleTimeline}>
            <Icon
              icon={showNav ? "mdi:close" : "mdi:menu"}
              className="text-5xl text-base-100"
            />
          </button>
        </div>
        <ul
          ref={mobileNavRef}
          className={`flex flex-col overflow-hidden z-50 bg-stone-100 h-0`}
        >
          {config.pages.map((page, index) => (
            <li key={index} className="py-4 px-8">
              <a className="link link-hover" href={page.url}>
                {page.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
