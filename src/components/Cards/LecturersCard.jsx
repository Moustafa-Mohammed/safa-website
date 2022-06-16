import CardItem from "./CardItem";
import Lecturer1 from "../../images/lecturer-1.svg";
import Lecturer2 from "../../images/lecturer-2.svg";

import styles from "./Card.module.css";

function LecturersCard() {
  return (
    <div
      className={`card text-bg-white ${styles.relative} `}
      style={{ maxWidth: "25rem" }}
    >
      <div className={`card-header text-bg-white ${styles.text_blue} fs-5`}>
        تقديم المحاضرين
      </div>
      <CardItem
        styles={styles.text_blue}
        imgSrc={Lecturer1}
        subtitle="الدكتور رجا المرزوقى"
        description="نائب رئيس مجلس ادارة جمعية صفا  - استاذ الاقتصاد المشارك معهد الامير سعود الفيصل للدراسات الدبلوماسية"
      />
      <CardItem
        styles={styles.text_blue}
        imgSrc={Lecturer2}
        subtitle="الدكتور رجا المرزوقى"
        description="نائب رئيس مجلس ادارة جمعية صفا  - استاذ الاقتصاد المشارك معهد الامير سعود الفيصل للدراسات الدبلوماسية"
      />
    </div>
  );
}

export default LecturersCard;
