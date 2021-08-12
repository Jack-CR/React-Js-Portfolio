import React from 'react'
import { Row, Col } from 'react-bootstrap'

export const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <Row className="bg bg-white rounded mt-3">
            <Col>
                <label>Yacdany Arguedas Mora ©{date}</label>
            </Col>
        </Row>
    )
}

export default Footer