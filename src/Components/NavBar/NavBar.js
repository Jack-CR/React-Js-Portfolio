import React from 'react'
import { Nav,Form } from 'react-bootstrap'
import {
    ImWhatsapp,
    AiFillGithub,
    AiFillLinkedin,
    FiSun,
    FaMoon

} from 'react-icons/all'

export const NavBar = () => {
    return (
        <>
            <Nav variant="tabs" className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Form.Select aria-label="Default select example">
                        <option value="1">EN</option>
                        <option value="2">ES</option>
                    </Form.Select>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">
                        <FaMoon size={30} color="black" />
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav variant="tabs" className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home"><ImWhatsapp size={30} color="green" /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"><AiFillGithub size={30} color="black" /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"><AiFillLinkedin size={30} color="blue" /></Nav.Link>
                </Nav.Item>
            </Nav>
            <p className="text-center mt-4 mb-4">Button About me</p>
            <Nav variant="tabs" className="justify-content-start" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}
