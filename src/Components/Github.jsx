import React from 'react'
import { Link } from 'react-router-dom'
const Github = () => {
  return (
    <div>
    <h2 className="icon">GitHub</h2>
    <section className="content-program">
        <h2>Sesión Básica: Fundamentos de GitHub</h2>
        <article className="basico">
            <div className="item">
                <h2>Introducción a GitHub</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />
                        ¿Qué es GitHub y su importancia en el desarrollo colaborativo?
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />{" "}
                        Creación de una cuenta y configuración básica.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Repositorios y Colaboración</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />
                        Creación de repositorios locales y remotos.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />
                        Añadir colaboradores y gestionar permisos.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />
                        Forks y Pull Requests.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Seguimiento de Proyectos</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />
                        Creación de proyectos y organización de tareas.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />
                        Uso de Issues y Milestones para seguimiento.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Intermedia: Avanzando con GitHub</h2>
        <article className="basico medio">
            <div className="item">
                <h2>Automatización con GitHub Actions</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />
                        Creación de workflows para automatizar tareas.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de acciones predefinidas y personalizadas.
                    </li>
                </ul>
            </div>

            <div className="item">
                <h2>Gestión de Versiones con Git</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />
                        Integración de Git con GitHub.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />{" "}
                        Visualización de cambios y comentarios en PRs.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />
                        Resolución de conflictos.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Seguridad y Políticas</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />
                        Configuración de políticas de seguridad y acceso.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />{" "}
                        Análisis de vulnerabilidades de dependencias.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Avanzada: Maestría en GitHub</h2>
        <article className="basico avanzado">
            <div className="item">
                <h2>Personalización y Extensibilidad</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />
                        Personalización de perfiles y temas.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de GitHub Apps y GitHub API.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Análisis y Métricas</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />
                        Uso de Insights para análisis de repositorios.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />{" "}
                        Generación de informes y métricas de colaboración.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>GitHub Enterprise y Soluciones Empresariales</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />
                        Implementación y gestión de GitHub Enterprise.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="github1"
                            id="check"
                            className="check"
                        />{" "}
                        Escalado y administración de flujos de trabajo empresariales.
                    </li>
                </ul>
            </div>
        </article>
    </section>
    <p className="conclu">
        <strong>Conclusión:</strong> Con esta roadmap, podrás avanzar desde los conceptos básicos hasta las técnicas avanzadas de GitHub, permitiéndote colaborar de manera eficiente en proyectos de desarrollo y gestionar el ciclo de vida del software de manera efectiva.
    </p>
</div>

  )
}

export default Github
