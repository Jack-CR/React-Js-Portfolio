import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
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
DiBootstrap
} from 'react-icons/all'
import Footer from '../Components/Footer/Footer'

const IconsSkills = [
    <AiOutlineHtml5 size={200} color="#f06529" />,
    <DiCss3 size={200} color="#264de4" />,
    <FaReact size={200} color="#61DBFB " />,
    <GrNode size={200} color="#68a063 " />,
    <FaLaravel size={200} color="#fb503b " />,
    <IoLogoJavascript size={200} color="#f0db4f" />,
    <DiMongodb size={200} color="#3FA037" />,
    <SiMysql size={200} color="#F29111" />,
    <DiBootstrap size={200} color="#7952b3 " />,
    <FaGitAlt size={200} color="#F1502F " />
]
export const SkillsPage = () => {
    return (
        <Container>
            <Row className="mt-3">
                {
                    IconsSkills.map((el, key) => {
                        return (
                            <Col key={key}>{el}</Col>
                        )
                    })
                }
            </Row>
            <Footer />
        </Container>
    )
}

export default SkillsPage