import React from 'react'
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import OffCanvaComponent from '../OffCanva/OffCanvaComponent'

export const CardsComponent = ({ project, lang }) => {
    return (
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={project.imgStart} />
            <Card.Body>
                <Card.Title>{project[lang].projectTitle}</Card.Title>
                <Card.Text>
                    {project[lang].projectInfo}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {
                    project.tecnologies.map((el,key)=>{
                        return (
                            <ListGroupItem key={key}>{el}</ListGroupItem>
                        )
                    })
                }
               
            </ListGroup>
            <Card.Body>
                <OffCanvaComponent/>
            </Card.Body>
        </Card>
    )
}

export default CardsComponent