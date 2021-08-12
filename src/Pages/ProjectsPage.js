import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardsComponent from '../Components/Cards/CardsComponent'
import Footer from '../Components/Footer/Footer'
import {
    AiOutlineHtml5,
    DiCss3,
    FaReact,
    GrNode,
    FaLaravel,
    IoLogoJavascript,
    DiMongodb,
    SiMysql,
    FaGitAlt,
    DiBootstrap,
    FaPhp
    } from 'react-icons/all'

/* LIST OF MY PROJECTS */
const MyProjects = [
    {/* PROJECT 1 */
        en: {
            projectTitle: "3 Month Supervised Practice at Betico Mata & Parrilla Restaurant",
            projectInfo: " Develop a web application with a duration of 3 months to conclude with the supervised practice.",
            projectBtnInfo: "More Information",
            canvaBuiltwith:"Built with:"
        },
        es: {
            projectTitle: "3 Meses de Practica Supervisada en el Restaurante Betico Mata & Parrilla",
            projectInfo: " Desarrollar una Aplicación Web con una duración de 3 meses para concluir con la practica supervisada.",
            projectBtnInfo: "Más Información",
            canvaBuiltwith:"Construido con:"
        },
        imgStart: "img/project_1/1.png",
        tecnologies:
        [
            <AiOutlineHtml5 size={60}/>,
            <DiCss3 size={60}/>,
            <SiMysql size={60}/>,
            <IoLogoJavascript size={60}/>,
            <FaPhp size={60}/>
        ],
        imgProject:
            [
                "img/project_1/1.png",
                "img/project_1/2.png",
                "img/project_1/3.png",
                "img/project_1/4.png"
            ]
    },
    /* Project 2 */
    {
        en: {
            projectTitle: "Market",
            projectInfo: "Develop a market web  application where each user can register, publish their products, see other users' products, comment on publications, etc.",
            projectBtnInfo: "More Information",
            canvaBuiltwith:"Built with:"
        },
        es: {
            projectTitle: "Mercado Libre",
            projectInfo: "Desarrollar Aplicacíon tipo mercado libre donde cada usuario pueda registrarse publicar sus productos , ver productos de otros usuarios , comentar publicaciones etc",
            projectBtnInfo: "Más Información",
            canvaBuiltwith:"Construido con:"
        },
        imgStart: "img/project_2/1.png",
        tecnologies:
        [
            <AiOutlineHtml5 size={60}/>,
            <DiCss3 size={60}/>,
            <SiMysql size={60}/>,
            <IoLogoJavascript size={60}/>,
            <FaLaravel size={60}/>
        ],
        imgProject:
        [
            "img/project_2/1.png",
            "img/project_2/2.png",
            "img/project_2/3.png",
            "img/project_2/4.png"
        ]
    }
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