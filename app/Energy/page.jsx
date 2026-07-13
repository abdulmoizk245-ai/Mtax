import Footer from "../Components/footer";
import Header from "../Components/header";
import ContactPage from "../Home/components/contact";
import EnergyHero from "./Components/hero";
import EnergyAbout from "./Components/about";
import EnergyCapabilities from "./Components/capabilities";


export default function EnergyPage() {
    return (
        <>
        <Header />
        <EnergyHero/>
        <EnergyAbout/>
        <EnergyCapabilities/>
        <ContactPage/>
        <Footer />
        </>
    )
}