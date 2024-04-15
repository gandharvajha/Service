import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const Contactwithmap = () => {

    return (
        <div style={{}} className='py-5 get_background'>
            <Container>
                <Row className='mb-4'>
                <h2 className="text-dark text-center" >Get in Touch</h2>
                </Row>
                <Row>
                    <Col sm={10} md={5} lg={5}>
                        {/* <h4 className="text-dark">Get In Touch</h4> */}
                        <Row className='d-flex justify-content-center align-items-center'>
                        <h4 className="text-dark text-center">Location</h4>
                            <Col lg="3" >
                                <span className='icon_bg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                </span>
                            </Col>
                            <Col lg="7" >

                                {/* <address> */}
                                    123/B, Route 66, Downtown, Washington, DC 20004, US
                                {/* </address> */}
                            </Col>

                        </Row>
                        <Row className='d-flex justify-content-center align-items-center  mt-2'>
                            <Col lg="3" >
                                <span className='icon_bg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                    </svg>
                                </span>
                            </Col>
                            <Col lg="7">
                                <p>
                                    info@example.com
                                </p>
                            </Col>

                        </Row>
                        <Row className='d-flex justify-content-center align-items-center mt-2'>
                            <Col lg="3" >
                                <span className='icon_bg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-forward" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>
                            </Col>
                            <Col lg="7">
                                <phone><a href="tel:
+001 987-654-3210">
                                    +001 987-654-3210</a></phone>
                            </Col>

                        </Row>
                    </Col>
                    <Col sm={10} md={7} lg={7} >
                        <h4 className="text-dark">Request Free Consultation</h4>
                        <div>
                            <Form>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Group as={Col} controlId="formGridName">
                                            <Form.Control type="text" placeholder="First Name*" required />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group as={Col} controlId="formGridName">
                                            <Form.Control type="text" placeholder="Last Name*" required />
                                        </Form.Group>
                                    </Col>


                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Control type="email" placeholder="Enter email*" required />
                                    </Form.Group>
                                </Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Your Message"
                                        style={{ height: '100px' }}
                                        required />
                                </Form.Group>
                                <Button variant="primary" type="submit" className='mt-3'>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>



                </Row>
                <Row className='my-4'>

                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69446.05348150381!2d-101.57377715287869!3d39.71468901546031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8774e7dffbe76e6d%3A0x4aaa063ebd103fb!2sFairgrounds!5e0!3m2!1sen!2sin!4v1690438253547!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>

                </Row>
            </Container>


        </div>
    );
};

export default Contactwithmap;