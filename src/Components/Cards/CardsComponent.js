import React from 'react'
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'

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
                <Card.Link href="#">{project[lang].projectBtnImages}</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CardsComponent