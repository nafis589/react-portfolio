import "./Nav.css";
const Nav = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <h2>
          <a href="#section">Nafis.</a>
        </h2>
      </div>
      <nav className="navbar">
        <ul className="navbar-items">
          <li className="items">
            <a href="#about">A Propos </a>
          </li>
          <li className="items">
            <a href="#experience"> Experience </a>
          </li>
          <li className="items">
            <a href="#projet"> Projets </a>
          </li>
          <li className="items">
            <a href="#contact"> Contact </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
