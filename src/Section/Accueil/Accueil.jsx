import "./Accueil.css";
import { motion } from "framer-motion";

const Accueil = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="accueil">
        <div className="accueil-message">
          <motion.h1 variants={textVariants} custom={0}>
            Salut, Moi c&apos;est Nafis
          </motion.h1>
          <motion.p variants={textVariants} custom={1}>
            Je suis Développeur web full stack <br />
            alliant design et technologie. Contactez-moi pour en savoir plus!
          </motion.p>
          <motion.div className="btns" variants={textVariants} custom={2}>
            <motion.button
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#">Contact me</a>
            </motion.button>
          </motion.div>
        </div>
        <motion.div className="myimage" variants={imageVariants}>
          <img src="src/img/img-accueil.jpg" alt="Nafis" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Accueil;
