import React, { useEffect, useState } from "react";
import Head from "next/head";
import DesktopView from "@layouts/Desktop";
import MobileView from "@layouts/Mobile";

export default function Home() {
  const [isMobileView, setIsMobileView] = useState(
    typeof window !== "undefined" && window.innerWidth < 840
  );

  const updateMedia = () => {
    if (typeof window !== "undefined") {
      setIsMobileView(window.innerWidth < 840);
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

      <main>{isMobileView ? <MobileView /> : <DesktopView />}</main>
    </>
  );
}
