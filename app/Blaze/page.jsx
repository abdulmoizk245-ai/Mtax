import Footer from "../Components/footer";
import Header from "../Components/header";
import Banner from "../Home/components/banner";
import ContactPage from "../Home/components/contact";
import BlazeHero from "./Components/hero";
import BlazeAbout from "./Components/about";
import BlazeProducts from "./Components/product";
import BlazeWhyChoose from "./Components/whychooseus";


export default function Blaze() {
    return (
        <>
        <Header />
        <BlazeHero/>
        <BlazeAbout/>
        <BlazeProducts/>
        <BlazeWhyChoose/>
        <ContactPage/>
        <Banner/>
        <Footer/>
        </>
    )
}