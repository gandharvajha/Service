import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Ourprocess = () => {
  return (
    <div className="container-fluid get_background py-5">
      <div className="container">
        <Row className="justify-content-center text-center py-5">
          <Col lg={8}>
            <h2 className="text-dark">Our 6-D Process</h2>
          </Col>
        </Row>
        <Row className="">
            <Col sm={10} md={4} lg={4} className="about_three  mt-2">
            <h2>01.</h2>
            <p><strong>Developer</strong></p>
            <p className="banner-subtitle text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>

            </Col>
            <Col sm={10} md={4} lg={4} className="about_three  mt-2">
            <h2>02.</h2>
            <p><strong>Define</strong></p>
            <p className="banner-subtitle text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>

            </Col>
            <Col sm={10} md={4} lg={4} className="about_three  mt-2">
            <h2>03.</h2>
            <p><strong>Design</strong></p>
            <p className="banner-subtitle text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>

            </Col>
        </Row>
        <Row className="">
            <Col sm={10} md={4} lg={4} className="about_three mt-2">
            <h2>04.</h2>
            <p><strong>Develop</strong></p>
            <p className="banner-subtitle text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>

            </Col>
            <Col sm={10} md={4} lg={4} className="about_three  mt-2">
            <h2>05.</h2>
            <p><strong>Deploy</strong></p>
            <p className="banner-subtitle text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>

            </Col>
            <Col  sm={10} md={4} lg={4} className="about_three  mt-2">
            <h2>06.</h2>
            <p><strong>Deliver</strong></p>
            <p className="banner-subtitle text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>

            </Col>
        </Row>
      </div>
    </div>
  );
};

export default Ourprocess;
