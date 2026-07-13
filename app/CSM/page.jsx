import React from "react";
import Header from "../Components/header";
import CSMHero from "./components/hero";
import AboutCSM from "./components/about";
import ProductRange from "./components/product";
import WhyChooseCSM from "./components/whyChoose";
import ContactPage from "./components/contact";
import Footer from "../Components/footer";

export default function CSM() {
  return (
    <>
      <Header />
      <CSMHero />
      <AboutCSM />
      <ProductRange />
      <WhyChooseCSM />
      <ContactPage />
      <Footer />
    </>
  );
}