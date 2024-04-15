import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Why from '../why-choose-us.jpg';


const AboutSection = () => {
  return (
    <div className="container-fluid get_background">
      <div className="container">
        <Row className="justify-content-center text-center py-5">
          <Col lg={8}>
            <h2 className="text-dark">About Us</h2>
            <p>
              Get started for free and unleash your creativity by designing a
              stunning website that reflects your unique style and meets your
              specific needs. Our user-friendly platform offers a range of
              powerful features and customization options to bring your vision to
              life.
            </p>
          </Col>
        </Row>
        <Row className="pb-4">
          <Col sm={10} md={8} lg={8} className="p-0   ">
          <img src={Why} className="w-100"/>

          </Col>
          <Col sm={10} md={4} lg={4} className="pl-4 pt-2 ">
          <h4 className="text-dark">Meet Our Leadership</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.​
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.​
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.​Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.​Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.​Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.​
            </p>
          </Col>

        </Row>
       
      </div>
    </div>
  );
};

export default AboutSection;
