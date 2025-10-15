export const Content = () => {
  return (
    <div
      id="modal"
      className="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 modal"
    >
      <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
        <div className="flex justify-between items-center bg-green-500 text-white text-xl rounded-t-md px-4 py-2">
          <h3>Modal header</h3>
          <button>x</button>
        </div>

        <div className="max-h-48 overflow-y-scroll p-4">
          <p>Historia de Zafta:</p>
          <p>
            Soy Cami, la persona que hoy continúa con un legado familiar que
            endulza los momentos de muchas familias en Antioquia.
          </p>
          <p>
            Este proyecto nació hace casi 30 años, gracias a Fanny Wagner, la
            abuela de mi esposo. En una época donde las cosas no eran fáciles
            económicamente, Fanny tomó una decisión valiente: apostarle todo a
            una de sus recetas más queridas, la torta de chocolate. Y así, con
            mucho amor y esfuerzo, nació lo que muchos conocieron como “la torta
            de la judía”.
          </p>
          <p>
            Fanny trabajaba desde su casa, siempre acompañada de sus hijos y,
            más adelante, de su esposo. Nunca estuvo sola en este camino.
            Durante años, esa torta fue el centro de muchos momentos especiales.
            Cuando Fanny trascendió, hace ya más de 10 años, muchas personas
            pensaron que con ella se había ido también su famosa receta. Pero no
            fue así…
          </p>
          <p>
            Nena, quien había estado a su lado por más de 20 años, continuó con
            el legado y desde el 2015, yo —María Camila— decidí apoyar este
            proyecto: empecé a manejar las redes para darle un nuevo impulso,
            porque sentía que esta historia no podía terminar. Para mi sorpresa,
            comenzaron a escribirme personas que habían comprado la torta hace
            años, emocionadas de saber que era la misma receta de Fanny. Me
            pedían versiones con colores, decoraciones y nuevos toques, así que
            decidí estudiar en la escuela Mariano Moreno para poder hacer
            realidad esas ideas sin perder lo esencial.
          </p>
          <p>
            Hoy, la torta de la judía —que ahora llamamos con cariño “Torta
            Zafta”— se llena de colores y nuevas decoraciones, pero sigue
            conservando ese sabor que tanto nos conecta. Lo más hermoso de este
            camino es que la torta se ha convertido en parte de las tradiciones
            familiares de muchas personas. Nos llaman y nos dicen: “Queremos esa
            torta, la que le encantaba a mi abuela”, o “esa torta la pido desde
            mis 15 años en todos mis cumpleaños”.
          </p>
          <p>
            Para nosotros, eso no tiene precio. Porque no es solo una torta: es
            un pedacito de historia, de memoria, de amor… que sigue endulzando
            corazones generación tras generación.
          </p>
        </div>

        <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Close (ESC)
          </button>
        </div>
      </div>
    </div>
  );
};
