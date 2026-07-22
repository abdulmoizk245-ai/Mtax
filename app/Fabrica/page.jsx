import Header from "../Components/header";
import Footer from "../Components/footer";
import FabricaHero from "./components/hero";
import FabricaAbout from "./components/about";
import FabricaSolutions from "./components/solutions";
import TextileSolutions from "./components/textile";
import FabricaGallery from "./components/gallery";
import ContactPage from "../Components/contact";
import Banner from "../Home/components/banner";
import Reveal from "../Components/Reveal";

export default function Fabric() {
    return (
        <>
        <Header />
        <FabricaHero />
        <Reveal><FabricaAbout /></Reveal>
        <Reveal delay={80}><FabricaSolutions /></Reveal>
        <Reveal delay={80}><TextileSolutions /></Reveal>
        <Reveal delay={80}><FabricaGallery/></Reveal>
        <Reveal delay={80}><ContactPage/></Reveal>
        <Reveal delay={80}><Banner/></Reveal>
        <Footer />
        </>
    )
}
