import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Customer = () => {
  return (
    <div className="container-fluid my-5">
      <div className="container">
        <Row className="justify-content-center text-center py-5">
          <Col lg={8}>
            <h2 className="text-dark">Our Customers</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col className="m-3 p-0   ">

            <div>
              <center><Card.Img variant="top" src="./img/logo-social.png" alt="10X faster" /></center>

            </div>
          </Col>
          <Col className="m-3 p-0   ">

            <div>
              <center><Card.Img variant="top" src="./img/logo-social.png" alt="10X faster" /></center>

            </div>
          </Col>
          <Col className="m-3 p-0   ">

            <div>
              <center><Card.Img variant="top" src="./img/logo-social.png" alt="10X faster" /></center>

            </div>
          </Col>
          <Col className="m-3 p-0   ">

            <div>
              <center><Card.Img variant="top" src="./img/logo-social.png" alt="10X faster" /></center>

            </div>
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default Customer;
