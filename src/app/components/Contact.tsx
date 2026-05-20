import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-teal-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Comienza tu transformación hoy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estoy aquí para acompañarte. Contáctame y da el primer paso hacia tu bienestar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card className="mb-8">
              <CardContent className="pt-6">
                {/* --- AQUÍ EMPIEZA LA MAGIA DEL FORMULARIO --- */}
                <form action="https://formspree.io/f/mdajekjy" method="POST" className="space-y-6">
                  
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      name="Nombre"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="Email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="Teléfono"
                      type="tel"
                      placeholder="+34 600 000 000"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="Mensaje"
                      required
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      className="w-full min-h-32"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Enviar mensaje
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl mb-6 text-gray-900">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Email</div>
                    <a href="mailto:hola@cuidadoemocional.com" className="text-emerald-600 hover:underline">
                      hola@cuidadoemocional.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Teléfono</div>
                    <a href="tel:+34696682277" className="text-emerald-600 hover:underline">
                      +34 696 68 22 77
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Ubicación</div>
                    <p className="text-gray-600">
                      <br />
                      Girona, España
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
