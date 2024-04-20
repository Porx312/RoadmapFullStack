import React from 'react'
import { Link } from 'react-router-dom'
const Reactx = () => {
  return (
    <div>
    <h2 className="icon">React</h2>
    <section className="content-program">
        <h2>Sesión Básica: Fundamentos de React</h2>
        <article className="basico">
            <div className="item">
                <h2>Introducción a React</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />
                        ¿Qué es React y por qué es popular en el desarrollo web?
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />{" "}
                        Instalación y configuración básica de un proyecto de React.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Componentes y Props</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />
                        Creación de componentes funcionales y de clase.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />
                        Uso de props para pasar datos entre componentes.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Estado y Ciclo de Vida</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />
                        Uso del estado para manejar datos dinámicos.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />
                        Ciclo de vida de los componentes (montaje, actualización, desmontaje).
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Intermedia: Avanzando con React</h2>
        <article className="basico medio">
            <div className="item">
                <h2>Manejo de Eventos</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />
                        Manejo de eventos en componentes.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de setState para actualizar el estado.
                    </li>
                </ul>
            </div>

            <div className="item">
                <h2>Listas y Keys</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />
                        Renderizado de listas con map().
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de keys para optimizar el rendimiento.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Componentes Controlados y No Controlados</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />
                        Manejo de formularios en React.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />
                        Diferencia entre componentes controlados y no controlados.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Avanzada: Dominando React</h2>
        <article className="basico avanzado">
            <div className="item">
                <h2>React Hooks</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />
                        Uso de useState, useEffect y otros hooks.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />{" "}
                        Creación de hooks personalizados.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Rutas y Navegación</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />
                        Configuración de rutas con React Router.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />{" "}
                        Navegación entre diferentes componentes.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Gestión de Estado Global</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />
                        Uso de Context API para compartir estado entre componentes.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="react1"
                            id="check"
                            className="check"
                        />{" "}
                        Implementación de gestión de estado global con Redux.
                    </li>
                </ul>
            </div>
        </article>
    </section>
    <p className="conclu">
        <strong>Conclusión:</strong> Con esta roadmap, podrás avanzar desde los conceptos básicos hasta las técnicas avanzadas de React, permitiéndote construir aplicaciones web modernas y escalables utilizando esta poderosa biblioteca de JavaScript.
    </p>
</div>

  )
}

export default Reactx
