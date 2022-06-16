import styles from "./Card.module.css";
import CardItem from "./CardItem";
import listImage from "../../images/listImage.svg";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function AsideCard() {
  return (
    <div className="card rounded mx-auto" style={{ maxWidth: "18rem" }}>
      <div
        className={`card-header d-flex justify-content-between ${styles.bg_green}`}
      >
        <h4>نشر المحتوى</h4>
        <div className="d-flex justify-content-around align-items-center">
          <FaGooglePlusG className="mx-1" />
          <FaLinkedinIn className="mx-1" />
          <FaTwitter className="mx-1" />
          <FaFacebookF className="mx-1" />
        </div>
      </div>
      <div className={`card-body ${styles.bg_indigo}`}>
        <div className="card-text">
          <CardItem
            imgSrc={listImage}
            subtitle={"ندوات"}
            description="يوجد ندواتين كل اسبوع"
          />

          <CardItem
            imgSrc={listImage}
            subtitle={"ندوات"}
            description="جميع النداوت مجانية من صفا"
          />

          <CardItem
            imgSrc={listImage}
            subtitle={"ندوات"}
            description="خطوات و نصائح في مجال الاقتصاد"
          />
        </div>
      </div>
    </div>
  );
}

export default AsideCard;
