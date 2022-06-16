import AsideCard from "../../components/Cards/AsideCard";
import LecturersCard from "../../components/Cards/LecturersCard";
import Seminar from "../../components/Seminar/Seminar";

function WebinarDetails() {
  return (
    <section className="details-section bg-white mt-5 position-relative">
      <div className="container">
        <LecturersCard />

        <div className="row d-md-flex justify-content-between mt-5">
          <div className=" col-md-7 col-lg-8">
            <Seminar />
          </div>
          <div className="col-md-5 col-lg-4">
            <AsideCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebinarDetails;
