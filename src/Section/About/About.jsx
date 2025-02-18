import "./About.css";
import { SiFrontendmentor, SiBackendless, SiAntdesign } from "react-icons/si";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  return (
    <motion.section
      ref={ref}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      id="about"
    >
      <div className="about-container">
        <h2>A Propos</h2>
        <div className="about">
          <div className="about-img">
            <img src="src/img/coding-image.png" alt="about" />
          </div>
          <div className="about-message">
            <ul>
              <li className="about-message-item">
                <SiFrontendmentor style={{ fontSize: "50px" }} />
                <div className="about-text">
                  <h3>Développeur Frontend</h3>
                  <p>
                    Je suis un développeur frontend avec de l&apos;expérience
                    dans la création de sites réactifs et optimisés.
                  </p>
                </div>
              </li>
              <li className="about-message-item">
                <SiBackendless style={{ fontSize: "50px" }} />
                <div className="about-text">
                  <h3>Développeur Backend</h3>
                  <p>
                    J&apos;ai de l&apos;expérience dans le développement de
                    systèmes backend rapides et optimisés, ainsi que dans la
                    création d&apos;API.
                  </p>
                </div>
              </li>
              <li className="about-message-item">
                <SiAntdesign style={{ fontSize: "50px" }} />
                <div className="about-text">
                  <h3>Design UI</h3>
                  <p>
                    J&apos;ai conçu plusieurs pages de destination (landing
                    pages) et ai également créé des systèmes de design.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
