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

export const project_4 = {
    en: {
        projectTitle: "POKÉAPI",
        projectInfo: "Be able to perform the  basic Http operations (GET) and show pokemons information.",
        projectBtnInfo: "More Information",
        canvaBuiltwith: "Built with:"
    },
    es: {
        projectTitle: "CRUD MERN",
        projectInfo: "Poder realizar la  operaciones basicas Http (GET) y mostrar la información de los pokemones.",
        projectBtnInfo: "Más Información",
        canvaBuiltwith: "Construido con:"
    },
    imgStart: "img/project_3/1.png",
    src: "https://yacdany-poke-api.netlify.app/",
    tecnologies:
        [
            <AiOutlineHtml5 size={60} color={laravel} />,
            <DiCss3 size={60} color={css} />,
            <FaReact size={60} color={reactJs} />,
        ],
    imgProject:
        [
            "img/project_3/1.png",
            "img/project_3/2.png",
            "img/project_3/3.png"
        ]
}