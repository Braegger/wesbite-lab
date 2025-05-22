import Image from "next/image";
import { createPortal } from "react-dom";
import React, { useState } from "react";

export function Menu({ menuOpen }: { menuOpen: boolean }) {
  const menu = (
    <div
      className="main-menu flex items-center"
      style={{
        transform: menuOpen
          ? "translate3d(0, 0, 0)"
          : "translate3d(0, -100%, 0)",
        clipPath: menuOpen
          ? "inset(0vh 0rem 0rem)"
          : "inset(-30vh 10.01vw 0rem 10vw round 10vw)",
      }}
    >
      <div className="-container">
        <ul className="grid gap-y-16 s:gap-y-40 ">
          <li className="overflow-hidden">
            {" "}
            <a
              className="main-menu__item flex items-center justify-center gap-x-4 s:gap-x-12"
              href="https://aerleum.com/"
              style={{
                transition: "transform 1s cubic-bezier(.165, .84, .44, 1)",
                transitionDelay: ".3s",
                transform: menuOpen
                  ? "translateZ(0)"
                  : "translate3d(0, 100%, 0)",
              }}
            >
              {" "}
              <span className="h1 uppercase !mb-0">Home</span>
              <div className="main-menu__item__image relative overflow-hidden rounded-2xl">
                <Image
                  className="absolute size-full object-cover"
                  src="https://aerleum.com/wp-content/webp-express/webp-images/uploads/2024/08/Maritime.png.webp"
                  alt=""
                  width={737}
                  height={850}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>{" "}
              <span className="h1 uppercase !mb-0">Page</span>
            </a>{" "}
          </li>
          <li className="overflow-hidden">
            {" "}
            <a
              className="main-menu__item flex items-center justify-center gap-x-4 s:gap-x-12"
              href="https://aerleum.com/"
              style={{
                transition: "transform 1s cubic-bezier(.165, .84, .44, 1)",
                transitionDelay: ".4s",
                transform: menuOpen
                  ? "translateZ(0)"
                  : "translate3d(0, 100%, 0)",
              }}
            >
              {" "}
              <span className="h1 uppercase !mb-0">About</span>
              <div className="main-menu__item__image relative overflow-hidden rounded-2xl">
                <Image
                  className="absolute size-full object-cover"
                  src="https://aerleum.com/wp-content/webp-express/webp-images/uploads/2024/09/pexels-tirachard-kumtanom-112571-450062.png.webp"
                  alt=""
                  width={2130}
                  height={1328}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>{" "}
              <span className="h1 uppercase !mb-0">Us</span>
            </a>{" "}
          </li>
          <li className="overflow-hidden">
            {" "}
            <a
              className="main-menu__item flex items-center justify-center gap-x-4 s:gap-x-12"
              href="https://aerleum.com/"
              style={{
                transition: "transform 1s cubic-bezier(.165, .84, .44, 1)",
                transitionDelay: ".5s",
                transform: menuOpen
                  ? "translateZ(0)"
                  : "translate3d(0, 100%, 0)",
              }}
            >
              {" "}
              <span className="h1 uppercase !mb-0">Our</span>
              <div className="main-menu__item__image relative overflow-hidden rounded-2xl">
                <Image
                  className="absolute size-full object-cover"
                  src="https://aerleum.com/wp-content/webp-express/webp-images/uploads/2024/09/pexels-tirachard-kumtanom-112571-450062.png.webp"
                  alt=""
                  width={2560}
                  height={1706}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>{" "}
              <span className="h1 uppercase !mb-0">Tech</span>
            </a>{" "}
          </li>
          <li className="overflow-hidden">
            {" "}
            <a
              className="main-menu__item flex items-center justify-center gap-x-4 s:gap-x-12"
              href="https://aerleum.com/"
              style={{
                transition: "transform 1s cubic-bezier(.165, .84, .44, 1)",
                transitionDelay: ".6s",
                transform: menuOpen
                  ? "translateZ(0)"
                  : "translate3d(0, 100%, 0)",
              }}
            >
              {" "}
              <span className="h1 uppercase !mb-0">Blog</span>
              <div className="main-menu__item__image relative overflow-hidden rounded-2xl">
                <Image
                  className="absolute size-full object-cover"
                  src="https://aerleum.com/wp-content/webp-express/webp-images/uploads/2024/08/1721983848930.png.webp"
                  alt=""
                  width={1256}
                  height={828}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>{" "}
              <span className="h1 uppercase !mb-0">News</span>
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
  return createPortal(menu, document.body);
}
