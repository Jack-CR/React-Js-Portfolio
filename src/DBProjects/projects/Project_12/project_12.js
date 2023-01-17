import {
    DiCss3,
    FaReact,
    IoLogoJavascript,
    SiMysql,
    FaNodeJs
} from 'react-icons/all'

const reactJs = "#61DBFB", html = "#f06529", css = "#264de4", js = "#f0db4f", mysql = "#F29111", laravel = "#fb503b", botstrao = "#7952b3", node = "green";

export const project_12 = {
    en: {
        projectTitle: "Full stack Todo List app",
        projectInfo: "Organize tasks.",
        projectBtnInfo: "More Information",
        canvaBuiltwith: "Built with:"
    },
    es: {
        projectTitle: "Full Stack Todo List app",
        projectInfo: "Organizar tareas.",
        projectBtnInfo: "Más Información",
        canvaBuiltwith: "Construido con:"
    },
    imgStart: "img/project_12/1.png",
    src: "https://splendid-macaron-d68a8f.netlify.app/",
    tecnologies:
        [
            <FaReact size={60} color={reactJs} />,
            <DiCss3 size={60} color={css} />,
            <IoLogoJavascript size={60} color={js} />,
            <FaNodeJs size={60} color={node} />,
            <SiMysql size={60} color={mysql} />
        ],
    imgProject:
        [
            "img/project_12/1.png",
            "img/project_12/2.png",
            "img/project_12/3.png"
        ]
}