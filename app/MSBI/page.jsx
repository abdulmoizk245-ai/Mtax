import React from "react";
import MSBIHero from "./components/hero";
import AboutMSBI from "./components/about-msbi";
import Header from "../Components/header";
import ContactPage from "../Components/contact";
import Banner from "../Home/components/banner";
import Footer from "../Components/footer";
import OurProduct from "./components/product";
import BrandsAndBenefits from "./components/brand";
import Reveal from "../Components/Reveal";

export default function MSBI()
{
    return (
        <>
        <Header/>
            <MSBIHero />
            <Reveal><AboutMSBI /></Reveal>
            <Reveal delay={80}><OurProduct/></Reveal>
            <Reveal delay={80}><BrandsAndBenefits/></Reveal>
            <Reveal delay={80}><ContactPage/></Reveal>
            <Reveal delay={80}><Banner/></Reveal>
            <Footer/>
        </>
    )
}