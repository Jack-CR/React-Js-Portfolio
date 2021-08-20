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
    VscJson,
    DiBootstrap
} from 'react-icons/all'

const reactJs="#61DBFB",html="#f06529",css="#264de4",js="#f0db4f",mongo="#3FA037",mysql="#F29111",node="#68a063",laravel="#fb503b",botstrao="#7952b3";

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
            <AiOutlineHtml5 size={60} color={html}/>,
            <DiCss3 size={60} color={css}/>,
            <SiMysql size={60} color={mysql}/>,
            <IoLogoJavascript size={60} color={js}/>,
            <FaPhp size={60} />
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
            <AiOutlineHtml5 size={60} color={html}/>,
            <DiCss3 size={60} color={css}/>,
            <SiMysql size={60} color={mysql}/>,
            <IoLogoJavascript size={60} color={js}/>,
            <FaLaravel size={60} color={laravel}/>
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
            <AiOutlineHtml5 size={60} color={laravel} />,
            <DiCss3 size={60} color={css}/>,
            <FaReact size={60} color={reactJs}/>,
            <GrNode size={60} color={node}/>,
            <DiMongodb size={60} color={mongo}/>
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
            projectTitle: "CRUD API REST FALSA",
            projectInfo: "Poder realizar las 4 operaciones basicas Http (GET,POST,PUT,DELETE) con Javascript vanilla y JSON server.",
            projectBtnInfo: "Más Información",
            canvaBuiltwith:"Construido con:"
        },
        imgStart: "img/project_4/1.png",
        tecnologies:
        [
            <AiOutlineHtml5 size={60} color={html}/>,
            <DiCss3 size={60} color={css}/>,
            <VscJson size={60} color="#2e2e2e"/>,
            <IoLogoJavascript size={60} color={js}/>
        ],
        imgProject:
        [
            "img/project_4/1.png",
            "img/project_4/2.png",
            "img/project_4/3.png"
        ]
    },
    /* Project 5 */
    {
        en: {
            projectTitle: "My Portfolio",
            projectInfo: "Show my personal information skills,projects and resume.",
            projectBtnInfo: "More Information",
            canvaBuiltwith:"Built with:"
        },
        es: {
            projectTitle: "Mi Portafolio",
            projectInfo: "Mostrar mi información personal habilidades,proyectos y currículum.",
            projectBtnInfo: "Más Información",
            canvaBuiltwith:"Construido con:"
        },
        imgStart: "img/project_5/1.png",
        tecnologies:
        [
            <FaReact size={60} color={reactJs}/>,
            <AiOutlineHtml5 size={60} color={html}/>,
            <DiCss3 size={60} color={css}/>,
            <DiBootstrap size={60} color={botstrao}/>,
        ],
        imgProject:
        [
            "img/project_5/1.png",
            "img/project_5/2.png",
            "img/project_5/3.png"
        ]
    },
    /* Project 6 */
    {
        en: {
            projectTitle: "Movie Finder",
            projectInfo: "Show movies as user writes by querying an API.",
            projectBtnInfo: "More Information",
            canvaBuiltwith:"Built with:"
        },
        es: {
            projectTitle: "Buscador de peliculas",
            projectInfo: "Mostrando peliculas conforme el usuario vaya escribiendo realizando consultas a una api.",
            projectBtnInfo: "Más Información",
            canvaBuiltwith:"Construido con:"
        },
        imgStart: "img/project_6/1.png",
        tecnologies:
        [
            <FaReact size={60} color={reactJs}/>,
            <AiOutlineHtml5 size={60} color={html}/>,
            <DiCss3 size={60} color={css}/>,
            <DiBootstrap size={60} color={botstrao}/>,
        ],
        imgProject:
        [
            "img/project_6/1.png",
            "img/project_6/2.png",
            "img/project_6/3.png"
        ]
    },
]

export {MyProjects}