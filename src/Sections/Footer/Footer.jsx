import NavLink from "../../components/Navbar/NavLink";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../../images/LogoIndigo.svg";

import "../../App.css";
import Button from "../../components/Button/Button";

function Footer() {
  return (
    <footer className="text_blue mt-5">
      <div className="container">
        <div className="grid row">
          <div className="col-sm-6 col-lg-3 my-5 d-flex justify-content-center align-items-start flex-sm-column justify-content-lg-start">
            <a className="navbar-brand d-block mb-4" href="#">
              <img src={Logo} alt="Safa logo" className="w-75" />
            </a>
            <div>
              <a
                className="text-decoration-none d-block text_blue mb-3"
                href="email"
              >
                Safa@gmail.com
              </a>
              <a className="text-decoration-none d-block text_blue" href="tel">
                699-4478 757+
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 my-md-5 text-center">
            <h4>الروابط</h4>
            <div className="row mt-4">
              <ul className="navbar-nav col-6">
                <NavLink>الرئيسية</NavLink>
                <NavLink>من نحن</NavLink>
                <NavLink>الخدمات</NavLink>
                <NavLink>الفعاليات</NavLink>
                <NavLink>الكورسات</NavLink>
                <NavLink>الندوات</NavLink>
              </ul>
              <ul className="navbar-nav col-6">
                <NavLink>الورشات</NavLink>
                <NavLink>الأخبار</NavLink>
                <NavLink>الأبحاث</NavLink>
                <NavLink>فريق العمل</NavLink>
                <NavLink>العضوية</NavLink>
                <NavLink>اتصل بنا</NavLink>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 d-flex flex-column gap-3 my-5 align-items-center">
            <h4>تابعنا</h4>
            <div className="d-flex justify-content-start align-items-center">
              <FaGooglePlusG className="mx-1 text-secondary text-opacity-25" />
              <FaLinkedinIn className="mx-1 text-secondary text-opacity-25" />
              <FaTwitter className="mx-1 text-secondary text-opacity-25" />
              <FaFacebookF className="mx-1 text-secondary text-opacity-25" />
            </div>
            <h4>لمتابعة الأخبار</h4>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control rounded"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <Button styles="btn_indigo">اشترك</Button>
            </div>
          </div>
        </div>
        <p className="text-center">جميع الحقوق محفوظة لصفا</p>
      </div>
    </footer>
  );
}

export default Footer;
