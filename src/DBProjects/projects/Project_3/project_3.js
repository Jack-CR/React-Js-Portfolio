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

export const project_3 = {
    en: {
        projectTitle: "Market",
        projectInfo: "Develop a market web  application where each user can register, publish their products, see other users' products, comment on publications, etc.",
        projectBtnInfo: "More Information",
        canvaBuiltwith: "Built with:"
    },
    es: {
        projectTitle: "Mercado Libre",
        projectInfo: "Desarrollar Aplicacíon tipo mercado libre donde cada usuario pueda registrarse publicar sus productos , ver productos de otros usuarios , comentar publicaciones etc",
        projectBtnInfo: "Más Información",
        canvaBuiltwith: "Construido con:"
    },
    imgStart: "img/project_2/1.png",
    src: "https://github.com/yacdanyCR/Laravel-Proyecto",
    tecnologies:
        [
            <AiOutlineHtml5 size={60} color={html} />,
            <DiCss3 size={60} color={css} />,
            <SiMysql size={60} color={mysql} />,
            <IoLogoJavascript size={60} color={js} />,
            <FaLaravel size={60} color={laravel} />
        ],
    imgProject:
        [
            "img/project_2/1.png",
            "img/project_2/2.png",
            "img/project_2/3.png",
            "img/project_2/4.png"
        ]
}