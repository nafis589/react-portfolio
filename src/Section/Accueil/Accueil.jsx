import "./Accueil.css";

const Accueil = () => {
  return (
    <>
      <section id="section">
        <div className="accueil">
          <div className="accueil-message">
            <h1>Salut, Moi c&apos;est Nafis</h1>
            <p>
              Je suis Développeur web full stack <br />
              alliant design et technologie. Contactez-moi pour en savoir plus!
            </p>
            <div className="btns">
              <button className="btn">
                <a href="#">Contact me</a>{" "}
              </button>
            </div>
          </div>
          <div className="myimage">
            <img src="src/img/img-accueil.jpg" alt="Nafis" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Accueil;
