import React from 'react'
import { Link } from 'react-router-dom'
const Typescript = () => {
  return (
    <div>
    <Link className="link-back" to={"/"}> <code>&lt;</code></Link>
    <h2 className="icon">TypeScript</h2>
    <section className="content-program">
        <h2>Sesión Básica: Fundamentos de TypeScript</h2>
        <article className="basico">
            <div className="item">
                <h2>Introducción a TypeScript</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />
                        ¿Qué es TypeScript y cómo se relaciona con JavaScript?
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />{" "}
                        Instalación y configuración básica de TypeScript.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Tipo de Datos y Variables</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />
                        Uso de tipos de datos básicos (number, string, boolean, etc.) en TypeScript.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />
                        Declaración y asignación de variables en TypeScript.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Funciones y Tipos Avanzados</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />
                        Definición de funciones con tipos de parámetros y retorno en TypeScript.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />
                        Uso de tipos avanzados como interfaces, tipos literales y tipos genéricos.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Intermedia: Avanzando con TypeScript</h2>
        <article className="basico medio">
            <div className="item">
                <h2>Clases y Herencia</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />
                        Creación de clases y definición de propiedades y métodos en TypeScript.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />{" "}
                        Implementación de herencia y uso de modificadores de acceso.
                    </li>
                </ul>
            </div>

            <div className="item">
                <h2>Módulos y Namespaces</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />
                        Organización de código en módulos en TypeScript.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de namespaces para evitar conflictos de nombres.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Tipado Avanzado y Decoradores</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />
                        Uso de tipos condicionales y discriminados en TypeScript.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />
                        Aplicación de decoradores para modificar o extender comportamientos de clases y métodos.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Avanzada: Maestría en TypeScript</h2>
        <article className="basico avanzado">
            <div className="item">
                <h2>Configuración de Proyectos</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />
                        Configuración de tsconfig.json para proyectos TypeScript.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de otros archivos de configuración como tslint.json y jest.config.js.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Integración con Frameworks</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />
                        Integración de TypeScript con frameworks como Angular, React y Vue.js.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />{" "}
                        Configuración de proyectos y scripts de compilación para trabajar con estos frameworks.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Uso Avanzado de Tipos y Herramientas</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />
                        Definición de tipos globales y personalizados en TypeScript.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="typescript1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de herramientas de análisis estático como TSLint y ESLint.
                    </li>
                </ul>
            </div>
        </article>
    </section>
    <p className="conclu">
        <strong>Conclusión:</strong> Con esta roadmap, podrás avanzar desde los fundamentos hasta las técnicas avanzadas de TypeScript, lo que te permitirá escribir código más seguro, escalable y mantenible en tus proyectos de desarrollo web.
    </p>
</div>

  )
}

export default Typescript
