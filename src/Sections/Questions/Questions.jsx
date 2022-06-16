import QuestionForm from "../../components/QuestionForm/QuestionForm";

import Person from "../../images/person.png";

function Questions() {
  return (
    <section className="questions-section">
      <div className="container">
        <div className="text-center row align-items-center">
          <div className="col-md-6 text-center">
            <img src={Person} alt="" className="img-fluid" />
          </div>
          <QuestionForm />
        </div>
      </div>
    </section>
  );
}

export default Questions;
