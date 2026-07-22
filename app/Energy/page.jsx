import Footer from "../Components/footer";
import Header from "../Components/header";
import EnergyHero from "./Components/hero";
import EnergyAbout from "./Components/about";
import EnergyCapabilities from "./Components/capabilities";
import ContactPage from "../Components/contact";
import Banner from "../Home/components/banner";
import EnergyCategoryBar from "./Components/bar";
import EnergyIndustriesSupport from "./Components/industries";
import GeneratorCTA from "./Components/generator";
import Energy from "./Components/energy";
import Reveal from "../Components/Reveal";


export default function EnergyPage() {
    return (
        <>
        <Header />
        <EnergyHero/>
        <Reveal><EnergyAbout/></Reveal>
        <Reveal delay={80}><EnergyCategoryBar/></Reveal>
        <Reveal delay={80}><Energy/></Reveal>
        <Reveal delay={80}><EnergyCapabilities/></Reveal>
        <Reveal delay={80}><EnergyIndustriesSupport/></Reveal>
        <Reveal delay={80}><GeneratorCTA/></Reveal>
        <Reveal delay={80}><ContactPage/></Reveal>
        <Reveal delay={80}><Banner/></Reveal>
        <Footer />
        </>
    )
}