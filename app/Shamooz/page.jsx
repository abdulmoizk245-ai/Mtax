import ContactPage from "../Components/contact";
import Footer from "../Components/footer";
import Header from "../Components/header";
import Banner from "../Home/components/banner";
import AboutShamooz from "./Components/about";
import CraftedElegance from "./Components/crafted";
import ShamoozHero from "./Components/hero";
import ShamoozProductRange from "./Components/product";
import WhyChooseShamooz from "./Components/whychoose";
import Reveal from "../Components/Reveal";


export default function ShamoozPage() {
    return (
        <>
        <Header/>
        <ShamoozHero/>
        <Reveal><AboutShamooz/></Reveal>
        <Reveal delay={80}><ShamoozProductRange/></Reveal>
        <Reveal delay={80}><CraftedElegance/></Reveal>
        <Reveal delay={80}><WhyChooseShamooz/></Reveal>
        <Reveal delay={80}><ContactPage/></Reveal>
        <Reveal delay={80}><Banner/></Reveal>
        <Footer/>
        </>
    )
}