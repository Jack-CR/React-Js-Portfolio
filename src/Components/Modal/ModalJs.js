import React, { useState } from 'react'
import { MdLaptopChromebook } from 'react-icons/all'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import {SiDotNet,DiDjango} from 'react-icons/all'

export const ModalJs = ({ lang, language }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        <MdLaptopChromebook size={25} color="black" /> {language[lang].modalAbout}

      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{language[lang].modalHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <img src="profile_photo.jpg" alt="prophile_photo" style={{ width: "200px" }}></img>
              </Col>
              <Col>
                <h2>{language[lang].modalAboutMe}</h2>
                <p className="mt-5">
                  {language[lang].modalmeDescription}
                </p>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                { <h3>{language[lang].modalTecIwhant}</h3>}
                <SiDotNet size={75} color="purple"/>
                <DiDjango size={75} color="#092E20 " style={{marginLeft:"30px"}}/>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalJs