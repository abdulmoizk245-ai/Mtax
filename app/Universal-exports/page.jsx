import ContactPage from "../Components/contact";
import Footer from "../Components/footer";
import Header from "../Components/header";
import Banner from "../Home/components/banner";
import AboutUniversalExports from "./Components/about";
import UniversalCategories from "./Components/categories";
import UniversalGallery from "./Components/gallery";
import UniversalExportsHero from "./Components/hero";
import WhyChooseUniversal from "./Components/whychooseus";


export default function UniversalExportsPage() {
    return (
        <>
        <Header />
        <UniversalExportsHero/>
        <AboutUniversalExports/>
        <UniversalCategories/>
        <UniversalGallery/>
        <WhyChooseUniversal/>

        <ContactPage/>
        <Banner/>
        <Footer />
        </>
    )
}