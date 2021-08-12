import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { FaImages } from 'react-icons/all'
import {Container,Row,Col } from 'react-bootstrap'


export const OffCanvaComponent = ({ project, lang }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                <FaImages size={20} color="white"/> {project[lang].projectBtnInfo}
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{project[lang].projectTitle}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Container>
                        <Row>
                            <h3>{project[lang].canvaBuiltwith}</h3>
                            {
                                project.tecnologies.map((el,key)=>{
                                    return (
                                        <Col key={key}>{el}</Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                    {
                        project.imgProject.map((el, key) => {
                            return (
                                <Image src={el} alt={key} key={key} fluid></Image>
                            )
                        })
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffCanvaComponent