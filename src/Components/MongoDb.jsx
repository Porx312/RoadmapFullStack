import React from 'react'
import { Link } from 'react-router-dom'
const MongoDb = () => {
  return (
    <div>
    <h2 className="icon">MongoDB</h2>
    <section className="content-program">
        <h2>Sesión Básica: Fundamentos de MongoDB</h2>
        <article className="basico">
            <div className="item">
                <h2>Introducción a MongoDB</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />
                        ¿Qué es MongoDB y cómo se diferencia de las bases de datos relacionales?
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />{" "}
                        Instalación y configuración básica de MongoDB.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Operaciones Básicas</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />
                        Creación, lectura, actualización y eliminación de documentos en MongoDB.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />
                        Uso de filtros y proyecciones en consultas.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Modelado de Datos</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />
                        Diseño de esquemas y relaciones en MongoDB.
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />
                        Uso de tipos de datos avanzados como arreglos y objetos anidados.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Intermedia: Avanzando con MongoDB</h2>
        <article className="basico medio">
            <div className="item">
                <h2>Consultas Avanzadas</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />
                        Uso de operadores de agregación en consultas.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />{" "}
                        Indexación y optimización de consultas.
                    </li>
                </ul>
            </div>

            <div className="item">
                <h2>Transacciones y Atomicidad</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />
                        Implementación de operaciones atómicas en MongoDB.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />{" "}
                        Uso de transacciones en MongoDB.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Replicación y Fragmentación</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />
                        Configuración de conjuntos de réplicas en MongoDB.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />{" "}
                        Fragmentación de datos y uso de fragmentación en MongoDB.
                    </li>
                </ul>
            </div>
        </article>
        <h2>Sesión Avanzada: Maestría en MongoDB</h2>
        <article className="basico avanzado">
            <div className="item">
                <h2>Seguridad y Auditoría</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />
                        Configuración de autenticación y autorización en MongoDB.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />{" "}
                        Registro de auditoría y monitoreo en MongoDB.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Escalado y Desempeño</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />
                        Estrategias de escalado horizontal y vertical en MongoDB.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />{" "}
                        Optimización de consultas y desempeño en MongoDB.
                    </li>
                </ul>
            </div>
            <div className="item">
                <h2>Backup y Restauración</h2>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />
                        Creación y programación de respaldos en MongoDB.
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="mongodb1"
                            id="check"
                            className="check"
                        />{" "}
                        Restauración de datos y recuperación en MongoDB.
                    </li>
                </ul>
            </div>
        </article>
    </section>
    <p className="conclu">
        <strong>Conclusión:</strong> Con esta roadmap, podrás avanzar desde los fundamentos hasta las técnicas avanzadas de MongoDB, lo que te permitirá diseñar y administrar bases de datos NoSQL eficientes y escalables utilizando este popular sistema de gestión de bases de datos.
    </p>
</div>

  )
}

export default MongoDb
