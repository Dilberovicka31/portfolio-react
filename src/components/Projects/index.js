import React from "react";
import "./index.css";
import pooaday from "../images/pooaday.png";
import burgerapp from "../images/burgerapp.png";
import covidtracker from "../images/covidtracker.png";
import weather from "../images/Weather.jpg";
import employeedb from "../images/employeedb.png";
import budget from "../images/budget.png";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBView,
} from "mdbreact";

function Projects() {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="4">
          <MDBView hover>
            <img
              src={pooaday}
              className="img-fluid z-depth-1"
              alt="project pooaday"
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <p className="font-weight-bolder">
                PooAday is app to track bowel movements along with other
                important daily activities. Languages and technologies used:
                Javascript, Sequelize, Node, Express, Handlebars, Passport.
              </p>
            </MDBMask>

            <MDBIcon className="mt-2 flex-center" icon="external-link-alt" />
            <a
              className="flex-center mt-2"
              href="https://pooaday.herokuapp.com/"
            >
              Visit Website
            </a>

            <MDBIcon className="mt-2 flex-center" fab icon="github" />
            <a
              className="flex-center"
              href="https://github.com/JJHPhoto/pooaday"
            >
              GitHub
            </a>
          </MDBView>
        </MDBCol>

        <MDBCol md="4">
          <MDBView hover>
            <img
              src={burgerapp}
              className="img-fluid z-depth-1"
              alt="project pooaday"
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <p className="font-weight-bolder">
                Eat-Da-Burger! is a restaurant app that lets users input the
                names of burgers they'd like to eat. Languages and technologies
                used: Javascript, MySQL, Node, Express, Handlebars and ORM.
              </p>
            </MDBMask>
            <MDBIcon className="mt-2 flex-center" icon="external-link-alt" />{" "}
            <a
              className="flex-center"
              href="https://agile-shore-61720.herokuapp.com/"
            >
              Visit Website
            </a>
            <MDBIcon className="mt-2 flex-center" fab icon="github" />
            <a
              className="flex-center"
              href="https://github.com/Dilberovicka31/BURGER-APP"
            >
              GitHub
            </a>
          </MDBView>
        </MDBCol>

        <MDBCol md="4">
          <MDBView hover>
            <img
              src={covidtracker}
              className="img-fluid z-depth-1"
              alt="project covid tracker"
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <p className="font-weight-bolder">
                Covid Tracker App to get current and previous data. Languages
                and technologies used: HTML, Bulma, JavaScript, Server-side
                API's.
              </p>
            </MDBMask>

            <MDBIcon className="mt-2 flex-center" icon="external-link-alt" />
            <a
              className="flex-center"
              href="https://github.com/UWCode-Group-5/State-COVID-Tracker/"
            >
              Visit Website
            </a>

            <MDBIcon className="mt-2 flex-center" fab icon="github" />
            <a className="flex-center" href="https://pooaday.herokuapp.com/">
              GitHub
            </a>
          </MDBView>
        </MDBCol>

        <MDBContainer className="mt-3">
          <MDBRow>
            <MDBCol md="4">
              <MDBView hover>
                <img
                  src={weather}
                  className="img-fluid z-depth-1"
                  alt="project weather"
                />
                <MDBMask className="flex-center" overlay="white-strong">
                  <p className="font-weight-bolder">
                    Simple weather app, five days forecast. Languages and
                    technologies used: HTML, Bootstrap, Third Party API.
                  </p>
                </MDBMask>

                <MDBIcon
                  className="mt-2 flex-center"
                  icon="external-link-alt"
                />
                <a
                  className="flex-center"
                  href="https://dilberovicka31.github.io/WEATHER-FORECAST/"
                >
                  Visit Website
                </a>

                <MDBIcon className="mt-2 flex-center" fab icon="github" />
                <a
                  className="flex-center"
                  href="https://github.com/Dilberovicka31/WEATHER-FORECAST"
                >
                  GitHub
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView hover>
                <img
                  src={employeedb}
                  className="img-fluid z-depth-1"
                  alt="project employeedb"
                />
                <MDBMask className="flex-center" overlay="white-strong">
                  <p className="font-weight-bolder">
                    Employee Database is an app created with React. You can view
                    all employees, search individual employees and sort
                    Languages and technologies used: React, Bootstrap, Axios.
                  </p>
                </MDBMask>
                <MDBIcon
                  className="mt-2 flex-center"
                  icon="external-link-alt"
                />{" "}
                <a
                  className="flex-center"
                  href="https://employee-dr.herokuapp.com/"
                >
                  Visit Website
                </a>
                <MDBIcon className="mt-2 mb-3 flex-center" fab icon="github" />
                <a
                  className="flex-center"
                  href="https://github.com/Dilberovicka31/employee-directory"
                >
                  GitHub
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView hover>
                <img
                  src={budget}
                  className="img-fluid z-depth-1"
                  alt="project budget"
                />
                <MDBMask className="flex-center" overlay="white-strong">
                  <p className="font-weight-bolder">
                    Budget tracker app that allows you to add deposits and
                    expenses with or without connection. Languages and
                    technologies used: Express, Mongoose, Service-Worker,
                    Webmanifest.
                  </p>
                 
                </MDBMask>
                <MDBIcon
                  className=" flex-center"
                  icon="external-link-alt"
                />
                <a
                  className="flex-center"
                  href="https://enigmatic-dusk-53750.herokuapp.com/"
                >
                  Visit Website
                </a>

                <MDBIcon className="mt-2 mb-3 flex-center" fab icon="github" />
                <a
                  className="flex-center"
                  href="https://github.com/Dilberovicka31/BUDGET-TRACKERS"
                >
                  GitHub
                </a>

               
              </MDBView> 
              
              
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBRow>
    </MDBContainer>
  );
}
export default Projects;
