import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardsComponent from '../Components/Cards/CardsComponent'

const MyProjects = [
    {
        name: "Shopping Cart",
        tecnologies: {
            tec_1: "Laravel",
            tec_2: "Mysql"
        }
    },
    {
        name: "venta",
        tecnologies: {
            tec_1: "Mysql",
            tec_2: "java"
        }
    }
]

export const ProjectsPage = () => {
    return (
        <Container>
            <Row>
                {MyProjects.map((el, key) => {
                    return (
                        <Col>
                            <CardsComponent project={el} key={key} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default ProjectsPage