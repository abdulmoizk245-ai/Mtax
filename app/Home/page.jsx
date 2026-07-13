import React from "react";  
import Header from "../Components/header";
import Homehero from "./components/hero";
import OurCompanies from "./components/OurCompanies";
import IndustriesSection from "./components/industries";
import Brand from "./components/brand";
import ContactPage from "./components/contact";
import Banner from "./components/banner";
import Footer from "../Components/footer";


export default function MainPage(){

    return(
        <div>
            <Header/>
            <Homehero/>
            <OurCompanies/>
            <IndustriesSection/>
            <Brand/>
            <ContactPage/>
            <Banner/>
            <Footer/>
        </div>
    )
}