import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardsComponent from '../Components/Cards/CardsComponent'
import Footer from '../Components/Footer/Footer'

/* LIST OF MY PROJECTS */
const MyProjects = [
    {
        en: {
            projectTitle: "3 Month Supervised Practice at Betico Mata & Parrilla Restaurant",
            projectInfo:" Develop a web application with a duration of 3 months to conclude with the supervised practice.",
            projectBtnImages: "Show Images"
        },
        es: {
            projectTitle: "3 Meses de Practica Supervisada en el Restaurante Betico Mata & Parrilla",
            projectInfo:" Desarrollar una Aplicación Web con una duración de 3 meses para concluir con la practica supervisada.",
            projectBtnImages: "Mostrar Imagenes"
        },
        tecnologies: [
          "jaja",
          "phphp"
        ],
        imgStart:"img/project_1/1.png"
    },
]

export const ProjectsPage = ({ lang }) => {

    return (
        <Container className="mt-5">
            <Row>
                {MyProjects.map((el, key) => {
                    return (
                        <Col key={key}>
                            <CardsComponent project={el} lang={lang} />
                        </Col>
                    )
                })}
            </Row>
        </Container>

    )
}

export default ProjectsPage