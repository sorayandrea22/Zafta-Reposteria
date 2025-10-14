import Image from "next/image";

export const Birth = () => {
  return (
    <div className="my-20">
      <h2 className="text-5xl text-center text-primary mb-14">
        Lo que nos mueve
      </h2>
      <div className=" w-full  flex items-center justify-center ">
        <div className="w-1/2 bg-white rounded-lg shadow-lg px-20">
          <div className="w-20 my-10 m-auto bg-primary rounded-2xl h-1"></div>
          <p className="text-xl text-justify text-gray-800  ">
            La Torta Zafta nació hace casi 30 años con la receta original de
            Fanny Wagner. Lo que empezó como una torta de chocolate para
            celebraciones en casa, se convirtió en sustento para una familia en
            un momento de dificultad: su tradición familiar trascendió a más
            familias.
          </p>
          <div className="w-20 h-20 my-10 m-auto bg-secondary rounded-full flex items-center justify-center">
            <Image
              src="/img/logos-11.svg"
              alt="Logo"
              width={70}
              height={70}
              unoptimized
            />
          </div>
          <p className="text-xl pb-10 text-justify text-gray-800">
            Hoy seguimos su legado con el mismo sabor de siempre, nuevos colores
            y mucho amor en cada porción.
          </p>
        </div>
      </div>
    </div>
  );
};
