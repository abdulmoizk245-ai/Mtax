import React from "react";
import Header from "../Components/header";
import CSMHero from "./components/hero";
import AboutCSM from "./components/about";
import ProductRange from "./components/product";
import WhyChooseCSM from "./components/whyChoose";
import Footer from "../Components/footer";
import ContactPage from "../Components/contact";
import Banner from "../Home/components/banner";
import Reveal from "../Components/Reveal";

export default function CSM() {
  return (
    <>
      <Header />
      <CSMHero />
      <Reveal><AboutCSM /></Reveal>
      <Reveal delay={80}><ProductRange /></Reveal>
      <Reveal delay={80}><WhyChooseCSM /></Reveal>
      <Reveal delay={80}><ContactPage /></Reveal>
      <Reveal delay={80}><Banner/></Reveal>
      <Footer />
    </>
  );
}