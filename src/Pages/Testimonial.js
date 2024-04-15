import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Why from "../why-choose-us.jpg";


const Testimonial = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <Row className="justify-content-center text-center py-5">
          <Col lg={8}>
            <h2 className="text-dark">What Our Clients Say</h2>
            {/* <p>
              Get started for free and unleash your creativity by designing a
              stunning website that reflects your unique style and meets your
              specific needs. Our user-friendly platform offers a range of
              powerful features and customization options to bring your vision to
              life.
            </p> */}
          </Col>
          <Carousel className="mt-5">
      <Carousel.Item>
        <img src={Why} className="carousel_img_style"/>
          <h3 className="text-dark">"Amazing Designs and Quality Work!"</h3>
          <p>Nam at congue diam. Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero, ac malesuada vulputate pharetra.</p>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Why} className="carousel_img_style"/>
         <h3 className="text-dark">"Amazing Designs and Quality Work!"</h3>
          <p>Nam at congue diam. Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero, ac malesuada vulputate pharetra.</p>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Why} className="carousel_img_style"/>
        <h3 className="text-dark">"Amazing Designs and Quality Work!"</h3>
          <p>Nam at congue diam. Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero, ac malesuada vulputate pharetra.</p>
      </Carousel.Item>
    </Carousel>
        </Row>
       
      </div>
    </div>
  );
};

export default Testimonial;
