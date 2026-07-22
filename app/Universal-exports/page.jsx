import ContactPage from "../Components/contact";
import Footer from "../Components/footer";
import Header from "../Components/header";
import Banner from "../Home/components/banner";
import AboutUniversalExports from "./Components/about";
import UniversalCategories from "./Components/categories";
import UniversalGallery from "./Components/gallery";
import UniversalExportsHero from "./Components/hero";
import WhyChooseUniversal from "./Components/whychooseus";
import Reveal from "../Components/Reveal";


export default function UniversalExportsPage() {
    return (
        <>
        <Header />
        <UniversalExportsHero/>
        <Reveal><AboutUniversalExports/></Reveal>
        <Reveal delay={80}><UniversalCategories/></Reveal>
        <Reveal delay={80}><UniversalGallery/></Reveal>
        <Reveal delay={80}><WhyChooseUniversal/></Reveal>

        <Reveal delay={80}><ContactPage/></Reveal>
        <Reveal delay={80}><Banner/></Reveal>
        <Footer />
        </>
    )
}