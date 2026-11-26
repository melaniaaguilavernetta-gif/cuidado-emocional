import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './button.tsx';
import { Input } from './input.tsx';
import { Textarea } from './textarea.tsx';
import { Card, CardContent } from './card.tsx';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta de ${formData.name}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `mailto:hola@cuidadoemocional.com?subject=${subject}&body=${body}`;
    setSubmittedNotice(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-teal-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            ¿Listo/a para dar el primer paso?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Reserva tu primera sesión y descubre cómo la combinación de TCC y PNL puede ayudarte
            a vivir con más calma, claridad y confianza. Acompañamiento presencial en Girona y online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-800">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-800">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-800">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-800">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame brevemente qué te trae por aquí..."
                      className="w-full min-h-32"
                    />
                    <p className="text-xs text-gray-600 mt-2">
                      Sin compromiso ni tecnicismos: con unas líneas basta para empezar.
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold">
                    Enviar mensaje
                    <Send className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Button>

                  {submittedNotice && (
                    <p className="text-sm text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                      Se ha preparado tu mensaje para <strong>hola@cuidadoemocional.com</strong>. Si no se abrió tu gestor de correo automáticamente, puedes enviarlo directamente a esa dirección o llamar al <strong>+34 696 68 22 77</strong>.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-700" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Email</div>
                    <a
                      href="mailto:hola@cuidadoemocional.com"
                      className="text-emerald-800 font-medium hover:underline"
                    >
                      hola@cuidadoemocional.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-700" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Teléfono</div>
                    <a
                      href="tel:+34696682277"
                      className="text-emerald-800 font-medium hover:underline"
                    >
                      +34 696 68 22 77
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-700" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Ubicación y modalidad</div>
                    <p className="text-gray-700">Girona, España • Presencial y online</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-emerald-700 to-teal-700 text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Horario de atención</h3>
                <div className="space-y-2 text-emerald-50">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span>Cerrado</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
