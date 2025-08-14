'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

const WhatsAppButton = () => {
  const phoneNumber = '+584145942817'; // Reemplaza con tu número de WhatsApp
  const message = 'Hola, estoy interesado en sus servicios.'; // Mensaje predeterminado

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={30} />
    </Link>
  );
};

export default WhatsAppButton;
