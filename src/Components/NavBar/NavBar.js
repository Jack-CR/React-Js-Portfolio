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
    AiOutlineFilePdf,
    AiOutlineMail,
    SiCodewars

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
import { language } from '../../Languages/languages'
import './Style.css'

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
            <div className={theme}>
                <Nav className="justify-content-center" activeKey="/home">
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
                        <Nav.Link href="https://api.whatsapp.com/send?phone=50689498924" target="_blank"><ImWhatsapp size={30} color="#25D366" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" href="https://github.com/yacdanyCR" target="_blank">
                            {theme === "light"
                                ? <AiFillGithub size={30} color="black" />
                                : <AiFillGithub size={30} color="white" />
                            }

                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.codewars.com/users/Yacdany-CR" target="_blank">
                            {theme === "light"
                                ? <SiCodewars size={30} color="black" />
                                : <SiCodewars size={30} color="white" />
                            }

                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.linkedin.com/in/yacdany-arguedas-mora-22592b211?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSO7dUR3OTk%2B%2BGuxtHweVOQ%3D%3D" target="_blank" eventKey="link-2"><AiFillLinkedin size={30} color="blue" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="mailto:jack20-21@hotmail.com">
                            {theme === "light"
                                ? <AiOutlineMail size={30} color="black" />
                                : <AiOutlineMail size={30} color="white" />
                            }
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <p className="text-center mt-4 mb-4">
                    <ModalJs lang={lang} language={language} />
                </p>
                <Nav variant="tabs" className="justify-content-start" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link eventKey="/" ><FiCpu size={30} color="gray" /><Link to="/" className="nav_links"> {language[lang].navMenu_1}</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"><MdBusinessCenter color="#804000" size={30} /><Link to="/Projects" className="nav_links">{language[lang].navMenu_2}</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2"><AiOutlineFilePdf size={30} color="red" /><Link to="/Resume" className="nav_links">{language[lang].navMenu_3}</Link></Nav.Link>
                    </Nav.Item>
                </Nav>

                <Switch>
                    <Route path="/Resume">
                        <ResumePage />
                    </Route>
                    <Route path="/Projects">
                        <ProjectsPage lang={lang} />
                    </Route>
                    <Route path="/">
                        <SkillsPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
