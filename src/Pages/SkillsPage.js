import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import 
{
    AiOutlineHtml5,
    DiCss3,
    FaReact,
    GrNode,
    FaLaravel,
    IoLogoJavascript,
    DiMongodb,
    SiMysql,
    FaGitAlt
} from 'react-icons/all'

const IconsSkills=[
    <AiOutlineHtml5 size={200} color="#f06529"/>,
    <DiCss3 size={200} color="#264de4"/>,
    <FaReact size={200} color="#61DBFB "/>,
    <GrNode size={200} color="#68a063 "/>,
    <FaLaravel size={200} color="#fb503b "/>,
    <IoLogoJavascript size={200} color="#f0db4f"/>,
    <DiMongodb size={200} color="#3FA037"/>,
    <SiMysql size={200} color="#F29111"/>,
    <FaGitAlt size={200} color="#F1502F "/>
]
export const SkillsPage = () => {
    return (
      <Container>
        <Row>
            <Col>
                {IconsSkills}
            </Col>
        </Row>
      </Container>
    )
}

export default SkillsPage