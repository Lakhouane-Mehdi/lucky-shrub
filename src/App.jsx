import Header from "./components/Header";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Banner />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
