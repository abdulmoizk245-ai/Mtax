import ContactPage from "../Components/contact";
import Footer from "../Components/footer";
import Header from "../Components/header";
import Banner from "../Home/components/banner";
import AboutShamooz from "./Components/about";
import CraftedElegance from "./Components/crafted";
import ShamoozHero from "./Components/hero";
import ShamoozProductRange from "./Components/product";
import WhyChooseShamooz from "./Components/whychoose";


export default function ShamoozPage() {
    return (
        <>
        <Header/>
        <ShamoozHero/>
        <AboutShamooz/>
        <ShamoozProductRange/>
        <CraftedElegance/>
        <WhyChooseShamooz/>
        <ContactPage/>
        <Banner/>
        <Footer/>
        </>
    )
}