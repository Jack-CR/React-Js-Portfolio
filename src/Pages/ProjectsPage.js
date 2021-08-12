import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardsComponent from '../Components/Cards/CardsComponent'
import Footer from '../Components/Footer/Footer'

const MyProjects = [
    {
        en:{
            projectTitle:"3 Month Supervised Practice at Betico Mata & Parrilla Restaurant",
            projectBtnImages:"Show Images"
        },
        es:{
            projectTitle:"3 Meses de Practica Supervisada en el Restaurante Betico Mata & Parrilla",
            projectBtnImages:"Mostrar Imagenes"
        },
        tecnologies:[
            "laravel",
            "php"
        ]
    },
]

export const ProjectsPage = ({lang,language}) => {

    return (
        <Container className="mt-5">
            <Row>
                {MyProjects.map((el, key) => {
                    return (
                        <Col key={key}>
                            <CardsComponent project={el} lang={lang}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
        
    )
}

export default ProjectsPage