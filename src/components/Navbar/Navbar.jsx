import Logo from "../../images/LogoIndigo.svg";
import NavLinks from "./NavLinks";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light rounded">
      <div className="container-fluid">
        <a className="navbar-brand d-lg-none" href="#">
          <img src={Logo} alt="Safa logo" className="w-50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
