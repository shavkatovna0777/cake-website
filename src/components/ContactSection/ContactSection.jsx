import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactSection = () => {
  const position = [40.1156, 67.8422]; // Jizzax koordinatalari

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-[400px] mt-[50px]">
      <div className="h-full">
        <MapContainer center={position} zoom={13} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>Bizning joylashuv</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="bg-color text-white flex flex-col justify-center p-[125px_120px]">
        <h2 className="text-[28px]  font-semibold tort-font">Aloqa</h2>
        <p className="mt-2 text-[18px] font-[500] leading-[24px] space-y-[16px] tort-font">
          +998 (90) 123 45 67
        </p>
        <p className="text-[18px] font-[500] leading-[24px] space-y-[16px]  tort-font">
          info@tortlar.uz
        </p>
        <p className="mt-2 text-[18px] font-[500] leading-[24px] space-y-[16px]  tort-font">
          Jizzax shahri, “Mustaqillik” mahallasi, <br />
          Yangi Jizzax ko‘chasi, 15/11-uy
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
