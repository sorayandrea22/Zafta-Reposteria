import Link from "next/link";

export const ContactInfo = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
      <h2 className="font-lustria text-3xl text-burgundy mb-6 font-extrabold">
        información de contacto
      </h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-rosegold/20 p-3 rounded-full mr-4">
            <span className="text-2xl">📱</span>
          </div>
          <div>
            <h3 className="font-lustria font-semibold text-navy mb-1">
              whatsapp
            </h3>
            <p className="font-fredoka text-navy/70">+57 321 759 0897</p>
            <p className="font-fredoka text-sm text-navy/60 mt-1">
              lunes a viernes: 8am - 5pm <br />
              sábados: 8am - 12pm
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-rosegold/20 p-3 rounded-full mr-4">
            <span className="text-2xl">📧</span>
          </div>
          <div>
            <h3 className="font-lustria font-semibold text-navy mb-1">email</h3>
            <p className="font-fredoka text-navy/70">contacto@zafta.com</p>
            <p className="font-fredoka text-sm text-navy/60 mt-1">
              respondemos en menos de 24 horas
            </p>
          </div>
        </div>

        {/* social media section */}
        <div className="pt-6 border-t border-rosegold/20">
          <h3 className="font-lustria font-semibold text-navy mb-3">
            síguenos en redes
          </h3>
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com/zafta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rosegold/20 hover:bg-rosegold/30 p-3 rounded-full transition-colors"
            >
              <span className="text-xl">📸</span>
            </Link>
            <Link
              href="https://facebook.com/zafta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rosegold/20 hover:bg-rosegold/30 p-3 rounded-full transition-colors"
            >
              <span className="text-xl">📘</span>
            </Link>
            <Link
              href="https://tiktok.com/@zafta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rosegold/20 hover:bg-rosegold/30 p-3 rounded-full transition-colors"
            >
              <span className="text-xl">🎵</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
