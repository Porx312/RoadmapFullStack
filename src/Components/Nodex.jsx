import React from 'react'
import { Link } from 'react-router-dom'
const Nodex = () => {
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
                        ¿Qué es Node.js y su arquitectura de ejecución basada en eventos?
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
                <h2>Modularidad y Módulos de Node.js</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Uso de módulos nativos y externos.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Creación y exportación de módulos personalizados.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Gestión Asíncrona</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Uso de callbacks y Promesas.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Manejo de operaciones asíncronas con async/await.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Intermedia: Avanzando con Node.js</h2>
        <article className="basico medio">
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
                        Lectura y escritura de archivos.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de streams para procesamiento eficiente de datos.
                    </li>
                </ul>
            </div>

            <div className="item">
                <h2>Eventos y EventEmitter</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Creación de eventos personalizados.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso del módulo EventEmitter para manejar eventos.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Debugging y Manejo de Errores</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Uso de herramientas de depuración como el módulo 'debug'.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Manejo de errores con try/catch y el objeto Error.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Avanzada: Maestría en Node.js</h2>
        <article className="basico avanzado">
            <div className="item">
                <h2>Streams y Procesamiento de Datos</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Implementación de streams en aplicaciones Node.js.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de streams para procesar grandes volúmenes de datos de manera eficiente.
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
                        Despliegue de aplicaciones Node.js en diferentes plataformas (Heroku, AWS, etc.).
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />{" "}
                        Escalado vertical y horizontal de aplicaciones Node.js.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Seguridad y Autenticación</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />
                        Implementación de medidas de seguridad en aplicaciones Node.js.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="nodejs1"
                            id="check"
                            className="check"
                        />{" "}
                        Configuración de sistemas de autenticación y autorización.
                    </li>
                </ul>
            </div>
        </article>
    </section>
    <p className="conclu">
        <strong>Conclusión:</strong> Con esta roadmap, podrás avanzar desde los conceptos básicos hasta las técnicas avanzadas de Node.js, permitiéndote construir aplicaciones escalables y eficientes utilizando este entorno de ejecución de JavaScript del lado del servidor.
    </p>
</div>

  )
}

export default Nodex
