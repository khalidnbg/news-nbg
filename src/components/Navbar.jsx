import { useState } from "react";
import { categories, countries } from "../options";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setCategory, setCountry }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    setIsMenuOpen(false); // Close the menu
  };

  const handleCountryChange = (country) => {
    setCountry(country);
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a
          className="navbar-brand bg-dark text-light rounded p-2 fw-bolder"
          href="/">
          Nbg News
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu">
                {Object.entries(categories).map(([code, category]) => (
                  <li key={code}>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleCategoryChange(code)}>
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Countries
              </a>
              <ul className="dropdown-menu">
                {Object.entries(countries).map(([code, country]) => (
                  <li key={code}>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleCountryChange(code)}>
                      {country}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
