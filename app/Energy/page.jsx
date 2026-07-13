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


export default function EnergyPage() {
    return (
        <>
        <Header />
        <EnergyHero/>
        <EnergyAbout/>
        <EnergyCategoryBar/>
        <EnergyCapabilities/>
        <EnergyIndustriesSupport/>
        <GeneratorCTA/>
        <ContactPage/>
        <Banner/>
        <Footer />
        </>
    )
}