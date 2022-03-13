import { Button, Modal } from "react-bootstrap";
import { useState } from 'react';
import './Note.css';

function Note() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Note
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalBody">
            <h4 className="noteTitle">Breakdown of Terminologies</h4>
            <ul>
              <li><b>Initial Amount: </b>Refers to the existing investments. If you don't have any, enter 0.</li>
              <li><b>SIP Start Amount: </b>Refers to the SIP amount you want to start with.</li>
              <li><b>Annual Step-Up %: </b>Refers to the percentage by which you will be increasing your SIP amount year on year.</li>
              <li><b>Number of Years: </b>Refers to the total period of investment decided by you.</li>
              <li><b>SIP Start Year: </b>Refers to the year in which you are starting your SIP.</li>
              <li><b>Expected Returns: </b>Refers to the expected returns from your investments. Don't be greedy! Be rational.</li>
              <li><b>Currency: </b>Refers to the currency in which investments are made. By default, INR is selected. Any other currency 
              will have the International Number System format of representation.</li>
              
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Note;