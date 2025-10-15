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
            <span className="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#80001e"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </span>
          </div>
          <div>
            <h3 className="font-lustria font-semibold text-navy mb-1">
              whatsapp
            </h3>
            <p className="font-fredoka text-navy/70">+57 311 747 9392</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-rosegold/20 p-3 rounded-full mr-4">
            <span className="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#80001e"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </span>
          </div>
          <div>
            <h3 className="font-lustria font-semibold text-navy mb-1">
              Instagram
            </h3>
            <p className="font-fredoka text-navy/70">
              <a
                href="https://www.instagram.com/zafta_reposteria"
                target="__blank"
                className="hover:text-burgundy cursor-pointer"
              >
                @zafta_reposteria
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
