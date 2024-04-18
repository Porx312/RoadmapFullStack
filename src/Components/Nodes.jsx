import React from 'react'
import { Link } from 'react-router-dom'
const Nodes = () => {
  return (
    <div>
    <Link className="link-back" to={"/"}> <code>&lt;</code></Link>
    <h2 className="icon">Node.js</h2>
    <section className="content-program">
        <h2>Sesión Básica: Fundamentos de Node.js</h2>
        <article className="basico">
            <div className="item">
                <h2>Introducción a Node.js</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        ¿Qué es Node.js y por qué es importante en el desarrollo de aplicaciones web?
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />{" "}
                        Instalación y configuración básica de Node.js.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Modulos y NPM</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Uso de módulos en Node.js.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Gestión de paquetes con npm (Node Package Manager).
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Gestión de Archivos y Streams</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Lectura y escritura de archivos en Node.js.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Uso de streams para procesar datos de manera eficiente.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Intermedia: Avanzando con Node.js</h2>
        <article className="basico medio">
            <div className="item">
                <h2>Express.js</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Introducción a Express.js y creación de servidores web.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />{" "}
                        Enrutamiento y manejo de peticiones HTTP.
                    </li>
                </ul>
            </div>

            <div className="item">
                <h2>Bases de Datos</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Conexión a bases de datos SQL y NoSQL.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de ORM/ODM para interactuar con bases de datos.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Middleware y Autenticación</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Uso de middleware para agregar funcionalidades a las rutas.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Implementación de sistemas de autenticación con Passport.js u otras bibliotecas.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Avanzada: Maestría en Node.js</h2>
        <article className="basico avanzado">
            <div className="item">
                <h2>Async/Await y Promesas</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Uso de async/await para manejar código asíncrono de manera más legible.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de promesas para evitar el callback hell.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Testing y Depuración</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Implementación de pruebas unitarias y de integración.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de herramientas de depuración como Node Inspector.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Despliegue y Escalado</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Despliegue de aplicaciones Node.js en servidores de producción.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />{" "}
                        Estrategias de escalado horizontal y vertical.
                    </li>
                </ul>
            </div>
        </article>
    </section>
    <p className="conclu">
        <strong>Conclusión:</strong> Con esta roadmap, podrás avanzar desde los conceptos básicos hasta las técnicas avanzadas de Node.js, permitiéndote construir aplicaciones web escalables y eficientes utilizando este potente entorno de ejecución de JavaScript en el lado del servidor.
    </p>
</div>

  )
}

export default Nodes
