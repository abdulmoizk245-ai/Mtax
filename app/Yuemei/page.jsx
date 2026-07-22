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
import Reveal from "../Components/Reveal";

export default function Yuemei()
{
    return(
        <>
        <Header/>
        <HeroSection/>
        <Reveal><AboutYuemei/></Reveal>
        <Reveal delay={80}><FeatureSection/></Reveal>
        <Reveal delay={80}><ProductRange/></Reveal>
        <Reveal delay={80}><YuemeiBanner/></Reveal>
        <Reveal delay={80}><ContactPage/></Reveal>
        <Reveal delay={80}><Banner/></Reveal>
        <Footer/>
        </>
    )
}