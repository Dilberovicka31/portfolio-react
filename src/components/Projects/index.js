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
        <MDBCol md="4" className="mt-3">
          <MDBView hover>
            <img
              src={pooaday}
              className="img-fluid z-depth-1 animated slideInLeft"
              alt="project pooaday"
              style={{height:"300px"}}
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <div class="d-flex flex-column">
                <div class="p-2">
                  <p className=" font-weight-bold">
                    PooAday is app to track bowel movements along with other
                    important daily activities. Languages and technologies used:
                    Javascript, Sequelize, Node, Express, Handlebars, Passport.
                  </p>
                </div>
                <div class="p-2">
                  <MDBIcon
                    className="mt-2 flex-center"
                    icon="external-link-alt"
                  />
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
                </div>
              </div>
            </MDBMask>
          </MDBView>
        </MDBCol>

        <MDBCol md="4" className="mt-3">
          <MDBView hover>
            <img
              src={burgerapp}
              className="img-fluid z-depth-1 animated slideInDown"
              alt="project burger app"
              style={{height:"300px"}}
             
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <div class="d-flex flex-column">
                <div class="p-2">
                  <p className="font-weight-bold">
                    Eat-Da-Burger! is a restaurant app that lets users input the
                    names of burgers they'd like to eat. Languages and
                    technologies used: Javascript, MySQL, Node, Express,
                    Handlebars and ORM.
                  </p>
                </div>
                <div class="p-2">
                  <MDBIcon
                    className="mt-2 flex-center"
                    icon="external-link-alt"
                  />{" "}
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
                </div>
              </div>
            </MDBMask>
          </MDBView>
        </MDBCol>

        <MDBCol md="4" className="mt-3">
          <MDBView hover>
            <img
              src={covidtracker}
              className="img-fluid z-depth-1 animated slideInLeft"
              alt="project covid tracker"
              style={{height:"300px"}}
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <div class="d-flex flex-column">
                <div class="p-2">
                  <p className="font-weight-bolder">
                    Covid Tracker App to get current and previous data.
                    Languages and technologies used: HTML, Bulma, JavaScript,
                    Server-side API's.
                  </p>
                </div>
                <div class="p-2">
                  <MDBIcon
                    className="mt-2 flex-center"
                    icon="external-link-alt"
                  />
                  <a
                    className="flex-center"
                    href="https://github.com/UWCode-Group-5/State-COVID-Tracker/"
                  >
                    Visit Website
                  </a>

                  <MDBIcon className="mt-2 flex-center" fab icon="github" />
                  <a
                    className="flex-center"
                    href="https://pooaday.herokuapp.com/"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </MDBMask>
          </MDBView>
        </MDBCol>

        <MDBContainer className="mt-3">
          <MDBRow>
            <MDBCol md="4" className="mt-3">
              <MDBView hover>
                <img
                  src={weather}
                  className="img-fluid z-depth-1 animated slideInRight"
                  alt="project weather"
                  style={{height:"300px"}}
                />
                <MDBMask className="flex-center" overlay="white-strong">
                  <div class="d-flex flex-column">
                    <div class="p-2">
                      <p className="font-weight-bolder">
                        Simple weather app, five days forecast. Languages and
                        technologies used: HTML, Bootstrap, Third Party API.
                      </p>
                    </div>
                    <div class="p-2">
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
                    </div>
                  </div>
                </MDBMask>
              </MDBView>
            </MDBCol>
            <MDBCol md="4" className="mt-3">
              <MDBView hover>
                <img
                  src={employeedb}
                  className="img-fluid z-depth-1 animated slideInUp "
                  alt="project employeedb"
                  style={{height:"300px"}}
                 
                />
                <MDBMask className="flex-center mt-2" overlay="white-strong">
                  <div class="d-flex flex-column">
                    <div class="p-2">
                      <p className="font-weight-bolder">
                        Employee Database is an app created with React. You can
                        view all employees, search individual employees and sort
                        Languages and technologies used: React, Bootstrap,
                        Axios.
                      </p>
                    </div>
                    <div className="p-2">
                      {" "}
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
                      <MDBIcon
                        className="mt-2 mb-3 flex-center"
                        fab
                        icon="github"
                      />
                      <a
                        className="flex-center"
                        href="https://github.com/Dilberovicka31/employee-directory"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </MDBMask>
              </MDBView>
            </MDBCol>

            <MDBCol md="4" className="mt-3">
              <MDBView hover>
                <img
                  src={budget}
                  className="z-depth-1 animated slideInRight w-100"
                  alt="project budget"
                  style={{height:"300px"}}
                />
                <MDBMask className="flex-center" overlay="white-strong">
                  <div class="d-flex flex-column">
                    <div class="p-2">
                      
                      <p className="font-weight-bolder">
                        Budget tracker app that allows you to add deposits and
                        expenses with or without connection. Languages and
                        technologies used: Express, Mongoose, Service-Worker,
                        Webmanifest.
                      </p>
                    </div>
                    <div class="p-2">
                    
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
                      <MDBIcon
                        className="mt-2 mb-3 flex-center"
                        fab
                        icon="github"
                      />
                      <a
                        className="flex-center"
                        href="https://github.com/Dilberovicka31/BUDGET-TRACKERS"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </MDBMask>
              </MDBView>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBRow>
    </MDBContainer>
  );
}
export default Projects;
