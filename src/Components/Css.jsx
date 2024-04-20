import React from 'react'
import { Link } from 'react-router-dom'
const Css = () => {
  return (
    <div>
    <h2 className="icon i-css">CSS3</h2>
    <section className="content-program">
        <h2>Sesión Básica: Fundamentos de CSS</h2>
        <article className="basico">
            <div className="item">
                <h2>Sintaxis y Selectores</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />
                        Introducción a CSS y su importancia en el diseño web.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />{" "}
                        Selectores básicos (elemento, clase, ID).
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Propiedades y Valores</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />
                        Propiedades de estilo básicas (color, tamaño de fuente, margen, padding).
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />
                        Box model y layout con width, height, display, float, position.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Estilos Avanzados</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />
                        Estilos de texto avanzados (fuentes, decoraciones).
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />
                        Flexbox y Grid para diseño de página.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Intermedia: Profundizando en CSS</h2>
        <article className="basico medio">
            <div className="item">
                <h2>Transiciones y Animaciones</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />
                        Uso de transition y transform para animaciones suaves.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />{" "}
                        Creación de animaciones avanzadas con keyframes.
                    </li>
                </ul>
            </div>

            <div className="item">
                <h2>Media Queries</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />
                        Diseño responsivo con media queries.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de unidades relativas (em, rem, porcentaje) para diseño adaptable.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Pseudo-Clases y Pseudo-Elementos</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />
                        Estilización de elementos según su estado (hover, active, focus).
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de pseudo-elementos (::before, ::after) para añadir contenido.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Avanzada: Maestría en CSS</h2>
        <article className="basico avanzado">
            <div className="item">
                <h2>CSS Grid y Flexbox</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />
                        Dominio de Grid para layouts complejos.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso avanzado de Flexbox para alinear y distribuir elementos.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Efectos Visuales</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />
                        Efectos de sombra, borde, y filtro.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />{" "}
                        Creación de gradientes y patrones de fondo.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Preprocesadores CSS</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />
                        Uso de preprocesadores como Sass o Less para mejorar la eficiencia del código.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="css1"
                            id="check"
                            className="check"
                        />{" "}
                        Implementación de variables, mixins, y funciones.
                    </li>
                </ul>
            </div>
        </article>
    </section>
    <p className="conclu">
        <strong>Conclusión:</strong> Con esta roadmap, podrás avanzar desde los conceptos básicos hasta las técnicas avanzadas de CSS, permitiéndote diseñar páginas web con estilo y funcionalidad.
    </p>
</div>

  )
}

export default Css
