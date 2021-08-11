import React, { useState } from 'react'
import { Nav,Form } from 'react-bootstrap'
import {
    ImWhatsapp,
    AiFillGithub,
    AiFillLinkedin,
    FiSun,
    FaMoon

} from 'react-icons/all'

export const NavBar = () => {
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("en");

    const handleTheme=(e)=>{
        if(theme==="light"){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    }

    const handleLanguage=(e)=>{
        if(language==="en"){
            setLanguage("es");
        }else{
            setLanguage("en");
        }
    }

    return (
        <>
            <Nav variant="tabs" className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Form.Select aria-label="Default select example" onChange={handleLanguage}>
                        <option value="en">EN</option>
                        <option value="es">ES</option>
                    </Form.Select>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={handleTheme}>
                        {theme==="light"
                            ?<FaMoon size={30} color="black" />
                            :<FiSun size={30} color="yellow" />
                        }
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
            <Nav variant="tabs" className="justify-content-start" activeKey="/">
                <Nav.Item>
                    <Nav.Link href="/">Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Resume</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}
