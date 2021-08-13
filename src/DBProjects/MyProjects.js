import 
{
    AiOutlineHtml5,
    DiCss3,
    FaReact,
    GrNode,
    FaLaravel,
    IoLogoJavascript,
    DiMongodb,
    SiMysql,
    FaPhp,
    VscJson
} from 'react-icons/all'

const MyProjects = [
    {/* PROJECT 1 */
        en: {
            projectTitle: "3 Month Supervised Practice at Betico Mata & Parrilla Restaurant",
            projectInfo: " Develop a web application with a duration of 3 months to conclude with the supervised practice.",
            projectBtnInfo: "More Information",
            canvaBuiltwith:"Built with:"
        },
        es: {
            projectTitle: "3 Meses de Practica Supervisada en el Restaurante Betico Mata & Parrilla",
            projectInfo: " Desarrollar una Aplicación Web con una duración de 3 meses para concluir con la practica supervisada.",
            projectBtnInfo: "Más Información",
            canvaBuiltwith:"Construido con:"
        },
        imgStart: "img/project_1/1.png",
        tecnologies:
        [
            <AiOutlineHtml5 size={60}/>,
            <DiCss3 size={60}/>,
            <SiMysql size={60}/>,
            <IoLogoJavascript size={60}/>,
            <FaPhp size={60}/>
        ],
        imgProject:
            [
                "img/project_1/1.png",
                "img/project_1/2.png",
                "img/project_1/3.png",
                "img/project_1/4.png"
            ]
    },
    /* Project 2 */
    {
        en: {
            projectTitle: "Market",
            projectInfo: "Develop a market web  application where each user can register, publish their products, see other users' products, comment on publications, etc.",
            projectBtnInfo: "More Information",
            canvaBuiltwith:"Built with:"
        },
        es: {
            projectTitle: "Mercado Libre",
            projectInfo: "Desarrollar Aplicacíon tipo mercado libre donde cada usuario pueda registrarse publicar sus productos , ver productos de otros usuarios , comentar publicaciones etc",
            projectBtnInfo: "Más Información",
            canvaBuiltwith:"Construido con:"
        },
        imgStart: "img/project_2/1.png",
        tecnologies:
        [
            <AiOutlineHtml5 size={60}/>,
            <DiCss3 size={60}/>,
            <SiMysql size={60}/>,
            <IoLogoJavascript size={60}/>,
            <FaLaravel size={60}/>
        ],
        imgProject:
        [
            "img/project_2/1.png",
            "img/project_2/2.png",
            "img/project_2/3.png",
            "img/project_2/4.png"
        ]
    },
    /* PROJECT 3 */
    {
        en: {
            projectTitle: "CRUD MERN",
            projectInfo: "Be able to perform the 4 basic Http operations (GET,POST,PUT,DELETE).",
            projectBtnInfo: "More Information",
            canvaBuiltwith:"Built with:"
        },
        es: {
            projectTitle: "CRUD MERN",
            projectInfo: "Poder realizar las 4 operaciones basicas Http (GET,POST,PUT,DELETE).",
            projectBtnInfo: "Más Información",
            canvaBuiltwith:"Construido con:"
        },
        imgStart: "img/project_3/1.png",
        tecnologies:
        [
            <AiOutlineHtml5 size={60}/>,
            <DiCss3 size={60}/>,
            <FaReact size={60}/>,
            <GrNode size={60}/>,
            <DiMongodb size={60}/>
        ],
        imgProject:
        [
            "img/project_3/1.png",
            "img/project_3/2.png",
            "img/project_3/3.png"
        ]
    },
    /* PROJECT 4 */
    {
        en: {
            projectTitle: "CRUD FAKE REST API",
            projectInfo: "Be able to perform the 4 basic Http operations (GET,POST,PUT,DELETE) with Javascript vanilla and JSON server.",
            projectBtnInfo: "More Information",
            canvaBuiltwith:"Built with:"
        },
        es: {
            projectTitle: "CRUD MERN",
            projectInfo: "Poder realizar las 4 operaciones basicas Http (GET,POST,PUT,DELETE) con Javascript vanilla y JSON server.",
            projectBtnInfo: "Más Información",
            canvaBuiltwith:"Construido con:"
        },
        imgStart: "img/project_4/1.png",
        tecnologies:
        [
            <AiOutlineHtml5 size={60}/>,
            <DiCss3 size={60}/>,
            <VscJson size={60}/>,
            <IoLogoJavascript size={60}/>
        ],
        imgProject:
        [
            "img/project_4/1.png",
            "img/project_4/2.png",
            "img/project_4/3.png"
        ]
    },
]

export {MyProjects}