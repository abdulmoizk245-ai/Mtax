import Header from "../Components/header";
import Footer from "../Components/footer";
import FabricaHero from "./components/hero";
import FabricaAbout from "./components/about";
import FabricaSolutions from "./components/solutions";
import ContactPage from "../Home/components/contact";

export default function Fabric() {
    return (
        <>
        <Header />
        <FabricaHero />
        <FabricaAbout />
        <FabricaSolutions />
        <ContactPage/>
        <Footer />
        </>
    )
}
