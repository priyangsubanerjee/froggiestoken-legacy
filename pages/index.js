import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Vector from "@/components/Vector";
import ContentBox from "@/components/ContentBox";
import { useState } from "react";
import NavigationBars from "@/components/NavigationBars";
import AboutUs from "@/frames/AboutUs";
import Team from "@/frames/Team";
import Audience from "@/frames/Audience";
import BlackHole from "@/frames/BlackHole";

export default function Home() {
  const [active, setActive] = useState(1);
  return (
    <div className="h-screen bg-primaryBg overflow-hidden">
      <Navbar />
      <Vector />
      <NavigationBars active={active} totalBars={4} />
      <div className="overflow-auto fixed inset-0 scroll-smooth snap-y h-full w-full z-0 snap-mandatory">
        <ContentBox count={1} active={active} setActive={setActive}>
          <AboutUs />
        </ContentBox>
        <ContentBox count={2} active={active} setActive={setActive}>
          <Team />
        </ContentBox>
        <ContentBox count={3} active={active} setActive={setActive}>
          <Audience />
        </ContentBox>
        <ContentBox count={4} active={active} setActive={setActive}>
          <BlackHole />
        </ContentBox>
      </div>
    </div>
  );
}
