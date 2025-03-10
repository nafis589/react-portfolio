import "./Projets.css";
import "../Section/Projet/Projet.css";

const Projets = () => {
  return (
    <>
      <section className="projet" id="projet">
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
                réactif.
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
              <h3>CHATBOT CLI</h3>
              <p>
                Un chatbot en (CLI) permettant de communiquer avec une (IA)
                générative.
              </p>
              <div className="outils">
                <div className="outil">Node</div>
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
      </section>
    </>
  );
};

export default Projets;
