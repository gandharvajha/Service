import React, { useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Masonry from 'masonry-layout';

const Testimonial2 = ({ imageSrc, name, designation, review }) => {
  return (
    <Card className="testimonial-card shadow mt-4 p-4">
      <Row className="align-items-center">
        <Col lg={4}>
          <Card.Img variant="top" src={imageSrc} alt={name} className="test-img" />
        </Col>
        <Col>
          <Card.Title className="testimonial-name">{name}</Card.Title>
          <Card.Text className="testimonial-designation">{designation}</Card.Text>
        </Col>
      </Row>
      <Card.Body>
        <Card.Text className="testimonial-review my-3">{review}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const Testimonial = () => {
  useEffect(() => {
    new Masonry('.testimonial-container', {
      itemSelector: '.col-testi',
      columnWidth: '.col-testi',
    });
  }, []);

  return (
    <Container>
     <Row className="justify-content-center text-center   py-5 mt-5">
        <Col >
           <h2 className="display-6 pb-2 ">
          Loved by builders around the world          
          </h2>
         
         </Col>
      </Row>
      <div className="testimonial-container">
        <Row>
          <Col lg={4} className="col-testi">
            <Testimonial2
              imageSrc="../testimonial/test_1.png"
              name="Evan J."
              designation="Software Developer"
              review="Favorite tool of the week: Fastgen. It is still in Beta but it already saved me so much time!"
            />
          </Col>
          <Col lg={4} className="col-testi">
            <Testimonial2
              imageSrc="../testimonial/test_2.png"
              name="Dan M."
              designation="Software Developer"
              review="We started building with Fastgen. It’s a crazy to see how much faster we are able to ship at Unlock. Looking forward to the next round of updates, especially the direct hosting feature"
            />
          </Col>
          <Col lg={4} className="col-testi">
            <Testimonial2
              imageSrc="../testimonial/test_3.png"
              name="Max E."
              designation="Software Developer"
              review="Just received early access to Fastgen. Can’t wait to see what this platform is capable of"
            />
          </Col>
          <Col lg={4} className="col-testi">
            <Testimonial2
              imageSrc="../testimonial/test_4.png"
               name="Matthias K."
              designation="Software Developer"
              review="Shoutout to Fastgen. Love how quickly I can build new backends without thinking about DevOps at all"
            />
          </Col>
          <Col lg={4} className="col-testi">
            <Testimonial2
              imageSrc="../testimonial/test_3.png"
               name="Max G."
              designation="Software Developer"
              review="I am a big fan of the Fastgen team. They are lighting fast with their replies to any question"
            />
          </Col>
          <Col lg={4} className="col-testi">
            <Testimonial2
              imageSrc="../testimonial/test_1.png"
               name="Andrej S."
              designation="Software Developer"
              review="Fastgen is my new favorite way to build automations at Lumos. It is fast and we do not need to think about hosting at all. Hope they add more integrations soon"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Testimonial;
