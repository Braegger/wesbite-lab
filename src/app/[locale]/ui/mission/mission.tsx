"use client";

import { useEffect, useRef } from "react";
import "./global.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"; // nur mit GSAP-Club-Zugang
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Mission() {
  const paragraphRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const t = useTranslations("Mission");

  useEffect(() => {
    console.clear();

    if (!paragraphRef.current) return;

    const split = new SplitText(paragraphRef.current, { type: "lines" });

    split.lines.forEach((line) => {
      // Setze initiale Position
      gsap.set(line, {
        backgroundPositionX: "100%",
      });

      gsap.to(line, {
        backgroundPositionX: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: line,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          // markers: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      split.revert();
    };
  }, []);
  const mission = (
    <div className="description">
      <div className="-container">
        {" "}
        <div className="-grid pt-80" data-animation="bar">
          {" "}
          <div className="col-span-12 s:col-span-4">
            {" "}
            <h2 className="text-p" data-animation="title">
              <span>
                <div>Our Mission</div>
              </span>
            </h2>{" "}
          </div>{" "}
          <div className="col-span-12 s:col-span-8">
            {" "}
            <h3 className="h2" data-animation="description">
              <div>
                <div data-animation="paragraph">
                  <div className="text">
                    <p ref={paragraphRef}>{t("title")}</p>
                  </div>
                </div>{" "}
              </div>
            </h3>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
  return mission;
}
