import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Portfolio = () => {
  return (
    <div className="container-fluid ">
      <div className="container">
        <Row className="justify-content-center text-center py-5">
          <Col lg={8}>
            <h2 className="text-dark">Meet Our Leadership</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.​
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col className="m-3 p-0   ">

            <div>
              <center>
                <Card.Img variant="top" src="./img/team-1.jpg" alt="10X faster" />
                <h4 className="mt-4">Joanne Williams</h4>
                <p>Founder</p>
                
            </center>

            </div>
          </Col>
          <Col className="m-3 p-0   ">

            <div>
              <center>
                <Card.Img variant="top" src="./img/team-2.jpg" alt="10X faster" />
                <h4 className="mt-4">Fred Buster</h4>
                <p>Director OPS</p>
            </center>

            </div>
          </Col>
          <Col className="m-3 p-0   ">

            <div>
              <center>
                <Card.Img variant="top" src="./img/team-3.jpg" alt="10X faster" />
                <h4 className="mt-4">Lisa Hoffman​</h4>
                <p>Director HR</p>
             </center>

            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Portfolio;
