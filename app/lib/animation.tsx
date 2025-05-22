import { RefObject } from "react";
import gsap, { random } from "gsap";

export function scrollAnimation(
  wrapperRef: RefObject<null>,
  imgRef: RefObject<null>,
  heroRef: RefObject<null>,
  introTextRef: RefObject<null> // Neue Ref für den Intro-Text
) {
  // ScrollTrigger Animation erstellen
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperRef.current,
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: true,
    },
  });

  // Intro-Text initial verstecken
  if (introTextRef.current) {
    gsap.set(introTextRef.current, {
      opacity: 0,
      y: 50, // startet 50px nach unten versetzt
    });
  }

  if (imgRef.current) {
    tl.to(imgRef.current, {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut",
    });
  }

  if (heroRef.current) {
    tl.to(
      heroRef.current,
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut",
      },
      "<" // gleichzeitig mit der vorherigen Animation
    );
  }

  if (introTextRef.current) {
    tl.to(introTextRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3, // relative Dauer in der Timeline
      ease: "power2.out",
    }); // kein timing parameter = kommt nach den anderen Animationen
  }

  return () => {
    // Cleanup beim Unmounting
    if (tl.scrollTrigger) {
      tl.scrollTrigger.kill();
    }
    tl.kill();
  };
}
