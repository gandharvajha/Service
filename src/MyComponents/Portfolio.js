import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Portfolio = () => {
  return (
    <div className="container-fluid ">
      <div className="container">
        <Row className="justify-content-center text-center py-5">
          <Col lg={8}>
            <h2 className="text-dark">Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col sm={8} md={3} lg={3}  className="p-1   ">

            <div>
              <center><Card.Img variant="top" src="./img/portfolio1.jpg" alt="10X faster" /></center>

            </div>
          </Col>
          <Col sm={8} md={3} lg={3} className="p-1   ">

            <div>
              <center><Card.Img variant="top" src="./img/portfolio2.jpg" alt="10X faster" /></center>

            </div>
          </Col>
          <Col sm={8} md={3} lg={3} className="p-1   ">

            <div>
              <center><Card.Img variant="top" src="./img/portfolio3.jpg" alt="10X faster" /></center>

            </div>
          </Col>
          <Col sm={8} md={3} lg={3} className="p-1  ">

            <div>
              <center><Card.Img variant="top" src="./img/portfolio4.jpg" alt="10X faster" /></center>

            </div>
          </Col>

        </Row>
        <Row >
        <center>
        <Button className='mt-5 explore_me'  >
         EXPLORE ME
        </Button>
        </center>
        </Row>
      </div>
    </div>
  );
};

export default Portfolio;
