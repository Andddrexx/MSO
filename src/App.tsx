import React, { useState, useEffect } from 'react';
import {
  Clock,
  Star,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  Award,
  Heart,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Utensils,
  Building2,
  PartyPopper,
  Shield,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = ['inicio', 'servicios', 'nosotros', 'contacto'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'GESTIÓN INTEGRAL DE EVENTOS',
      description:
        'Planificación y coordinación completa de eventos y celebraciones.',
      closingText:
        'Nos encargamos de cada detalle, garantizando que tu evento se desarrolle con precisión, elegancia y sin imprevistos.',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg',
      icon: <Calendar className="h-8 w-8" />,
      features: [
        'Coordinación y supervisión en tiempo real',
        'Servicio de personal en sala',
        'Gestión de proveedores',
        'Catering personalizado',
      ],
    },
    {
      title: 'PERSONAL PROFESIONAL PARA EVENTOS',
      description:
        'Disponemos de un equipo altamente cualificado y especializado.',
      closingText:
        'Profesionales que representan la imagen de tu evento con puntualidad, presencia y excelencia.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
      icon: <Users className="h-8 w-8" />,
      features: [
        'Camareros, cocineros y personal de office',
        'Formación interna continua',
        'Disponibilidad 24/7',
        'Uniformes incluidos',
        'Protocolo y atención personalizada',
      ],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/34683182883?text=Hola, me gustaría solicitar información sobre sus servicios de gestión de eventos.',
      '_blank'
    );
  };

  const openEmail = () => {
    window.location.href =
      'mailto:info@mayiksolution.es?subject=Consulta sobre servicios - Mayik Solution';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrollY > 50
            ? 'bg-black/95 backdrop-blur-sm shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Clock className="h-10 w-10 text-amber-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Mayik</span>
                <span className="text-2xl font-light text-amber-400 ml-1">
                  Solution
                </span>
                <div className="text-xs text-amber-400 font-light tracking-wider">
                  GESTIÓN DE EVENTOS
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['inicio', 'servicios', 'nosotros', 'contacto'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`relative text-sm font-medium transition-all duration-300 ${
                      activeSection === section
                        ? 'text-amber-400'
                        : 'text-white hover:text-amber-400'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {activeSection === section && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400"></div>
                    )}
                  </button>
                )
              )}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-amber-400/20">
            <div className="px-4 py-6 space-y-4">
              {['inicio', 'servicios', 'nosotros', 'contacto'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left text-white hover:text-amber-400 transition-colors py-2"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg)',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 opacity-0 animate-fade-in-up animation-delay-300">
            <span className="text-amber-400">Gestión de Eventos</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-0 animate-fade-in-up animation-delay-600 leading-relaxed max-w-4xl mx-auto text-gray-100">
            La puntualidad es solo el punto de partida. En nuestra empresa, entendemos que cada evento es una historia única y nos inspira profundamente conocer la visión que hay detrás de cada idea. Por ello, nos dedicamos a diseñar experiencias memorables que trascienden lo convencional y se convierten en momentos inolvidables.
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-0 animate-fade-in-up animation-delay-900 leading-relaxed max-w-4xl mx-auto text-gray-100">
            Nos posicionamos como el engranaje que articula cada elemento, asegurando que todo funcione con precisión y armonía. Nuestro compromiso es transformar tus expectativas en una realidad tangible, cuidando cada aspecto con rigor, creatividad y profesionalismo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-1500">
            <button
              onClick={() => scrollToSection('servicios')}
              className="bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-500 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Nuestros Servicios</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-400 hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Solicitar Presupuesto</span>
            </button>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Nuestros <span className="text-amber-500">Servicios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Especializados en gestión de eventos y personal profesional para
              catering. La puntualidad y excelencia son nuestros pilares
              fundamentales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-amber-400 text-black p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-amber-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <CheckCircle className="h-4 w-4 text-amber-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 leading-relaxed italic">
                    {service.closingText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bartenders Section - Exclusive Service */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
              Nuestro Servicio Exclusivo: <span className="text-amber-500">Bartenders</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
              Expertise y creatividad para cada ocasión
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl blur opacity-20"></div>
              <img
                src="https://media.istockphoto.com/id/2163756304/es/foto/barman-maduro-preparando-c%C3%B3ctel-en-la-barra-del-bar.jpg?s=612x612&w=0&k=20&c=sr6a6fbzxvYLRWnivYe_f8QDuTw8rtmPORfzakk7cXQ="
                alt="Bartender profesional preparando cocteles"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>

            <div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                En <strong className="text-amber-400">Mayik Solution</strong>, nos enorgullece contar con un equipo de bartenders expertos en coctelería y gestión de barras libres para eventos de todo tipo. Ya sea una <strong className="text-amber-400">boda</strong>, una <strong className="text-amber-400">celebración privada</strong> o un <strong className="text-amber-400">evento corporativo</strong>. Nuestros profesionales se aseguran de que cada cóctel sea una experiencia sensorial única.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl border border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg">
                  <Utensils className="h-8 w-8 text-amber-500 mb-3" />
                  <div className="font-bold text-gray-800 mb-2">Cocteles personalizados</div>
                  <div className="text-sm text-gray-600">
                    Creaciones exclusivas inspiradas en la temática de tu evento.
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg">
                  <Award className="h-8 w-8 text-amber-500 mb-3" />
                  <div className="font-bold text-gray-800 mb-2">Experiencia profesional</div>
                  <div className="text-sm text-gray-600">
                    años de trayectoria en coctelería y eventos premium.
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg">
                  <PartyPopper className="h-8 w-8 text-amber-500 mb-3" />
                  <div className="font-bold text-gray-800 mb-2">Barras libres completas</div>
                  <div className="text-sm text-gray-600">
                    servicio integral con todos los detalles gestionados.
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg">
                  <Heart className="h-8 w-8 text-amber-500 mb-3" />
                  <div className="font-bold text-gray-800 mb-2">Temática personalizada</div>
                  <div className="text-sm text-gray-600">
                    adaptamos el estilo de la barra a tu marca o celebración.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl blur opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
                alt="Profesionalidad y puntualidad"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Tu idea <span className="text-amber-400">nuestra</span> organización
                <br />
                
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                En <strong className="text-amber-400">Mayik Solution</strong>,
                entendemos que cada evento es una ocasión única. Nuestra
                experiencia en la gestión de eventos y en la selección de personal especializado nos
                permite ofrecer soluciones integrales que superan todas las
                expectativas.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                La <strong className="text-amber-400">puntualidad</strong> es
                más que un compromiso: es nuestro sello distintivo, reflejado en el reloj de nuestro 
                logotipo. Sabemos que en el mundo de los eventos, cada minuto
                cuenta y cada detalle marca la diferencia.
              </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Nos emociona conectar con las personas a través de lo que hacemos y valoramos profundamente la confianza que depositas en nosotros. Hacer realidad tu evento ideal no es solo nuestro trabajo: es nuestra <strong className="text-amber-400">pasión</strong>.
              </p>
                <p>
            
          </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors duration-300">
                  <Clock className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                  <div className="font-semibold text-white mb-1">
                    Puntualidad
                  </div>
                  <div className="text-sm text-gray-400">100% garantizada</div>
                </div>
                <div className="text-center p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors duration-300">
                  <Award className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                  <div className="font-semibold text-white mb-1">Calidad</div>
                  <div className="text-sm text-gray-400">
                    Personal cualificado y en constante formación
                  </div>
                </div>
                <div className="text-center p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors duration-300">
                  <Shield className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                  <div className="font-semibold text-white mb-1">Confianza</div>
                  <div className="text-sm text-gray-400">
                    Experiencia comprobada en eventos realizados con éxito
                  </div>
                </div>
                <div className="text-center p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors duration-300">
                  <Heart className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                  <div className="font-semibold text-white mb-1">Pasión</div>
                  <div className="text-sm text-gray-400">Dedicación total en cada detalle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Hablemos de tu <span className="text-amber-500">Evento</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estamos listos para hacer realidad tu evento perfecto, con la
              puntualidad, excelencia y compromiso que distinguen a Mayik
              Solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors duration-300 border-l-4 border-amber-400">
                  <Phone className="h-6 w-6 text-amber-500" />
                  <div>
                    <div className="font-semibold text-black">
                      Teléfono
                    </div>
                    <div className="text-gray-600">Magdalena <span>•</span> 683 182 883</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors duration-300 border-l-4 border-amber-400">
                  <Mail className="h-6 w-6 text-amber-500" />
                  <div>
                    <div className="font-semibold text-black">Email</div>
                    <div className="text-gray-600">info@mayiksolution.es</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors duration-300 border-l-4 border-amber-400">
                  <Clock className="h-6 w-6 text-amber-500" />
                  <div>
                    <div className="font-semibold text-black">
                      Disponibilidad
                    </div>
                    <div className="text-gray-600">24/7 para eventos</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={openEmail}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-black mb-6">
                Solicita tu Presupuesto
              </h3>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const data = Object.fromEntries(formData);
                  const subject = 'Solicitud de Presupuesto - Mayik Solution';
                  const body = `Hola, me gustaría solicitar un presupuesto:

Nombre: ${data.nombre}
Email: ${data.email}
Teléfono: ${data.telefono}
Tipo de Evento: ${data.evento}
Fecha: ${data.fecha}
Número de Invitados: ${data.invitados}
Mensaje: ${data.mensaje}

Saludos cordiales.`;

                  window.location.href = `mailto:info@mayiksolution.es?subject=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(body)}`;
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                  <select
                    name="evento"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Tipo de Evento</option>
                    <option value="boda">Boda</option>
                    <option value="corporativo">Evento Corporativo</option>
                    <option value="celebracion">Celebración Privada</option>
                    <option value="personal">Necesito Personal</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="fecha"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                  <input
                    type="number"
                    name="invitados"
                    placeholder="Número de invitados"
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos tu idea y permítenos encargarnos de cada detalle..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-black py-4 rounded-xl font-semibold hover:from-amber-500 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-10 w-10 text-amber-400" />
                <div>
                  <span className="text-2xl font-bold text-white">Mayik</span>
                  <span className="text-2xl font-light text-amber-400 ml-1">
                    Solution
                  </span>
                  <div className="text-xs text-amber-400 font-light tracking-wider">
                    GESTIÓN DE EVENTOS
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Especializados en gestión integral de eventos y personal
                profesional para catering. La puntualidad es nuestro sello
                distintivo.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-amber-400">
                Contacto
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span>Magdalena · 683 182 883</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-amber-400" />
                  <span>info@mayiksolution.es</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-amber-400" />
                  <button
                    onClick={openWhatsApp}
                    className="hover:text-amber-400 transition-colors"
                  >
                    WhatsApp
                  </button>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-amber-400" />
                  <button
                    onClick={openEmail}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Email
                  </button>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-amber-400" />
                  <span>Disponible 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Mayik Solution. Todos los derechos reservados. |
              Gestión de Eventos y Personal Profesional
            </p>
          </div>
        </div>
      </footer>

      {/* Email Floating Button */}
      <button
        onClick={openEmail}
        className="fixed bottom-6 right-20 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 z-40"
      >
        <Mail className="h-6 w-6" />
      </button>
      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 z-40"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}

export default App;
