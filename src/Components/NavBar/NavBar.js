import React, { useState } from 'react'
import { Nav,Form } from 'react-bootstrap'
import {
    ImWhatsapp,
    AiFillGithub,
    AiFillLinkedin,
    FiSun,
    FaMoon,
    FiCpu,
    MdBusinessCenter,
    FaFilePdf

} from 'react-icons/all'

/* ENGLISH AND SPANISH */
const language={
    en:{
        navMenu_1:"Skills",
        navMenu_2:"Projects",
        navMenu_3:"Resume",
        modalAbout:"!Know me¡"
    },
    es:{
        navMenu_1:"Habilidades",
        navMenu_2:"Proyectos",
        navMenu_3:"Currículum",
        modalAbout:"!Conoceme¡"
    }
}

export const NavBar = () => {
    const [theme, setTheme] = useState("light");
    const [lang, setLang] = useState("en");
   
    const handleTheme=(e)=>{
        if(theme==="light"){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    }

    const handleLanguage=(e)=>{
      if(lang==="en"){
          setLang("es");
      }else{
          setLang("en");
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
            <p className="text-center mt-4 mb-4">{language[lang].modalAbout}</p>
            <Nav variant="tabs" className="justify-content-start" activeKey="/">
                <Nav.Item>
                    <Nav.Link href="/"><FiCpu size={30} color="gray"/> {language[lang].navMenu_1}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"><MdBusinessCenter color="black" size={30}/>{language[lang].navMenu_2}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"><FaFilePdf size={30} color="red"/>{language[lang].navMenu_3}</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}
