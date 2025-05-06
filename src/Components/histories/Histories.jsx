import Card from "./Card";
import "./histories.scss";
import incognitoh from "../../images/incognitoh.png";
import hombre1 from "../../images/persona1.jpg";
import incognitom from "../../images/incognitom.png";
import mujer1 from "../../images/persona2.jpg";
import mujer2 from "../../images/persona3.jpg";

let maria = "No podía creerlo... Después de 6 meses separados, mi ex volvió arrepentido. Seguí al pie de la letra el ritual de luna rosa que me recomendo y, en 3 semanas, me escribió pidiendo otra oportunidad. ¡Gracias!",
  carlos = "Era escéptico, pero mi novia me dejó por otro y estaba desesperado. Hice un amarre con velas rojas y en menos de un mes ella cortó con él y regresó. Ahora estamos más unidos que nunca.",
  lucia = "Mi esposo se fue de casa por una discusión tonta. Una amiga me habló de una limpia de pareja y, aunque no creía, la hice. A la semana, él volvió pidiendo perdón. ¡El poder de la energía es real!",
  javier = "Mi ex me bloqueó de todos lados. Usé un hechizo de retorno que me comento y, en días, me desbloqueó y me llamó para vernos. Hoy vivimos juntos. ¡Increíble!",
  sofia = "Hice el ritual de la miel con su nombre y fotos. En 2 semanas, el hombre que me ghosteó por meses apareció diciendo que soñó conmigo y no podía olvidarme. ¡Funciona!",
  valeria = "Mi pareja se fue sin explicación. Encendí una vela de retorno cada viernes y leí oraciones. En 3 semanas, me buscó llorando, diciendo que sentía que algo lo llamaba hacia mí.",
  diego="Tras 10 años de matrimonio, mi mujer pidió divorcio. Me ayudó con un trabajo de reconciliación y, aunque tardó 2 meses, ella volvió. Ahora nuestra relación es mejor.";


const Histories = () => {
  return (
    <section id="histories" className="histories">
      <Card user={maria} img={mujer1} />
      <Card user={carlos} img={hombre1} />
      <Card user={lucia} img={incognitom} />
      <Card user={javier} img={incognitoh} />
      <Card user={sofia} img={mujer2} />
      <Card user={valeria} img={incognitom} />
      <Card user={diego} img={incognitoh} />
    </section>
  )
}

export default Histories