import Image from "next/image";
import { createPortal } from "react-dom";
import React, { useEffect, useState } from "react";
import { Menu } from "./menu";
import "./global.css";
import LocaleSwitcher from "../locale/LocaleSwitcher";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolling(window.scrollY > 1218);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const header = (
    <>
      <header className="header fixed w-full s:py-32 py-20 top-0 left-0 z-50 ">
        <div className="-container flex items-center justify-between">
          <a className="header__logo relative flex items-center s:block s:w-160 w-120">
            <Image
              src="/platform.svg"
              width={160}
              height={160}
              alt="Platform logo as svg"
            />
            <div className="mb-[2px] flex items-center">
              <LocaleSwitcher />
            </div>
          </a>
          <div className="flex items-center gap-x-5 s:gap-x-24">
            <button
              className={`header__toggler rounded-full order-2 s:order-1  ${
                isScrolling ? "shadow-lg bg-white" : ""
              }`}
              title="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                // Cross icon
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1"
                    y1="1"
                    x2="22"
                    y2="22"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <line
                    x1="1"
                    y1="22"
                    x2="22"
                    y2="1"
                    stroke="#000"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  width="23"
                  height="19"
                  viewBox="0 0 23 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isScrolling && (
                    <g>
                      <path
                        d="M0 1.875L22.4103 1.875"
                        stroke="#000"
                        strokeWidth="2"
                      />
                      <path d="M0 9.625H23" stroke="#000" strokeWidth="2" />
                      <path
                        d="M0 17.125L22.4103 17.125"
                        stroke="#000"
                        strokeWidth="2"
                      />
                    </g>
                  )}
                  {!isScrolling && (
                    <g>
                      <path
                        d="M0 1.875L22.4103 1.875"
                        stroke="#FFF"
                        strokeWidth="2"
                      />
                      <path d="M0 9.625H23" stroke="#FFF" strokeWidth="2" />
                      <path
                        d="M0 17.125L22.4103 17.125"
                        stroke="#FFF"
                        strokeWidth="2"
                      />
                    </g>
                  )}
                </svg>
              )}
            </button>
            <a
              className={`button button--white s:order-2  ${
                isScrolling ? "shadow-lg bg-white" : ""
              }`}
              href="#contact"
            >
              <span className="inner hidden s:block">Get in touch</span>
              <span className="inner s:hidden block">Contact</span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L16 16M16 16H1M16 16V1"
                  stroke="#0C0C0C"
                  strokeWidth="2"
                ></path>
                <path
                  d="M1 1L16 16M16 16H1M16 16V1"
                  stroke="#0C0C0C"
                  strokeWidth="2"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </header>
      <Menu menuOpen={menuOpen} />
    </>
  );
  return createPortal(header, document.body);
}
