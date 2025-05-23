import Swirl from "../assets/images/About/work_swirl.png";
import { Container, Button } from "react-bootstrap";
import useLetsTalk from "./Contact_page_link";

function WorkTogther() {
  const letsTalk = useLetsTalk();
  return (
    <section>
      <Container className="mt-5 mb-5">
        <div className="work_together_card shadow bg-black position-relative  ">
          <img
            src={Swirl}
            alt=""
            className="postion-absolute img-fluid about_core_icon"
          />
          <div className=" work_togther_text">
            <p className="text-center font-size-40 font_weight_300 m-0 text-white">
              How We Can Help You ?
            </p>
            <p className="text-center font-size-65 font_weight_600 m-0 text-white">
              Come Lets Work Together
            </p>
            <div className="d-flex justify-content-center mt-lg-5 my-3 mb-5">
              <Button
                className="px-5 py-2 font-size-25 font_weight_500 blue_gradient border-radius-25 mx-2 mx-lg-0 mx-xl-0"
                onClick={letsTalk}
              >
                Let's Talk
              </Button>
            </div>
            <div className="background-color_blue_1 position-absolute d-none d-lg-block  "></div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WorkTogther;
