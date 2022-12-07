import {
    AiOutlineHtml5,
    DiCss3,
    FaReact,
    FaLaravel,
    IoLogoJavascript,
    SiMysql,
    FaPhp,
    VscJson,
    DiBootstrap
} from 'react-icons/all'

const reactJs = "#61DBFB", html = "#f06529", css = "#264de4", js = "#f0db4f", mysql = "#F29111", laravel = "#fb503b", botstrao = "#7952b3";

const MyProjects = [
    {/* PROJECT 1 */
        en: {
            projectTitle: "Text encoder",
            projectInfo: `The letter "e" is convert to "enter"
            The letter "i" is convert to "imes"
            The letter "a" is convert to "ai"
            The letter "o" is convert to "ober"
            The letter "u" is convert to "ufat"."`,
            projectBtnInfo: "More Information",
            canvaBuiltwith: "Built with:"
        },
        es: {
            projectTitle: "Encriptador de texto",
            projectInfo: `La letra "e" es convertida para "enter"
            La letra "i" es convertida para "imes"
            La letra "a" es convertida para "ai"
            La letra "o" es convertida para "ober"
            La letra "u" es convertida para "ufat".`,
            projectBtnInfo: "Más Información",
            canvaBuiltwith: "Construido con:"
        },
        imgStart: "img/project_10/1.png",
        src: "https://yacdanycr.github.io/Text_Encoder/",
        tecnologies:
            [
                <AiOutlineHtml5 size={60} color={html} />,
                <DiCss3 size={60} color={css} />,
                <IoLogoJavascript size={60} color={js} />,
            ],
        imgProject:
            [
                "img/project_10/1.png",
                "img/project_10/2.png",
                "img/project_10/3.png",
            ]
    },
    {/* PROJECT 1 */
        en: {
            projectTitle: "3 Month Supervised Practice at Betico Mata & Parrilla Restaurant",
            projectInfo: " Develop a web application with a duration of 3 months to conclude with the supervised practice.",
            projectBtnInfo: "More Information",
            canvaBuiltwith: "Built with:"
        },
        es: {
            projectTitle: "3 Meses de Practica Supervisada en el Restaurante Betico Mata & Parrilla",
            projectInfo: " Desarrollar una Aplicación Web con una duración de 3 meses para concluir con la practica supervisada.",
            projectBtnInfo: "Más Información",
            canvaBuiltwith: "Construido con:"
        },
        imgStart: "img/project_1/1.png",
        src: "google",
        tecnologies:
            [
                <AiOutlineHtml5 size={60} color={html} />,
                <DiCss3 size={60} color={css} />,
                <SiMysql size={60} color={mysql} />,
                <IoLogoJavascript size={60} color={js} />,
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
    },
    /* PROJECT 3 */
    {
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
    },
    /* PROJECT 4 */
    {
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
    },
    /* Project 5 */
    {
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
    },
    /* Project 6 */
    {
        en: {
            projectTitle: "Movie Search",
            projectInfo: "Show movies as user writes by querying an API.",
            projectBtnInfo: "More Information",
            canvaBuiltwith: "Built with:"
        },
        es: {
            projectTitle: "Buscador de peliculas",
            projectInfo: "Mostrando peliculas conforme el usuario vaya escribiendo realizando consultas a una api.",
            projectBtnInfo: "Más Información",
            canvaBuiltwith: "Construido con:"
        },
        imgStart: "img/project_6/1.png",
        src: "https://yacdanycr.github.io/get-movies-from-api/",
        tecnologies:
            [
                <IoLogoJavascript size={60} color={js} />,
                <AiOutlineHtml5 size={60} color={html} />,
                <DiCss3 size={60} color={css} />
            ],
        imgProject:
            [
                "img/project_6/1.png",
                "img/project_6/2.png",
                "img/project_6/3.png"
            ]
    },
    /* Project 7 */
    {
        en: {
            projectTitle: "Portfolio landing Page",
            projectInfo: "Landing Page design from figma.",
            projectBtnInfo: "More Information",
            canvaBuiltwith: "Built with:"
        },
        es: {
            projectTitle: "Landing Page",
            projectInfo: "Diseño copiado de figma.",
            projectBtnInfo: "Más Información",
            canvaBuiltwith: "Construido con:"
        },
        imgStart: "img/project_7/1.png",
        src: "https://yacdanycr.github.io/Portfolio-Front-End-2/",
        tecnologies:
            [
                <AiOutlineHtml5 size={60} color={html} />,
                <DiCss3 size={60} color={css} />
            ],
        imgProject:
            [
                "img/project_7/1.png",
                "img/project_7/2.png",
                "img/project_7/3.png"
            ]
    },
    /* Project 8 */
    {
        en: {
            projectTitle: "Ecommerce",
            projectInfo: "Ecommerce design from figa and some functions with JavaScript vainilla like login validation,log in,add products and see products.",
            projectBtnInfo: "More Information",
            canvaBuiltwith: "Built with:"
        },
        es: {
            projectTitle: "Tienda",
            projectInfo: "Diseño de tienda de figma con algunas funciones con JavaScript vainilla como poner iniciar sesion, validación de login , agregar productos y ver productos.",
            projectBtnInfo: "Más Información",
            canvaBuiltwith: "Construido con:"
        },
        imgStart: "img/project_8/1.png",
        src: "https://yacdanycr.github.io/e-comerce/index.html",
        tecnologies:
            [
                <AiOutlineHtml5 size={60} color={html} />,
                <DiCss3 size={60} color={css} />,
                <IoLogoJavascript size={60} color={js} />
            ],
        imgProject:
            [
                "img/project_8/1.png",
                "img/project_8/2.png",
                "img/project_8/3.png"
            ]
    },
    {
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
                "img/project_11/1.png",
                "img/project_11/2.png",
                "img/project_11/3.png"
            ]
    },
    {
        en: {
            projectTitle: "Currency Converter",
            projectInfo: "Currency converter to different types of currency.",
            projectBtnInfo: "More Information",
            canvaBuiltwith: "Built with:"
        },
        es: {
            projectTitle: "Conversor de Moneda",
            projectInfo: "Conversor de moneda a diferentes tipos de moneda.",
            projectBtnInfo: "Más Información",
            canvaBuiltwith: "Construido con:"
        },
        imgStart: "img/project_11/1.png",
        src: "https://magnificent-entremet-5bd169.netlify.app/",
        tecnologies:
            [
                <FaReact size={60} color={reactJs} />,
                <DiCss3 size={60} color={css} />,
                <IoLogoJavascript size={60} color={js} />
            ],
        imgProject:
            [
                "img/project_11/1.png",
                "img/project_11/2.png",
                "img/project_11/3.png"
            ]
    },
]

export { MyProjects }