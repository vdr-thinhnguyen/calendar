import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import DesktopView from "@layouts/Desktop";
import MobileView from "@layouts/Mobile";

export default function Home() {
  const [isMobileView, setIsMobileView] = useState();
  const pageRef = useRef(null);

  const updateMedia = () => {
    if (pageRef.current) {
      setIsMobileView(pageRef.current.clientWidth < 840);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobileView(window.innerWidth < 840);
      window.addEventListener("resize", updateMedia);
    }
    return () =>
      typeof window !== "undefined"
        ? window.removeEventListener("resize", updateMedia)
        : null;
  }, []);

  return (
    <>
      <Head>
        <title>Calendar</title>
        <meta name="description" content="Calendar" />
      </Head>

      <main ref={pageRef}>
        {isMobileView ? <MobileView /> : <DesktopView />}
      </main>
    </>
  );
}
