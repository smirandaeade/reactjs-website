import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [showUnderscore, setShowUnderscore] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowUnderscore((prevValue) => !prevValue);
    }, 700);

    return () => clearInterval(interval);

  }, []);
  return (
    <div className="max-h-screen">
      <Header showUnderscore={showUnderscore} setShowUnderscore={setShowUnderscore} />
      <About />
      <Skills showUnderscore={showUnderscore} setShowUnderscore={setShowUnderscore}/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
