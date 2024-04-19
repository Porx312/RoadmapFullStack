import React from 'react'
import { Link } from 'react-router-dom'
const Express = () => {
  return (
    <div>
    <Link className="link-back" to={"/"}> <code>&lt;</code></Link>
    <h2 className="icon">Express.js</h2>
    <section className="content-program">
        <h2>Sesión Básica: Fundamentos de Express.js</h2>
        <article className="basico">
            <div className="item">
                <h2>Introducción a Express.js</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />
                        ¿Qué es Express.js y cómo se relaciona con Node.js?
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />{" "}
                        Instalación y configuración básica de Express.js.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Manejo de Rutas</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />
                        Definición y uso de rutas en Express.js.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />
                        Parámetros de ruta y consulta.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Middleware</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />
                        Concepto y uso de middleware en Express.js.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />
                        Creación y aplicación de middleware personalizado.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Intermedia: Avanzando con Express.js</h2>
        <article className="basico medio">
            <div className="item">
                <h2>Plantillas y Vistas</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />
                        Integración de motores de plantillas (como EJS o Handlebars) en Express.js.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />{" "}
                        Configuración y renderizado de vistas en Express.js.
                    </li>
                </ul>
            </div>

            <div className="item">
                <h2>Manejo de Formularios</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />
                        Procesamiento de datos de formularios en Express.js.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de middleware para la validación de formularios.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Manejo de Archivos Estáticos</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />
                        Configuración y servido de archivos estáticos en Express.js.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de middleware para el manejo de archivos estáticos.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Avanzada: Maestría en Express.js</h2>
        <article className="basico avanzado">
            <div className="item">
                <h2>Autenticación y Autorización</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />
                        Implementación de sistemas de autenticación con Passport.js.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />{" "}
                        Control de acceso a recursos con JWT (JSON Web Tokens).
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>API RESTful</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />
                        Diseño y creación de una API RESTful con Express.js.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />{" "}
                        Implementación de operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Seguridad y Desempeño</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />
                        Mejoras de seguridad en aplicaciones Express.js.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="express1"
                            id="check"
                            className="check"
                        />{" "}
                        Optimización de rendimiento en aplicaciones Express.js.
                    </li>
                </ul>
            </div>
        </article>
    </section>
    <p className="conclu">
        <strong>Conclusión:</strong> Con esta roadmap, podrás dominar gradualmente los conceptos básicos, técnicas intermedias y avanzadas de Express.js, lo que te permitirá construir aplicaciones web robustas y escalables utilizando este framework ligero y flexible para Node.js.
    </p>
</div>

  )
}

export default Express
