import "./Projet.css";
import { Link } from "react-router-dom";
const Projet = () => {
  return (
    <>
      <section className="projet" id="projet">
        <h2>PROJET</h2>
        <div className="projet-container">
          <div className="projet-container-item">
            <div className="projet-img">
              <img src="src/img/apropos.jpg" alt="" />
            </div>
            <div className="projet-message">
              <h3>title</h3>
              <p>
                This is a project made to learn the latest languages by building
                an app .
              </p>
              <div className="outil">React</div>
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
              <div className="outil">React</div>
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
              <div className="outil">React</div>
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
      </section>
    </>
  );
};

export default Projet;
