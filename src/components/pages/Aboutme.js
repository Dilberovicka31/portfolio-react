import {
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
} from "mdbreact";
import React from "react";
import profileimg from "../../images/profile.jpeg";
import MongoDB from "../../images/dbs_mongodb.png";
import MySQL from "../../images/dbs_mysql.png";
import "./aboutme.css";

function Aboutme() {
  return (
    <MDBRow className=" mt-5">
      <MDBCol md="4" className="mx-auto d-block">
        <MDBView hover zoom>
          <img
            src={profileimg}
            className="img-fluid z-depth-5 animated slideInRight rounded mx-auto d-block mb-5"
            style={{ height: "600px" }}
            alt="Mia Dilberovic Profile"
          ></img>
        </MDBView>
      </MDBCol>
      <MDBCol className="mx-auto" md="6">
        <p
          className="font-weight-bolder animated slideInUp"
          style={{ fontSize: "22px" }}
        >
          {" "}
          Hi I'm Mia.
        </p>

        <p
          className="font-weight-bolder animated slideInUp"
          style={{ fontSize: "22px" }}
        >
          I'm a full stack web developer experienced in HTML, CSS, JavaScript,
          MySQL, MongoDB, Sequelize, to name a few. I have experience in many
          industries, which I'm grateful for as all of them have provided me
          with great soft skills and a lot of experience.
        </p>

        <p
          className="font-weight-bolder animated slideInUp"
          style={{ fontSize: "22px" }}
        >
          Creating art and designing is my passion and it gives me gratification
          constantly. Even when that gratification is delayed after struggling
          for hours to figure out why something isn't working.
        </p>

       

        <MDBContainer className="mb-5 animated slideInUp" >
          <MDBListGroup style={{ width: "22rem" }}>
            <MDBListGroupItem  className="text-center" id="icons">
              <MDBIcon fab icon="css3" style={{ fontSize: "40px" }} />
            </MDBListGroupItem>
            <MDBListGroupItem className="text-center" id="icons">
              <MDBIcon fab icon="html5" style={{ fontSize: "40px" }} />
            </MDBListGroupItem>
            <MDBListGroupItem className="text-center" id="icons">
              <MDBIcon fab icon="js" style={{ fontSize: "40px" }} />
            </MDBListGroupItem>
            <MDBListGroupItem className="text-center" id="icons">
              {" "}
              <MDBIcon fab icon="react" style={{ fontSize: "40px" }} />
            </MDBListGroupItem>
            <MDBListGroupItem className="text-center" id="icons">
              {" "}
              <MDBIcon fab icon="node-js" style={{ fontSize: "40px" }} />
            </MDBListGroupItem>
            <MDBListGroupItem className="text-center" id="icons">
              {" "}
              <img src={MySQL} alt="mysql" style={{ width: "60px" }}></img>
            </MDBListGroupItem>
            <MDBListGroupItem className="text-center" id="icons">
              {" "}
              <img src={MongoDB} alt="mongodb" style={{ width: "60px" }}></img>
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBContainer>
      </MDBCol>
    </MDBRow>
  );
}
export default Aboutme;
