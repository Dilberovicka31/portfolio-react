import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import painting1 from "../images/paintings/IMG_0660.jpeg";
import painting2 from "../images/paintings/IMG_0806.jpeg";
import painting3 from "../images/paintings/IMG_1274.jpeg";
import painting4 from "../images/paintings/IMG_2915.jpeg";
import "./art.css"

function Art(){
    return(

        <MDBContainer className="mt-5">
        <MDBCarousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={true}
          className="z-depth-5"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="img-fluid mx-auto d-block w-responsive"
                  src={painting1}
                  alt="First slide"
                  style={{minHeight:"400px"}}
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="img-fluid mx-auto d-block w-75 "
                  src={painting2}
                  alt="Second slide"
                  style={{height:"800px", width:"500px"}}
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="img-fluid mx-auto d-block w-75 "
                  src={painting3}
                  alt="Third slide"
                  style={{height:"600px", width:"400px"}}
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView>
                <img
                  className="img-fluid mx-auto d-block w-75 "
                  src={painting4}
                  alt="Fourth slide"
                  style={{minHeight:"700px"}}
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    )
}
export default Art;