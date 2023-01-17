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

export const project_5 = {
    en: {
        projectTitle: "CRUD FAKE REST API",
        projectInfo: "Be able to perform the 4 basic Http operations (GET,POST,PUT,DELETE) with Javascript vanilla and JSON server.",
        projectBtnInfo: "More Information",
        canvaBuiltwith: "Built with:"
    },
    es: {
        projectTitle: "CRUD API REST FALSA",
        projectInfo: "Poder realizar las 4 operaciones basicas Http (GET,POST,PUT,DELETE) con Javascript vanilla y JSON server.",
        projectBtnInfo: "Más Información",
        canvaBuiltwith: "Construido con:"
    },
    imgStart: "img/project_4/1.png",
    src: "https://github.com/yacdanyCR/CRUD-API-Fetch-JavaScript",
    tecnologies:
        [
            <AiOutlineHtml5 size={60} color={html} />,
            <DiCss3 size={60} color={css} />,
            <VscJson size={60} color="#2e2e2e" />,
            <IoLogoJavascript size={60} color={js} />
        ],
    imgProject:
        [
            "img/project_4/1.png",
            "img/project_4/2.png",
            "img/project_4/3.png"
        ]
}