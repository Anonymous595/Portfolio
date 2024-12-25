/**
 * @copyright 2024 Shamim Ahmed
 * @license Apache-2.0
 */

/**
 * Components
 */
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
       <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;