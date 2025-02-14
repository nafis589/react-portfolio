import "./App.css";
import Footer from "./Footer/Footer";
import Nav from "./Navigation/Nav";
import Projets from "./Projets/Projets";
import About from "./Section/About/About";
import Accueil from "./Section/Accueil/Accueil";
import Experience from "./Section/Experience/Experience";
import Projet from "./Section/Projet/Projet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Accueil />
      <About />
      <Experience />
      <Router>
        <Routes>
          <Route path="/" element={<Projet />} />
          <Route path="/projets" element={<Projets />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
