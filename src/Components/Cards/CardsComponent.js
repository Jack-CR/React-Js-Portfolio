import React from 'react'
import { Card } from 'react-bootstrap'
import OffCanvaComponent from '../OffCanva/OffCanvaComponent'

export const CardsComponent = ({ project, lang }) => {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={project.imgStart} />
            <Card.Body>
                <Card.Title>{project[lang].projectTitle}</Card.Title>
                <Card.Text>
                    {project[lang].projectInfo}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <OffCanvaComponent project={project} lang={lang}/>
            </Card.Body>
        </Card>
    )
}

export default CardsComponent