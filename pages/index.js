import SkySection from "../components/index/SkySection.jsx";
import GrassSection from "../components/index/GrassSection.jsx";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "#96DEE1";
  }, []);

  return (
    <main>
      <SkySection></SkySection>
      <GrassSection></GrassSection>
    </main>
  );
}
