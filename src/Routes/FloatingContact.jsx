import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      
       <a
        href="https://wa.me/919526211252"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={26} />
      </a>

       <a
        href="tel:+919526211252"
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <Phone size={24} />
      </a>

    </div>
  );
}
