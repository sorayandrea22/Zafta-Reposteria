import {
  ContactCta,
  DeliveryInfo,
  FuturePlans,
  Hero,
  MainMessage,
} from "./components";

const UbicationPage = async () => {
  return (
    <div className="min-h-screen bg-ivory pt-20">
      {/* Hero */}
      <Hero />
      {/* Main Message */}
      <MainMessage />
      {/* Delivery Info */}
      <DeliveryInfo />
      {/* Future Plans */}
      <FuturePlans />
      {/* Contact CTA */}
      <ContactCta />
    </div>
  );
};

export default UbicationPage;
