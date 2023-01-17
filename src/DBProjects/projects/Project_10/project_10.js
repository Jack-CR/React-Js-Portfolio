import {
    DiCss3,
    FaReact,
    IoLogoJavascript
} from 'react-icons/all'

const reactJs = "#61DBFB", html = "#f06529", css = "#264de4", js = "#f0db4f", mysql = "#F29111", laravel = "#fb503b", botstrao = "#7952b3", node = "green";

export const project_10 = {
    en: {
        projectTitle: "Calculator React Js",
        projectInfo: "Basic 4 calculator operations.",
        projectBtnInfo: "More Information",
        canvaBuiltwith: "Built with:"
    },
    es: {
        projectTitle: "Calculadora React Js",
        projectInfo: "4 operaciones basicas.",
        projectBtnInfo: "Más Información",
        canvaBuiltwith: "Construido con:"
    },
    imgStart: "img/project_9/1.png",
    src: "https://dynamic-stroopwafel-062f6f.netlify.app/",
    tecnologies:
        [
            <FaReact size={60} color={reactJs} />,
            <DiCss3 size={60} color={css} />,
            <IoLogoJavascript size={60} color={js} />
        ],
    imgProject:
        [
            "img/project_9/1.png",
            "img/project_9/2.png",
            "img/project_9/3.png"
        ]
}