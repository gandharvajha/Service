import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Startaproject = () => {
  return (
    <div className="container-fluid my-5">
      <div className="container">
        <Row className="d-flex align-items-center banner-subs">
          <Col sm={10} md={8} lg={8} className=" p-3   ">
            <div>
            <h2 className="text-dark">Would you like to start a project with us?</h2>
            <p>
            Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero.
            </p>
            </div>
          </Col>
          <Col sm={10} md={4} lg={4} className=" p-3   ">
            <div>
            <Button   className="d-flex btn-number">
            <a href="tel:123-456-7890" className="text-light">123-456-7890</a>
          </Button>
            </div>
          </Col>
         

        </Row>
       
      </div>
    </div>
  );
};

export default Startaproject;
