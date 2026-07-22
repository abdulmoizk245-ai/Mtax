import React from "react";
import Header from "../Components/header";
import Homehero from "./components/hero";
import OurCompanies from "./components/OurCompanies";
import IndustriesSection from "./components/industries";
import Brand from "./components/brand";
import ContactPage from "./components/contact";
import Banner from "./components/banner";
import Footer from "../Components/footer";
import Reveal from "../Components/Reveal";


export default function MainPage(){

    return(
        <div>
            <Header/>
            <Homehero/>
            <Reveal><OurCompanies/></Reveal>
            <Reveal delay={80}><IndustriesSection/></Reveal>
            <Reveal delay={80}><Brand/></Reveal>
            <Reveal delay={80}><ContactPage/></Reveal>
            <Reveal delay={80}><Banner/></Reveal>
            <Footer/>
        </div>
    )
}