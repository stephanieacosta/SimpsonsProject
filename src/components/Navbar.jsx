import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="headernav">
      <figure className="imgnav">
        <img src="\LogoSimpsons.png" alt="LogoSimpsons" />
      </figure>
      <nav role="navigation">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
