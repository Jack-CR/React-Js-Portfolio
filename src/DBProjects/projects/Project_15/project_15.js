import {
    DiCss3,
    AiOutlineHtml5,
    FaReact,
    IoLogoJavascript,
    SiMysql,
    FaNodeJs
} from 'react-icons/all'

const reactJs = "#61DBFB", html = "#f06529", css = "#264de4", js = "#f0db4f", mysql = "#F29111", laravel = "#fb503b", botstrao = "#7952b3", node = "green";

export const project_15 = {
    en: {
        projectTitle: "Hotel Alura",
        projectInfo: "Simulation of a guest registry for a hotel",
        projectBtnInfo: "More Information",
        canvaBuiltwith: "Built with:"
    },
    es: {
        projectTitle: "Hotel Alura",
        projectInfo: "Simulación de un registro de huespedes para un hotel",
        projectBtnInfo: "Más Información",
        canvaBuiltwith: "Construido con:"
    },
    imgStart: "img/project_15/1.png",
    src: "https://unique-boba-a93884.netlify.app/",
    tecnologies:
        [
            <FaReact size={60} color={reactJs} />,
            <SiMysql size={60} color={mysql} />,
            <FaNodeJs size={60} color={node} />
        ],
    imgProject:
        [
            "img/project_15/1.png",
            "img/project_15/2.png",
            "img/project_15/3.png",
        ]
}