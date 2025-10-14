import { ContactForm, ContactInfo } from "./components";

const ContactPage = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* contact info */}
        <ContactInfo />
        {/* contact form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
