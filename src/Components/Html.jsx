import React from "react";
import { Link } from "react-router-dom";
const Html = () => {
  return (
    <div>
      <h2 className="icon i-html">HTML5</h2>
      <section className="content-program">
        <h2>Sesión Básica: Fundamentos de HTML</h2>
        <article className="basico">
          <div className="item">
            <h2>Introducción a HTML</h2>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />
                Qué es HTML y su importancia en el desarrollo web.
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />{" "}
                Estructura básica de un documento HTML: etiquetas ({" "}
                <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>,{" "}
                <code>&lt;title&gt;</code>, <code>&lt;body&gt;</code>.)
              </li>
            </ul>
          </div>
          <div className="item">
            <h2>Elementos y Etiquetas</h2>
            <ul>
             
              <li>
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />
                Conocimiento de las etiquetas HTML básicas:{" "}
                <code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>,{" "}
                <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code>,{" "}
                <code>&lt;img&gt;</code>, <code>&lt;ul&gt;</code>,{" "}
                <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>, etc.
              </li>
              <li>
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />
                Uso de atributos comunes como <code>id</code>,{" "}
                <code>class</code>, <code>src</code>, <code>href</code>,{" "}
                <code>alt</code>, <code>title</code>, etc.
              </li>
            </ul>
          </div>
          <div className="item">
            <h2>Estructura de Documentos</h2>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />
                Aprender a crear estructuras semánticas usando etiquetas como{" "}
                <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
                <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>,{" "}
                <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>.
              </li>
              <li>
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />
                Utilizar etiquetas de agrupación como <code>&lt;div&gt;</code> y{" "}
                <code>&lt;span&gt;</code> para organizar el contenido.
              </li>
            </ul>
          </div>
        </article>
        <h2>Sesión Intermedia: Avanzando con HTML</h2>
        <article className="basico medio">
          <div className="item">
            <h2>Formularios y Elementos de Entrada</h2>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />
                Creación de formularios HTML utilizando etiquetas como{" "}
                <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>,{" "}
                <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>,{" "}
                <code>&lt;button&gt;</code>.
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />{" "}
                Aprendizaje sobre validación de formularios y atributos como{" "}
                <code>required</code>, <code>maxlength</code>,{" "}
                <code>pattern</code>, etc.
              </li>
            </ul>
          </div>

          <div className="item">
            <h2>Multimedia y Gráficos</h2>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />
                Incorporar contenido multimedia con etiquetas como{" "}
                <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>,{" "}
                <code>&lt;iframe&gt;</code>.
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />{" "}
                Uso de la etiqueta <code>&lt;canvas&gt;</code> para dibujar
                gráficos y animaciones básicas.
              </li>
            </ul>
          </div>
          <div className="item">
            <h2>Tablas y Marcos</h2>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />
                Creación de tablas con etiquetas <code>&lt;table&gt;</code>,{" "}
                <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>,{" "}
                <code>&lt;th&gt;</code> para mostrar datos tabulados.
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />{" "}
                Exploración de conceptos básicos de marcos (
                <code>&lt;iframe&gt;</code>) para incrustar contenido externo.
              </li>
            </ul>
          </div>
        </article>
        <h2>Sesión Avanzada: Dominando HTML y Más Allá</h2>
        <article className="basico avanzado">
          <div className="item">
            <h2>HTML5 Avanzado</h2>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />
                Uso de características avanzadas de HTML5 como elementos de sección adicionales (<code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;section&gt;</code>, etc.).
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />{" "}
               Implementación de nuevas etiquetas semánticas como <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;figure&gt;</code>, <code>&lt;figcaption&gt;</code>, etc.
              </li>
            </ul>
          </div>
          <div className="item">
            <h2>Accesibilidad y SEO</h2>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />
                Aplicar buenas prácticas de accesibilidad web mediante la incorporación de etiquetas y atributos para usuarios con discapacidad.</li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />{" "}
              Optimización de contenido para motores de búsqueda (SEO) utilizando etiquetas meta, estructura semántica y URL amigables.
              </li>
            </ul>
          </div>
          <div className="item">
            <h2>Integración con CSS y JavaScript</h2>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />
               Comprender la separación de la estructura (HTML), la presentación (CSS) y la interactividad (JavaScript).
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  name="html1"
                  id="check"
                  className="check"
                />{" "}
             Explorar cómo conectar HTML con CSS y JavaScript para crear sitios web dinámicos y visualmente atractivos.
              </li>
            </ul>
          </div>
        </article>
      </section>
      <p className="conclu">
        <strong>Conclusión:</strong> Con este roadmap, podrás dominar
        gradualmente los fundamentos, técnicas intermedias y conceptos avanzados
        de HTML, lo que te permitirá crear sitios web funcionales y bien
        diseñados.
      </p>
    </div>
  );
};

export default Html;
