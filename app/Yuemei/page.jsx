import React from "react";
import HeroSection from "./components/hero";
import Header from "../Components/header";
import AboutYuemei from "./components/about";
import FeatureSection from "./components/Features";
import ProductRange from "./components/products";
import YuemeiBanner from "./components/Banner";
import Footer from "../Components/footer";
import Banner from "../Home/components/banner";
import ContactPage from "../Components/contact";

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
        <Banner/>
        <Footer/>
        </>
    )
}