
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteContent } from "../data/siteContent";

const navigation = [
  { name: "Author", path: "/author" },
  { name: "Engineer", path: "/engineer" },
  { name: "Biographer", path: "/biographer" },
  { name: "Printer/Publisher", path: "/printer-publisher" },
  { name: "Poet", path: "/poet" },
  { name: "Politician", path: "/politician" },
  { name: "Wellness Expert", path: "/wellness-expert" },
  { name: "About", path: "/about" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link
          to="/"
          className="logo"
          aria-label={`${siteContent.websiteName} homepage`}
          onClick={closeMenu}
        >
          <span className="logo-mark">
            <img src={siteContent.logoImage} alt="Osiriame's Logo" />
          </span>

          <span className="logo-text">
            {siteContent.shortName}
          </span>
        </Link>

        <nav
          id="main-navigation"
          className={`nav-links ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
