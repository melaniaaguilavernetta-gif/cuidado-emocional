import React from 'react';

export default function FAQPage() {
  const faqs = [
    {
      q: "¿Cuánto dura una sesión?",
      a: "Cada encuentro tiene una duración aproximada de 60 minutos, un tiempo dedicado exclusivamente a tu escucha y bienestar."
    },
    {
      q: "¿Es online o presencial?",
      a: "Principalmente trabajamos de forma online (vía Meet o Zoom). Esto nos permite una total flexibilidad y que puedas estar en un espacio donde te sientas segura y cómoda."
    },
    {
      q: "¿Cómo sé si este acompañamiento es para mí?",
      a: "Si sientes que necesitas un espacio para entender tus emociones, gestionar un cambio personal o simplemente quieres dedicarte un tiempo de calidad sin juicios, este es tu lugar."
    },
    {
      q: "¿Cómo se realizan los pagos?",
      a: "Para tu comodidad, los pagos se realizan mediante Bizum o transferencia bancaria una vez acordada la cita."
    },
    {
      q: "¿Qué pasa si tengo que cancelar?",
      a: "Entiendo que surgen imprevistos. Te agradezco que me avises con al menos 24 horas de antelación para poder organizar la agenda."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-light text-gray-900 mb-12 text-center">Preguntas Frecuentes</h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 pb-8">
              <h3 className="text-xl font-medium text-emerald-800 mb-3">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">¿Tienes alguna otra duda?</p>
          <a href="/#contacto" className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
            Escríbeme directamente
          </a>
        </div>
      </div>
    </div>
  );
}
