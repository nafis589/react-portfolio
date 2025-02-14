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
const Experience = () => {
  return (
    <>
      <section id="experience">
        <h2>Experience</h2>
        <div className="experience-container">
          <div className="experience-items">
            <div className="experience-item">
              <FaHtml5 style={{ fontSize: "60px", color: "orange" }} />
            </div>
            <p>HTML</p>
          </div>
          <div className="experience-items">
            <div className="experience-item">
              <FaCss3 style={{ fontSize: "60px", color: "#264DE4" }} />
            </div>
            <p>CSS</p>
          </div>
          <div className="experience-items">
            <div className="experience-item">
              <SiTailwindcss style={{ fontSize: "60px", color: "#38BDF8" }} />
            </div>
            <p>TAILWIND</p>
          </div>
          <div className="experience-items">
            <div className="experience-item">
              <FaReact style={{ fontSize: "60px", color: "#61DAFB" }} />
            </div>
            <p>REACT</p>
          </div>
          <div className="experience-items">
            <div className="experience-item">
              <SiTypescript style={{ fontSize: "60px", color: "#3178C6" }} />
            </div>
            <p>TYPESCRIPT</p>
          </div>
          <div className="experience-items">
            <div className="experience-item">
              <FaJs
                style={{
                  fontSize: "60px",
                  color: "yellow",
                  backgroundColor: "black",
                  border: "none",
                }}
              />
            </div>
            <p>JAVASCRIPT</p>
          </div>
          <div className="experience-items">
            <div className="experience-item">
              <FaNodeJs style={{ fontSize: "60px", color: "#339933" }} />
            </div>
            <p>NODE</p>
          </div>
          <div className="experience-items">
            <div className="experience-item">
              <SiMysql style={{ fontSize: "60px", color: "#4479A1" }} />
            </div>
            <p>MYSQL</p>
          </div>
          <div className="experience-items">
            <div className="experience-item">
              <SiMongodb style={{ fontSize: "60px", color: "#47A248" }} />
            </div>
            <p>MONGODB</p>
          </div>
          <div className="experience-items">
            <div className="experience-item">
              <FaFigma style={{ fontSize: "60px", color: "#F24E1E" }} />
            </div>
            <p>FIGMA</p>
          </div>
          <div className="experience-items">
            <div className="experience-item">
              <SiExpress style={{ fontSize: "60px", color: "" }} />
            </div>
            <p>EXPRESS</p>
          </div>
          <div className="experience-items">
            <div className="experience-item">
              <FaGithub style={{ fontSize: "60px", color: "#000000" }} />
            </div>
            <p>GITHUB</p>
          </div>
          <div className="experience-items">
            <div className="experience-item">
              <SiAdobephotoshop
                style={{ fontSize: "60px", color: "#7F00FA" }}
              />
            </div>
            <p>PHOTOSHOP</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
