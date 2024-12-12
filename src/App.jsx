import { useEffect } from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {});
  });
  return (
    <>
      <Header />
      <Cards />
      <Footer />
    </>
  );
};

export default App;
