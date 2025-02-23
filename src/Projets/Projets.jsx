import "./Projets.css";
import "../Section/Projet/Projet.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Projets = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [100, 0]); // Adjust the range as needed

  return (
    <>
      <section className="projet" id="projet">
        <h2>PROJET</h2>
        <motion.div className="projet-container" style={{ y }}>
          {["E-commerce", "PORTFOLIO", "title"].map((title, index) => (
            <motion.div
              className="projet-container-item child"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered effect
              key={index}
            >
              <div className="projet-img">
                <img src={`src/img/${title.toLowerCase()}.png`} alt={title} />
              </div>
              <div className="projet-message">
                <h3>{title}</h3>
                <p>
                  This is a project made to learn the latest languages by
                  building an app.
                </p>
                <div className="outils">
                  <div className="outil">React</div>
                </div>
                <div className="btns">
                  <a href="#" className="a">
                    Demo
                  </a>
                  <a href="#" className="a">
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Projets;
