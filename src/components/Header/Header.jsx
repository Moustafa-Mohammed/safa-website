import { useState } from "react";

import Logo from "../../images/Logo.svg";
import UserIcon from "../../images/UserIcon.svg";
import { FaSearch } from "react-icons/fa";
import calendar from "../../images/calendar.svg";

function Header() {
  const [language, setLanguage] = useState("EN");

  const handleChangelanguage = () =>
    setLanguage((prevlang) => (prevlang === "EN" ? "AR" : "EN"));
  return (
    <header className="navbar">
      <div className="container d-flex align-items-center">
        <a className="navbar-brand d-none d-lg-block" href="#">
          <img src={Logo} alt="Safa logo" />
        </a>
        <div className="d-flex align-items-center mx-auto mx-lg-0 justify-content-between">
          <span
            className="text-white d-block cursor-pointer"
            onClick={handleChangelanguage}
          >
            {language}
          </span>
          <label
            htmlFor="search"
            className="input-group mb-3 d-flex align-items-center row mx-2 border-bottom"
          >
            <FaSearch className="col-3 col-sm-2 text-light" />
            <input
              type="text"
              id="search"
              className="bg-transparent border-0 text-light col-9 col-sm-10"
              style={{ outline: "none" }}
              placeholder="بحث..."
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </label>

          <div className="d-flex mx-4 justify-content-between gap-4 text-light align-items-center">
            <img src={calendar} alt="" className="w-75" />
            <span>الأجندة</span>
          </div>

          <img src={UserIcon} alt="User Icon" className="w-25 me-5" />
        </div>
      </div>
    </header>
  );
}

export default Header;
