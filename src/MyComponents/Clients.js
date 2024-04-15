import React, { Component } from "react";
import Slider from "react-slick";
import Logo from "../logo-social.png";
import {Row,Col} from "react-bootstrap";

export default class Responsive extends Component{
  render() {
    var settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
      ]
    };
  return (
    <div className="container-fluid mb-5">
      <div className="container">
        <Row className="justify-content-center text-center py-5">
          <Col lg={8}>
            <h2 className="text-dark">Our Customers</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
            </p>
          </Col>
        </Row>
        <Slider {...settings} >
          <div>
            <img src={Logo} alt="10X faster"  />
          </div>
          <div>
            <img src={Logo} alt="10X faster"  />
          </div>
          <div>
            <img src={Logo} alt="10X faster" />
          </div>
          <div>
            <img src={Logo} alt="10X faster"  />
          </div>
        </Slider>
      </div>
    </div>
  );
};
}
