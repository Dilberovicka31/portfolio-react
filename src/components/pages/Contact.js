import { MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFile } from '@fortawesome/free-solid-svg-icons';
import Resume from "../../documents/Resume.pdf"


function Contact () {
    
   
   
      return (
        <MDBContainer>
        <MDBRow>
            <MDBCol md="12" className="text-center mt-5" style={{marginBottom:"332px"}}>
            <MDBIcon icon="phone" style={{fontSize:"30px"}}/>
            <p style={{fontSize:"25px"}}>(509)-554-6580</p>
            <MDBIcon far icon="envelope" style={{fontSize:"30px"}}/> <br></br>
            <a href="mailto:dilberovicm36@gmail.com" style={{color:"black", fontSize:"25px"}}>dilberovicm36@gmail.com</a><br></br>
            <FontAwesomeIcon icon={faFile} className="mt-3" style={{fontSize:"30px"}}/> <br></br>
            <a href={Resume} download="Resume.pdf" style={{color:"black", fontSize:"25px" }}>Resume</a>
            </MDBCol>
           

            
            
        </MDBRow>

        
        
        </MDBContainer>
        );
      }
    
    
export default Contact;