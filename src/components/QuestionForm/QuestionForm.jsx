import CardItem from "../Cards/CardItem";
import QuestiMark from "../../images/questionMark.svg";
import Button from "../Button/Button";

import "../../App.css";

function QuestionForm() {
  return (
    <div className="mt-5 col-md-6 text-lg-end">
      <CardItem
        subtitle="ارسل سؤالك للمحاضر"
        imgSrc={QuestiMark}
        description="يجب عليك التسجيل و حضور الندوة"
      />
      <div className="form-floating mt-2">
        <textarea
          className="form-control"
          placeholder="السؤال"
          id="floatingTextarea"
        ></textarea>
        <label htmlFor="floatingTextarea">السؤال</label>
      </div>
      <Button styles="btn_indigo mt-3 btn-lg px-5">ارسل</Button>
    </div>
  );
}

export default QuestionForm;
