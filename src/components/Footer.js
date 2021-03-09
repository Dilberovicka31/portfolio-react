import React from "react";
import { MDBCol, MDBContainer, MDBFooter, MDBIcon } from "mdbreact";

function Footer() {
  return (
    <MDBFooter>
      <div className="footer-copyright text-center">
        <MDBCol md="12" className="text-center">
          <a className="ml-5" target="_blank" rel="noreferrer" href="https://github.com/Dilberovicka31" >
            <MDBIcon
              fab
              icon="github-square"
              style={{ fontSize: "50px", color: "#757174", marginRight:"15px" }}
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mia-dilberovic/">
            <MDBIcon
              fab
              icon="linkedin"
              style={{ fontSize: "50px", color: "#757174", marginLeft:"15px" }}
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/mija.dilberovic">
            <MDBIcon
              fab
              icon="facebook"
              style={{ fontSize: "50px", color: "#757174", marginLeft:"15px" }}
            />
          </a>
          <a  target="_blank" rel="noreferrer" href="https://www.instagram.com/mia_dilber/" >
            <MDBIcon
              fab
              icon="instagram"
              style={{ fontSize: "50px", color: "#757174", marginLeft:"15px" }}
            />
          </a>
        </MDBCol>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <p> Mia Dilberovic </p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default Footer;
