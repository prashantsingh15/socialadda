import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const whatsappNumber = '+919523865073';
  const message = encodeURIComponent('Hi! I\'m interested in learning more about Social Adda.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float-button"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 z-50 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFloat;
