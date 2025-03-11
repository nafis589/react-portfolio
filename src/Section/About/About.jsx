import "./About.css";
import { SiFrontendmentor, SiBackendless, SiAntdesign } from "react-icons/si";
import { motion } from "framer-motion"; // Importing motion from framer-motion

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Staggered animation
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      transition={{ duration: 0.6 }}
    >
      <div className="about-container">
        <h2>A Propos</h2>
        <div className="about">
          <div className="about-img">
            <img src="img/coding-image.png" alt="about" />
          </div>
          <div className="about-message">
            <ul>
              {[
                {
                  icon: <SiFrontendmentor style={{ fontSize: "50px" }} />,
                  title: "Développeur Frontend",
                  description:
                    "Je suis un développeur frontend avec de l'expérience dans la création de sites réactifs et optimisés.",
                },
                {
                  icon: <SiBackendless style={{ fontSize: "50px" }} />,
                  title: "Développeur Backend",
                  description:
                    "J'ai de l'expérience dans le développement de systèmes backend rapides et optimisés, ainsi que dans la création d'API.",
                },
                {
                  icon: <SiAntdesign style={{ fontSize: "50px" }} />,
                  title: "Design UI",
                  description:
                    "J'ai conçu plusieurs pages de destination (landing pages) et ai également créé des systèmes de design.",
                },
              ].map((item, index) => (
                <motion.li
                  className="about-message-item"
                  variants={itemVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  key={index}
                >
                  {item.icon}
                  <div className="about-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
