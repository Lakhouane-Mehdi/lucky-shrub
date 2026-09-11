import Header from "./components/Header";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Nursery from "./components/Nursery";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";
import "./App.css";

export default function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <Nav />
      <main>
        <Banner />
        <Services />
        <Pricing />
        <Nursery />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
