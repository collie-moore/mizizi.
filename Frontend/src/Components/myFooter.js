
import React from "react";
import { Col, Container, Row } from "reactstrap";
import './Footer.css'

const Footer = () => {
  return (

   <div className="my-footer">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="12">
            <h5 className="title"> </h5>
            <p></p>     
            <div class="container p-3">
            <div class="titles pb-3">
                <h1 class="section-title text-center text-uppercase text-white">stay up to date to our news and offers</h1>
                <h3 class="section-subtitle text-center text-white-50">A good start is to subscribe to our weekly newsletter.</h3>
            </div>
            <div class="row">
                <div class="col-6 mx-auto text-center">
                    <form>
                        <div class="input-group">
                            <input
                                type        = "email"
                                placeholder = "Type your email"
                                class       = "form-control"
                            />
                            <div class="input-group-append">
                                <button class="btn light-button text-capitalize font-weight-bold" type="submit">submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row py-5">
                <div class="col-md-12 col-lg-6">
                    <i class="far fa-hand-scissors text-white"></i>
                    <p class="text-white-50">Mizizi is dedicated to provide world class services and help our clients live a healthy life through excercise</p>
                </div>
                <div class="col-md-12 col-lg-6">
                <Col md="">
            <h5 className="title"> Social Media</h5>
            <ul>
              <li className="list-unstyled">
              <a href="www.facebook.com" target="_empty"><i class="fa top-social fa-facebook"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="https://twitter.com/TeamMizizi">Twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Instagram</a>
              </li>
              </ul>
          </Col>
       </div>
       </div>
      </div>
      </Col>
    </Row>
  </Container>
</div>
     
  );
}
export default Footer;