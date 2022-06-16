import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import leftImg from "../../images/hero-left-img.png";
import rightImg from "../../images/hero-right-img.png";
import webinarImg from "../../images/webinar.png";
import webinarDateImg from "../../images/webinar-date.svg";
import heart from "../../images/heart.svg";
import styles from "./Hero.module.css";
import "../../App.css";

import Button from "../../components/Button/Button";

function Hero() {
  return (
    <section
      className="hero-section pb-5 position-relative overflow-hidden"
      style={{ backgroundColor: "#5260AB" }}
    >
      <img src={leftImg} alt="" className={styles.left_positioned} />
      <img src={rightImg} alt="" className={styles.right_positioned} />

      <div className="container">
        <Header />
        <Navbar />
        <div className="row mt-5 text-light">
          <div className="mb-5 col-md-6">
            <div className="d-flex justify-content-between border-bottom align-items-center">
              <p>
                <span className="ms-2 text-decoration-underline">الرئيسية</span>
                <span className="text-success"> > الندوات</span>
              </p>
              <div className="row">
                <div
                  className="bg-light rounded-circle text-center col-4 d-flex"
                  style={{ width: "40px", height: "40px" }}
                >
                  <img src={heart} alt="" className="w-100" />
                </div>
                <p className="col-8">أضف إلى المفضلة</p>
              </div>
            </div>
            <div className="mt-2">
              <img src={webinarDateImg} alt="" />
              <span className="me-3">
                يوم الخميس ١٦ يوليو ٢٠٢٠ م من ٤ - ٦ مساءاً
              </span>
            </div>
            <p className="fw-bolder fs-4 mt-3">
              ندعوكم في الجمعية المالية السعودية صفا لحضور المساحة الخاصة
              بمناقشة الميزانية العامة والاقتصاد المحلي، ننتظركم غدًا
            </p>
            <Button styles="bg_green btn-lg px-5 mb-5">حجز</Button>
          </div>
          <div className={`col-md-6 ${styles.z_index_1}`}>
            <img src={webinarImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
