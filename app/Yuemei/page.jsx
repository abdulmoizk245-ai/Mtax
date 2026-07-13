import React from "react";
import HeroSection from "./components/hero";
import Header from "../Components/header";
import AboutYuemei from "./components/about";
import FeatureSection from "./components/Features";
import ProductRange from "./components/products";
import YuemeiBanner from "./components/Banner";
import ContactPage from "../Home/components/contact";
import Footer from "../Components/footer";

export default function Yuemei()
{
    return(
        <>
        <Header/>
        <HeroSection/>
        <AboutYuemei/>
        <FeatureSection/>
        <ProductRange/>
        <YuemeiBanner/>
        <ContactPage/>
        <Footer/>
        </>
    )
}