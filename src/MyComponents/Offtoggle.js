import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Offtoggle() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a variant="primary" className='px-3' onClick={handleShow}>
        <img src='./shape/menu.png' width="35px"/>
      </a>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton={false}  >
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          <button className="custom-close-button" onClick={handleClose}>
           x 
        </button>
        </Offcanvas.Header> 
        <Offcanvas.Body>
        <h2>Content to be added later</h2>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Offtoggle;