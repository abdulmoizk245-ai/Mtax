import Footer from "../Components/footer";
import Header from "../Components/header";
import Banner from "../Home/components/banner";
import BlazeHero from "./Components/hero";
import BlazeAbout from "./Components/about";
import BlazeProducts from "./Components/product";
import BlazeWhyChoose from "./Components/whychooseus";
import ContactPage from "../Components/contact";
import Reveal from "../Components/Reveal";


export default function Blaze() {
    return (
        <>
        <Header />
        <BlazeHero/>
        <Reveal><BlazeAbout/></Reveal>
        <Reveal delay={80}><BlazeProducts/></Reveal>
        <Reveal delay={80}><BlazeWhyChoose/></Reveal>
        <Reveal delay={80}><ContactPage/></Reveal>
        <Reveal delay={80}><Banner/></Reveal>
        <Footer/>
        </>
    )
}