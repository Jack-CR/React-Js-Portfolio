import {
    AiOutlineHtml5,
    DiCss3,
    FaReact,
    FaLaravel,
    IoLogoJavascript,
    SiMysql,
    FaPhp,
    VscJson,
    DiBootstrap,
    FaNodeJs
} from 'react-icons/all'

const reactJs = "#61DBFB", html = "#f06529", css = "#264de4", js = "#f0db4f", mysql = "#F29111", laravel = "#fb503b", botstrao = "#7952b3", node = "green";

export const project_6 = {
    en: {
        projectTitle: "My Portfolio",
        projectInfo: "Show my personal information skills,projects and resume.",
        projectBtnInfo: "More Information",
        canvaBuiltwith: "Built with:"
    },
    es: {
        projectTitle: "Mi Portafolio",
        projectInfo: "Mostrar mi información personal habilidades,proyectos y currículum.",
        projectBtnInfo: "Más Información",
        canvaBuiltwith: "Construido con:"
    },
    imgStart: "img/project_5/1.png",
    src: "/",
    tecnologies:
        [
            <FaReact size={60} color={reactJs} />,
            <AiOutlineHtml5 size={60} color={html} />,
            <DiCss3 size={60} color={css} />,
            <DiBootstrap size={60} color={botstrao} />,
        ],
    imgProject:
        [
            "img/project_5/1.png",
            "img/project_5/2.png",
            "img/project_5/3.png"
        ]
}