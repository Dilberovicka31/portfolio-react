import { MDBRow, MDBCol } from "mdbreact";
import React from "react";
import profileimg from "../images/profile.jpeg";
function Aboutme() {
  return (
    <MDBRow className=" mt-5">
      <MDBCol md="4" className="mx-auto d-block">
        <img
          src={profileimg}
          class="img-fluid z-depth-5 animated slideInRight rounded mx-auto d-block mb-5" style={{height:"600px"}}
          alt="Mia Dilberovic Profile"
        ></img>
      </MDBCol>
      <MDBCol className="mx-auto" md="6">
        <p className="font-weight-bolder animated slideInUp" style={{fontSize: '22px'}}> Hi I'm Mia.</p>

        <p className="font-weight-bolder animated slideInUp" style={{fontSize: '22px'}}>
          I'm a full stack web developer experienced in HTML, CSS, JavaScript,
          MySQL, MongoDB, Sequelize, to name a few. I have experience in many
          industries, which I'm grateful for as all of them have provided me
          with great soft skills and a lot of experience.
        </p>

        <p className="font-weight-bolder animated slideInUp" style={{fontSize: '22px'}}>
          Creating art and designing is my passion and it gives me gratification
          constantly. Even when that gratification is delayed after struggling
          for hours to figure out why something isn't working.
        </p>
      </MDBCol>
    </MDBRow>
  );
}
export default Aboutme;
