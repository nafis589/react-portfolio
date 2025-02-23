import "./Experience.css";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaNodeJs,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion"; // Importing motion from framer-motion

const Experience = () => {
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section id="experience">
        <h2>Experience</h2>
        <div className="experience-container">
          <div className="experience-items">
            <motion.div
              className="experience-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <FaHtml5 style={{ fontSize: "60px", color: "orange" }} />
            </motion.div>
            <p>HTML</p>
          </div>
          <div className="experience-items">
            <motion.div
              className="experience-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <FaCss3 style={{ fontSize: "60px", color: "#264DE4" }} />
            </motion.div>
            <p>CSS</p>
          </div>
          <div className="experience-items">
            <motion.div
              className="experience-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <SiTailwindcss style={{ fontSize: "60px", color: "#38BDF8" }} />
            </motion.div>
            <p>TAILWIND</p>
          </div>
          <div className="experience-items">
            <motion.div
              className="experience-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <FaReact style={{ fontSize: "60px", color: "#61DAFB" }} />
            </motion.div>
            <p>REACT</p>
          </div>
          <div className="experience-items">
            <motion.div
              className="experience-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <SiTypescript style={{ fontSize: "60px", color: "#3178C6" }} />
            </motion.div>
            <p>TYPESCRIPT</p>
          </div>
          <div className="experience-items">
            <motion.div
              className="experience-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <FaJs
                style={{
                  fontSize: "60px",
                  color: "yellow",
                  backgroundColor: "black",
                  border: "none",
                }}
              />
            </motion.div>
            <p>JAVASCRIPT</p>
          </div>
          <div className="experience-items">
            <motion.div
              className="experience-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <FaNodeJs style={{ fontSize: "60px", color: "#339933" }} />
            </motion.div>
            <p>NODE</p>
          </div>
          <div className="experience-items">
            <motion.div
              className="experience-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <SiMysql style={{ fontSize: "60px", color: "#4479A1" }} />
            </motion.div>
            <p>MYSQL</p>
          </div>
          <div className="experience-items">
            <motion.div
              className="experience-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <SiMongodb style={{ fontSize: "60px", color: "#47A248" }} />
            </motion.div>
            <p>MONGODB</p>
          </div>
          <div className="experience-items">
            <motion.div
              className="experience-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <FaFigma style={{ fontSize: "60px", color: "#F24E1E" }} />
            </motion.div>
            <p>FIGMA</p>
          </div>
          <div className="experience-items">
            <motion.div
              className="experience-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <SiExpress style={{ fontSize: "60px", color: "" }} />
            </motion.div>
            <p>EXPRESS</p>
          </div>
          <div className="experience-items">
            <motion.div
              className="experience-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <FaGithub style={{ fontSize: "60px", color: "#000000" }} />
            </motion.div>
            <p>GITHUB</p>
          </div>
          <div className="experience-items">
            <motion.div
              className="experience-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <SiAdobephotoshop
                style={{ fontSize: "60px", color: "#7F00FA" }}
              />
            </motion.div>
            <p>PHOTOSHOP</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
