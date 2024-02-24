import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="headernav">
      <figure className="imgnav">
        <img src="https://s3-alpha-sig.figma.com/img/0f1a/0e19/4dda52df75c902bf4e9170ec93df0c1c?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C6RyDHtOuW0E6oj7aq5QEv7yypoqYuHkrIRXe1iUKhdh0SN2z68Gy8qVhUUZXjEe~NhGGBB-RVtg4OadDz~ALl1zIiK0qQaauZlOuK3Jvy-sp-0eJ46FYDG8liFOB2exRhp-nFeLaRn-tqBVfAk~aCqA1OxcjYojDKSA4x0qLb8p7mcNt4ih-L~g1W~V9dNcBlgSdSMYSea3Hs-zoZrf7sUslo0-BZAGBCBcqZhAQQ3cFIevW8ujcJ0m8UkXgJcHOxX10hQyBc3ng5icHY2PRHJWc4gdRqu9TQgFfcWr9BYIIFaq-GqsDkqa7in9aN5yPJq8u~5F9pzwNo0EH7fxiQ__" />
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
