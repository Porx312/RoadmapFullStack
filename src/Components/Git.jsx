import React from 'react'
import { Link } from 'react-router-dom'
const Git = () => {
  return (
    <div>
    <h2 className="icon">Git</h2>
    <section className="content-program">
        <h2>Sesión Básica: Fundamentos de Git</h2>
        <article className="basico">
            <div className="item">
                <h2>Introducción a Git</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />
                        ¿Qué es Git y por qué es importante en el desarrollo de software?
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />{" "}
                        Instalación y configuración básica de Git.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Comandos Básicos</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />
                        Inicialización de un repositorio Git (git init).
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />
                        Añadir archivos al área de preparación (git add).
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />
                        Realizar un commit de cambios (git commit).
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />
                        Revisar el historial de commits (git log).
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Trabajo con Ramas</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />
                        Crear y cambiar entre ramas (git branch, git checkout).
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />
                        Fusionar ramas (git merge).
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />
                        Resolver conflictos de fusión.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Intermedia: Avanzando con Git</h2>
        <article className="basico medio">
            <div className="item">
                <h2>Trabajo Remoto</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />
                        Clonar repositorios remotos (git clone).
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />{" "}
                        Trabajar con repositorios remotos (git remote, git push, git pull).
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />
                        Crear y fusionar ramas remotas.
                    </li>
                </ul>
            </div>

            <div className="item">
                <h2>Flujo de Trabajo</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />
                        Ramas de características y ramas de lanzamiento.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de etiquetas (tags) para versionado.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />
                        Buenas prácticas de colaboración en equipos.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Git Avanzado</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />
                        Reescribir la historia (rebase, amend).
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />{" "}
                        Git bisect para encontrar errores.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="git1"
                            id="check"
                            className="check"
                        />
                        Uso de Git Hooks para automatizar tareas.
                    </li>
                </ul>
            </div>
        </article>
    </section>
    <p className="conclu">
        <strong>Conclusión:</strong> Con esta roadmap, podrás avanzar desde los conceptos básicos hasta las técnicas avanzadas de Git, permitiéndote gestionar eficientemente el control de versiones en tus proyectos de desarrollo.
    </p>
</div>

  )
}

export default Git
