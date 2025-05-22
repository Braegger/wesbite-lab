"use client";

import { SetStateAction, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { scrollAnimation } from "@/app/lib/animation";
import { List } from "../card/list";
import { AnimatePresence } from "motion/react";
import { Item } from "../card/item";
import { Header } from "../header/header";
import { Mission } from "../mission/mission";

export default function IntroScreen() {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const heroRef = useRef(null);
  const introTextRef = useRef(null);

  const [selectedId, setSelectedId] = useState("");

  const handleCardClick = (id: SetStateAction<string>) => {
    setSelectedId(id);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  useGSAP(
    () => {
      if (!wrapperRef.current || typeof window === "undefined") return;
      scrollAnimation(wrapperRef, imgRef, heroRef, introTextRef);
    },
    { scope: wrapperRef, dependencies: [] }
  );

  return (
    <>
      <div className="wrapper" ref={wrapperRef}>
        <div className="content">
          <Header />
          <section className="section hero" ref={heroRef}>
            <div className="intro-text" ref={introTextRef}>
              <h3>
                Die Lösung für intelligentes Flexibilitätsmanagement und
                Kundenzufriedenheit
              </h3>
            </div>
          </section>
          <div className="image-container">
            <div className="image-wrapper" ref={imgRef}>
              <Image
                src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
                alt="image"
                fill
                sizes="100vw"
                priority
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
            </div>
          </div>
        </div>
      </div>

      <Mission />
      <div className="cards-overview">
        <List
          selectedId={selectedId ?? undefined}
          onCardClick={handleCardClick}
        />
        <AnimatePresence initial={false}>
          {selectedId && (
            <Item
              id={selectedId}
              key="item"
              onClose={() => setSelectedId("")}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
