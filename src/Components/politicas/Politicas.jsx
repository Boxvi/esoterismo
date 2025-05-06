import "./politicas.scss";

const Politicas = () => {
    return (
        <section className="politicas">
            <h2 className="politicas__heading">
                POLÍTICAS Y CONDICIONES
            </h2>
            <ul className="politicas__list">
                <li className="politicas__list-item">
                    <strong>Edad mínima:</strong> Este sitio está dirigido exclusivamente a mayores de 18 años. Al acceder a nuestros servicios, confirmas que cumples con este requisito.
                </li>
                <li className="politicas__list-item">
                    <strong>Naturaleza de los servicios:</strong> Todas las consultas, rituales y servicios esotéricos ofrecidos tienen fines de orientación personal y entretenimiento. No constituyen asesoramiento médico, psicológico, legal o financiero profesional.
                </li>
                <li className="politicas__list-item">
                    <strong>Responsabilidad del usuario:</strong> Los resultados pueden variar según circunstancias individuales. Nuestros servicios no sustituyen atención profesional en ningún ámbito.
                </li>
                <li className="politicas__list-item">
                    <strong>No garantía de resultados:</strong> Cada situación es única y depende de múltiples factores energéticos y personales. No prometemos resultados específicos ni idénticos para todos los usuarios.
                </li>
            </ul>

            <h2 className="politicas__heading">
                DESCARGO DE RESPONSABILIDAD
            </h2>
            <div className="politicas__disclaimer">
                <p className="politicas__paragraph">
                    <strong>1. Alcance de los servicios</strong><br />
                    Todos los servicios esotéricos, lecturas espirituales y rituales ofrecidos en este sitio tienen exclusivamente fines de orientación personal, desarrollo espiritual y entretenimiento. Bajo ninguna circunstancia deben considerarse como asesoramiento médico, psicológico, legal o financiero profesional.
                </p>
                <br></br>
                <p className="politicas__paragraph">
                    <strong>2. Limitación de garantías</strong><br />
                    a) No garantizamos ni prometemos resultados específicos de ningún tipo<br />
                    b) Los testimonios presentados reflejan experiencias excepcionales y no representan resultados típicos<br />
                    c) Los resultados varían según factores individuales que escapan a nuestro control
                </p>
                <br></br>
                <p className="politicas__paragraph">
                    <strong>3. Factores determinantes</strong><br />
                    El éxito de cualquier trabajo espiritual depende de múltiples variables incluyendo pero no limitado a:
                </p>

                <ul className="politicas__sublist">
                    <li>Circunstancias kármicas individuales</li>
                    <li>Libre albedrío de todas las partes involucradas</li>
                    <li>Compromiso y energía personal del solicitante</li>
                    <li>Bloqueos emocionales o espirituales no diagnosticados</li>
                    <li>Tiempo de evolución requerido para cada situación</li>
                </ul>
                <br></br>
                <p className="politicas__paragraph">
                    <strong>4. Responsabilidad del usuario</strong><br />
                    Al utilizar nuestros servicios, usted acepta que:
                </p>
                <ul className="politicas__sublist">
                    <li>Es mayor de edad y actúa por voluntad propia</li>
                    <li>Comprende la naturaleza espiritual (no científica) de estos métodos</li>
                    <li>Asume plena responsabilidad por sus decisiones y acciones</li>
                    <li>Exime a este sitio de cualquier reclamo por resultados no obtenidos</li>
                </ul>
                <br></br>
                <p className="politicas__paragraph">
                    <strong>5. Advertencia ética</strong><br />
                    Todos los trabajos espirituales deben realizarse con:<br />
                    - Respeto al libre albedrío de todas las partes<br />
                    - Intenciones positivas y constructivas<br />
                    - Conciencia de las leyes kármicas universales
                </p>
                <br></br>
                <p className="politicas__paragraph politicas__notice">
                    <strong>NOTA IMPORTANTE:</strong> Si está experimentando problemas emocionales graves, crisis existenciales o trastornos psicológicos, le recomendamos encarecidamente buscar ayuda profesional calificada. Los servicios aquí ofrecidos no sustituyen tratamiento médico o terapéutico alguno.
                </p>
            </div>

            <p className="politicas__update">
                Última actualización: 06/05/2025 | Para consultas: esoterismo@boxvisoft.com
            </p>

            <p className="politicas__update">
                Este descargo de responsabilidad está sujeto a cambios sin previo aviso. Se recomienda revisarlo periódicamente.
            </p>


            <div className="politicas__footer">
                Esta página está hecha con ❤️ por <a href="https://www.boxvisoft.com" target="_blank" rel="noopener noreferrer">Boxvisoft.com</a> © 2025 - Todos los derechos reservados
            </div>
        </section>
    )
}

export default Politicas