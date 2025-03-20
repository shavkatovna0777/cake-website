import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactSection = () => {
  const position = [40.1156, 67.8422]; // Jizzax koordinatalari

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-full mt-8">
      <div className="h-96 md:h-full w-full">
        <MapContainer 
          center={position} 
          zoom={13} 
          className="h-full w-full"
          style={{ height: "100%", minHeight: "300px" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>Bizning joylashuv</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="bg-color text-white flex flex-col justify-center  p-6 md:p-8 lg:p-12 xl:p-16">
        <h2 className="text-2xl md:text-3xl font-semibold tort-font">Aloqa</h2>
        <p className="mt-4 text-base md:text-lg font-medium tort-font">
          +998 (90) 123 45 67
        </p>
        <p className="mt-2 text-base md:text-lg font-medium tort-font">
          info@tortlar.uz
        </p>
        <p className="mt-4 text-base md:text-lg font-medium tort-font">
          Jizzax shahri, "Mustaqillik" mahallasi, <br className="hidden sm:block" />
          Yangi Jizzax ko'chasi, 15/11-uy
        </p>
      </div>
    </section>
  );
};

export default ContactSection;