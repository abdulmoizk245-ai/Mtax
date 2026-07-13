import Header from "../Components/header";
import Footer from "../Components/footer";
import FabricaHero from "./components/hero";
import FabricaAbout from "./components/about";
import FabricaSolutions from "./components/solutions";
import TextileSolutions from "./components/textile";
import FabricaGallery from "./components/gallery";
import ContactPage from "../Components/contact";
import Banner from "../Home/components/banner";

export default function Fabric() {
    return (
        <>
        <Header />
        <FabricaHero />
        <FabricaAbout />
        <FabricaSolutions />
        <TextileSolutions />
        <FabricaGallery/>
        <ContactPage/>
        <Banner/>
        <Footer />
        </>
    )
}
