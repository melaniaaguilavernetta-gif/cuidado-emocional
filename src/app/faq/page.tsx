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
    // Hemos añadido un fondo gris muy claro y mucho más margen superior (pt-40)
    <main className="bg-gray-50 min-h-screen pt-40 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Preguntas Frecuentes
        </h1>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">
                {faq.q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">¿Tienes alguna otra duda?</p>
          <a 
            href="/#contact" 
            className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-full font-medium hover:bg-emerald-700 transition-all shadow-lg"
          >
            Escríbeme directamente
          </a>
        </div>
      </div>
    </main>
  );
}
