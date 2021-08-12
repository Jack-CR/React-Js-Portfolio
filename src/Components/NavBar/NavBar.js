import React, { useState } from 'react'
import { Nav, Form } from 'react-bootstrap'
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
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProjectsPage from '../../Pages/ProjectsPage';
import ResumePage from '../../Pages/ResumePage';
import SkillsPage from '../../Pages/SkillsPage';
import ModalJs from '../Modal/ModalJs'

/* ENGLISH AND SPANISH */
const language = {
    en: {
        navMenu_1: "Skills",
        navMenu_2: "Projects",
        navMenu_3: "Resume",
        modalAbout: "!Meet Me¡",
        modalHeader: "¡Hi I'm junior web Developer!"
    },
    es: {
        navMenu_1: "Habilidades",
        navMenu_2: "Proyectos",
        navMenu_3: "Currículum",
        modalAbout: "!Conoceme¡",
        modalHeader: "¡Hola Soy Desarrollador Web Junior!"
    }
}

export const NavBar = () => {
    const [theme, setTheme] = useState("light");
    const [lang, setLang] = useState("en");

    const handleTheme = (e) => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    const handleLanguage = (e) => {
        if (lang === "en") {
            setLang("es");
        } else {
            setLang("en");
        }
    }

    return (
        <Router>
            <div class={theme}>
                <Nav  className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Form.Select aria-label="Default select example" onChange={handleLanguage}>
                            <option value="en">EN</option>
                            <option value="es">ES</option>
                        </Form.Select>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={handleTheme}>
                            {theme === "light"
                                ? <FaMoon size={30} color="black" />
                                : <FiSun size={30} color="yellow" />
                            }
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav variant="tabs" className="justify-content-center" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="https://api.whatsapp.com/send?phone=50689498924" target="_blank"><ImWhatsapp size={30} color="green" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" href="https://github.com/Jack-CR?tab=repositories" target="_blank">
                            {theme === "light"
                                ? <AiFillGithub size={30} color="black" />
                                : <AiFillGithub size={30} color="white" />
                            }

                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#" eventKey="link-2"><AiFillLinkedin size={30} color="blue" /></Nav.Link>
                    </Nav.Item>
                </Nav>
                <p className="text-center mt-4 mb-4">
                    <ModalJs lang={lang} language={language} />
                </p>
                <Nav variant="tabs" className="justify-content-start" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home"><FiCpu size={30} color="gray" /><Link to="/"> {language[lang].navMenu_1}</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"><MdBusinessCenter color="black" size={30} /><Link to="/Projects">{language[lang].navMenu_2}</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2"><FaFilePdf size={30} color="red" /><Link to="/Resume">{language[lang].navMenu_3}</Link></Nav.Link>
                    </Nav.Item>
                </Nav>

                <Switch>
                    <Route path="/Resume">
                        <ResumePage />
                    </Route>
                    <Route path="/Projects">
                        <ProjectsPage />
                    </Route>
                    <Route path="/">
                        <SkillsPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
