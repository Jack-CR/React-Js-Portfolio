import React, { useState } from 'react'
import {MdLaptopChromebook} from 'react-icons/all'
import {Modal,Button} from 'react-bootstrap'

export const ModalJs = ({lang,language}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="secondary" onClick={handleShow}>
          <MdLaptopChromebook size={25} color="black"/> {language[lang].modalAbout}
          
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{language[lang].modalHeader}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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