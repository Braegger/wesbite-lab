"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const IntroScreen = dynamic(
    () => import("@/src/app/[locale]/ui/intro/intro-screen"),
    {
      ssr: false,
    }
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main>
      {isClient && (
        <Suspense fallback={<div>Loading...</div>}>
          <IntroScreen />
        </Suspense>
      )}
    </main>
  );
}
