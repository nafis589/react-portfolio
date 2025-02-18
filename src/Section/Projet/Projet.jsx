import "./Projet.css";
import { Link } from "react-router-dom";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
const Projet = () => {
  const ref = useRef < HTMLElement > null;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  return (
    <>
      <motion.section
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        className="projet"
        id="projet"
      >
        <h2>PROJET</h2>
        <div className="projet-container">
          <div className="projet-container-item">
            <div className="projet-img">
              <img src="src/img/ecom.png" alt="" />
            </div>
            <div className="projet-message">
              <h3>E-commerce</h3>
              <p>
                J&apos;ai conçu et développer un site e-commerce intuitif et
                réactif .
              </p>
              <div className="outils">
                <div className="outil">React</div>
              </div>
              <div className="btns">
                <a
                  href="https://ecommerce-filtering-five.vercel.app/"
                  className="a"
                >
                  Demo
                </a>
                <a href="#" className="a">
                  Source
                </a>
              </div>
            </div>
          </div>
          <div className="projet-container-item child">
            <div className="projet-img">
              <img src="src/img/portfo.png" alt="" />
            </div>
            <div className="projet-message">
              <h3>PORTFOLIO</h3>
              <p>
                Ce projet a été réalisé pour mettre en valeur mes compétences et
                services.
              </p>
              <div className="outils">
                <div className="outil">HTML</div>
                <div className="outil">CSS</div>
                <div className="outil">JS</div>
              </div>

              <div className="btns">
                <a href="https://nafis-portofolio.vercel.app/" className="a">
                  Demo
                </a>
                <a href="#" className="a">
                  Source
                </a>
              </div>
            </div>
          </div>
          <div className="projet-container-item child">
            <div className="projet-img">
              <img src="src/img/apropos.jpg" alt="" />
            </div>
            <div className="projet-message">
              <h3>title</h3>
              <p>
                This is a project made to learn the latest languages by building
                an app .
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
          </div>
        </div>
        <div className="plus">
          <Link to="/projets" className="lien-plus">
            Plus
          </Link>
        </div>
      </motion.section>
    </>
  );
};

export default Projet;
