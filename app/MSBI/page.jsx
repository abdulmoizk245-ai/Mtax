import React from "react";
import MSBIHero from "./components/hero";
import AboutMSBI from "./components/about-msbi";
import Header from "../Components/header";
import ContactPage from "../Components/contact";
import Banner from "../Home/components/banner";
import Footer from "../Components/footer";
import OurProduct from "./components/product";
import BrandsAndBenefits from "./components/brand";

export default function MSBI()
{
    return (
        <>
        <Header/>
            <MSBIHero />
            <AboutMSBI />
            <OurProduct/>
            <BrandsAndBenefits/>
            <ContactPage/>
            <Banner/>
            <Footer/>
        </>
    )
}