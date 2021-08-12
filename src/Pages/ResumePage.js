import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import Footer from '../Components/Footer/Footer'

export const ResumePage = () => {
    return (
      <Container>
          <Row>
              <Col>
              <embed src="cv_yacdany.pdf" type="application/pdf" width="100%" height="600px" />
              </Col>
          </Row>
          <Footer/>
      </Container>
    )
}

export default ResumePage