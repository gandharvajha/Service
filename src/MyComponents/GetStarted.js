import { Button, Card, Col, Container, Row } from "react-bootstrap";

const GetStarted = () => {
  return (
    <div className="container-fluid get_background">
      <div className="container">
        <Row className="justify-content-center text-center py-5">
          <Col lg={8}>
            <h2 className="text-dark">How can we help you?</h2>
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
          <Col className="m-3 p-0   ">

            <Card className="text-center shadow-card  p-4 b-n " >
              <center><Card.Img variant="top" src="./home/icon2.png" alt="10X faster" className="icon-style" /></center>
              <Card.Body>
                <Card.Title>Design</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="m-3 p-0   text-center">

            <Card className="text-center shadow-card  p-4  b-n " >
              <center><Card.Img variant="top" src="./home/icon3.png" alt="Customize" className="icon-style" /></center>
              <Card.Body>
                <Card.Title>Development</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="m-3 p-0    text-center">

            <Card className="text-center b-n p-4 shadow-card -card " >
              <center><Card.Img variant="top" src="./home/icon1.png" alt="Best for SEO" className="icon-style" /></center>
              <Card.Body>
                <Card.Title>Marketing</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
        <Row className="pb-5">
          <Col className="m-3 p-0   ">

            <Card className="text-center shadow-card p-4 b-n " >
              <center><Card.Img variant="top" src="./home/icon2.png" alt="10X faster" className="icon-style" /></center>
              <Card.Body>
                <Card.Title>Social Media</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="m-3 p-0   text-center">

            <Card className="text-center shadow-card p-4  b-n " >
              <center><Card.Img variant="top" src="./home/icon3.png" alt="Customize" className="icon-style" /></center>
              <Card.Body>
                <Card.Title>eCommerce</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="m-3 p-0    text-center">

            <Card className="text-center b-n p-4 shadow-card -card
 " >
              <center><Card.Img variant="top" src="./home/icon1.png" alt="Best for SEO" className="icon-style" /></center>
              <Card.Body>
                <Card.Title>Help & Support</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default GetStarted;
