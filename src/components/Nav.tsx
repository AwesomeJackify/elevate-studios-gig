import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../assets/images/logo.png";

import config from "../config.json";

const Nav = () => {
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
      <div className="navbar z-50 bg-transparent absolute top-0 left-0 max-md:hidden py-4">
        <div className="navbar-start">
          <a className="btn btn-ghost btn-lg" href="/">
            <img src={logo.src} className="w-44" alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex text-gray-300">
          <ul className="menu menu-horizontal px-1">
            {config.pages.map((page, index) => (
              <li key={index} className="text-xl hover:text-white transition">
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
      <div className="flex flex-col">
        <div className="flex justify-between items-center py-4 px-4 md:hidden sticky">
          <a className="btn btn-ghost btn-lg" href="/">
            <img src={logo.src} className="w-44" alt="logo" />
          </a>
          <button className="btn btn-ghost" onClick={toggleTimeline}>
            <Icon
              icon={showNav ? "mdi:close" : "mdi:menu"}
              className="text-5xl"
            />
          </button>
        </div>
        <ul ref={mobileNavRef} className={`flex flex-col overflow-hidden h-0`}>
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