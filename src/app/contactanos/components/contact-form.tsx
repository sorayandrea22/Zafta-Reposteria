export const ContactForm = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="font-lustria text-3xl text-burgundy mb-6 font-extrabold">
        envíanos un mensaje
      </h2>

      <form method="post" className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block font-fredoka font-semibold text-navy mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-rosegold/30 focus:border-burgundy rounded-lg outline-none transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-fredoka font-semibold text-navy mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-rosegold/30 focus:border-burgundy rounded-lg outline-none transition-colors"
          />
        </div>

        {/* ...existing form fields... */}

        <button
          type="submit"
          className="w-full bg-burgundy hover:bg-burgundy/90 text-ivory font-fredoka font-semibold py-4 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          enviar mensaje
        </button>
      </form>

      {/* success message */}
      {/* <div className="mt-6 bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg"> */}
      {/*   <p className="font-fredoka font-semibold"> */}
      {/*     ¡mensaje enviado con éxito! */}
      {/*   </p> */}
      {/*   <p className="text-sm mt-1">te responderemos lo más pronto posible.</p> */}
      {/* </div> */}
      {/**/}
      {/* <div className="mt-6 bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg"> */}
      {/*   <p className="font-fredoka font-semibold">error al enviar el mensaje</p> */}
      {/* </div> */}
    </div>
  );
};
