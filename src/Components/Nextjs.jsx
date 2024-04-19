import React from 'react'
import { Link } from 'react-router-dom'
const Nextjs = () => {
  return (
    <div>
    <Link className="link-back" to={"/"}> <code>&lt;</code></Link>
    <h2 className="icon">Next.js</h2>
    <section className="content-program">
        <h2>Sesión Básica: Fundamentos de Next.js</h2>
        <article className="basico">
            <div className="item">
                <h2>Introducción a Next.js</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />
                        ¿Qué es Next.js y cómo se relaciona con React.js?
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />{" "}
                        Instalación y configuración básica de Next.js.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Routing y Navegación</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />
                        Definición de rutas y navegación entre páginas en Next.js.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />
                        Uso de enlaces y rutas dinámicas.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Renderizado de Páginas</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />
                        Creación de páginas estáticas y dinámicas en Next.js.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />
                        Uso de componentes especiales como `getStaticProps` y `getServerSideProps`.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Intermedia: Avanzando con Next.js</h2>
        <article className="basico medio">
            <div className="item">
                <h2>Gestión de Estado</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />
                        Implementación de estado global con Context API o librerías como Redux.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de `useState` y `useEffect` en componentes de Next.js.
                    </li>
                </ul>
            </div>

            <div className="item">
                <h2>Estilización y CSS</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />
                        Integración de estilos globales y locales en Next.js.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de librerías de estilos como Styled Components o Tailwind CSS.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Gestión de Datos</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />
                        Integración de API externas y consumo de datos en Next.js.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />
                        Uso de librerías como Axios o Fetch para realizar peticiones HTTP.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Avanzada: Maestría en Next.js</h2>
        <article className="basico avanzado">
            <div className="item">
                <h2>Optimización de Rendimiento</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />
                        Estrategias de optimización de carga inicial y navegación en Next.js.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de técnicas como preloading, lazy loading y code splitting.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Despliegue y Hosting</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />
                        Configuración de entornos de desarrollo, producción y staging en Next.js.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />{" "}
                        Despliegue de aplicaciones Next.js en plataformas como Vercel, Netlify o AWS.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Pruebas y Mantenimiento</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />
                        Implementación de pruebas unitarias y de integración en Next.js.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nextjs1"
                            id="check"
                            className="check"
                        />{" "}
                        Monitoreo y mantenimiento de aplicaciones Next.js en producción.
                    </li>
                </ul>
            </div>
        </article>
    </section>
    <p className="conclu">
        <strong>Conclusión:</strong> Con esta roadmap, podrás avanzar desde los fundamentos hasta las técnicas avanzadas de Next.js, lo que te permitirá construir aplicaciones web modernas y eficientes con React.js de manera rápida y escalable.
    </p>
</div>

  )
}

export default Nextjs
