import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function TestimonialCarousel() {
  return (
    <div className="bg-dark">
      <div className="bg-noise py-5">
    <Container className="py-5 ">
      <h5 className="text-center text-white">Testimonials</h5>
      <h2 className="display-5 text-center text-white">What Our User's Says</h2>
    <Carousel className="  testi-slider">
      <Carousel.Item className="p-5 mb-5 ">
        <Row className="align-items-center">
          <Col lg={5}>
            <div class="quote-element__card">
              <img
                src="/testimonial/sphere2.png"
                loading="lazy"
                alt=""
                class="circle-top"
              />
              <img
                src="/testimonial/sphere1.png"
                loading="lazy"
                alt=""
                class="circle-bottom"
              />
              <div class="quote-element__meta-wrap">
                <div className="quote-element__meta">
                  <h3 className="text-white ">Francesco</h3>
                  <p className="subtitle text-white">Founder</p>
                </div>
                <div className="quote-element__asset">
                  <img
                    src="/testimonial/test_1.png"
                    alt=""
                    loading="lazy"
                    className="br-1"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <p
              className="text-white text-left"
              style={{ textAlign: "left", paddingLeft: "8%" }}
            >
              "Very impressed with Fastgen so far. They ship features at an
              incredible speed"
            </p>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item className="p-5 mb-5 ">
        <Row className="align-items-center">
          <Col lg={5}>
            <div class="quote-element__card">
              <img
                src="/testimonial/sphere2.png"
                loading="lazy"
                alt=""
                class="circle-top"
              />
              <img
                src="/testimonial/sphere1.png"
                loading="lazy"
                alt=""
                class="circle-bottom"
              />
              <div class="quote-element__meta-wrap">
                <div className="quote-element__meta">
                  <h3 className="text-white ">Francesco</h3>
                  <p className="subtitle text-white">Founder</p>
                </div>
                <div className="quote-element__asset">
                  <img
                    src="/testimonial/test_2.png"
                    alt=""
                    loading="lazy"
                    className="br-1"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <p
              className="text-white text-left"
              style={{ textAlign: "left", paddingLeft: "8%" }}
            >
              "Very impressed with Fastgen so far. They ship features at an
              incredible speed"
            </p>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item className="p-5 mb-5 ">
        <Row className="align-items-center">
          <Col lg={5}>
            <div class="quote-element__card">
              <img
                src="/testimonial/sphere2.png"
                loading="lazy"
                alt=""
                class="circle-top"
              />
              <img
                src="/testimonial/sphere1.png"
                loading="lazy"
                alt=""
                class="circle-bottom"
              />
              <div class="quote-element__meta-wrap">
                <div className="quote-element__meta">
                  <h3 className="text-white ">Francesco</h3>
                  <p className="subtitle text-white">Founder</p>
                </div>
                <div className="quote-element__asset">
                  <img
                    src="/testimonial/test_3.png"
                    alt=""
                    loading="lazy"
                    className="br-1"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <p
              className="text-white text-left"
              style={{ textAlign: "left", paddingLeft: "8%" }}
            >
              "Very impressed with Fastgen so far. They ship features at an
              incredible speed"
            </p>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
    </Container>
    </div>
    </div>
  );
}

export default TestimonialCarousel;
