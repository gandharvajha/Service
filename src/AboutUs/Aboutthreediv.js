import {Card, Col, Container, Row } from "react-bootstrap";

const Aboutthreediv = () => {
  return (  
    <div className="container-fluid get_background">
      <div className="container">
      <Row className="justify-content-center text-center py-5">
          <Col lg={8}>
            <h2 className="text-dark">What We do?</h2>
            <p>
              Get started for free and unleash your creativity by designing a
              stunning website that reflects your unique style and meets your
              specific needs. Our user-friendly platform offers a range of
              powerful features and customization options to bring your vision to
              life.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col sm={10} md={4} lg={4} className="mt-3 p-2   ">

            <Card className="text-center shadow-card  p-4 b-n " >
              
              <Card.Body>
                <Card.Title className="what">Who Are We</Card.Title>
                <Card.Text className="mt-4">
                Ut elit tellus, luctus nec ullam corper mattis, pulvinar. Etiam erat lectus, finibus eget commodo quis, tinci dunt eget leo. Nullam quis vulpu tate orci, ac accum san quam. Morbi frin gilla congue libero.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={10} md={4} lg={4} className="mt-3 p-2   text-center">

            <Card className="text-center shadow-card  p-4  b-n " >
              <Card.Body>
                <Card.Title className="what">Our Mission</Card.Title>
                <Card.Text className="mt-4">
                Ut elit tellus, luctus nec ullam corper mattis, pulvinar. Etiam erat lectus, finibus eget commodo quis, tinci dunt eget leo. Nullam quis vulpu tate orci, ac accum san quam. Morbi frin gilla congue libero.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={10} md={4} lg={4} className="mt-3 p-2    text-center">

            <Card className="text-center b-n p-4 shadow-card -card " >
              <Card.Body>
                <Card.Title className="what">What We Do</Card.Title>
                <Card.Text className="mt-4">
                Ut elit tellus, luctus nec ullam corper mattis, pulvinar. Etiam erat lectus, finibus eget commodo quis, tinci dunt eget leo. Nullam quis vulpu tate orci, ac accum san quam. Morbi frin gilla congue libero.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default Aboutthreediv;
