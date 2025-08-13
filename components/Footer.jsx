"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Información de la iglesia */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-300 to-purple-200 bg-clip-text text-transparent">
                IELFA
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Una comunidad de fe comprometida con el amor, la esperanza y el servicio a Dios y al prójimo.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ielfa.ve/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="border border-violet-400 text-violet-300 hover:bg-violet-600 hover:text-white transition-all duration-300 rounded-lg p-2 inline-flex items-center">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ielfa.ve" target="_blank" rel="noopener noreferrer" className="border border-violet-400 text-violet-300 hover:bg-violet-600 hover:text-white transition-all duration-300 rounded-lg p-2 inline-flex items-center">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@ielfa" target="_blank" rel="noopener noreferrer" className="border border-violet-400 text-violet-300 hover:bg-violet-600 hover:text-white transition-all duration-300 rounded-lg p-2 inline-flex items-center">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-violet-300">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Parque Residencial Flor Amarillo</p>
                  <p className="text-gray-300">Valencia Edo Carabobo</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-violet-400" />
                <p className="text-gray-300">+1 (414) 594-2817</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-violet-400" />
                <p className="text-gray-300">info@ielfa.com</p>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-violet-300">Enlaces Rápidos</h4>
            <nav className="space-y-3">
              <a href="#inicio" className="block text-gray-300 hover:text-violet-300 transition-colors duration-300">Inicio</a>
              <a href="#streaming" className="block text-gray-300 hover:text-violet-300 transition-colors duration-300">Streaming</a>
              <a href="#galeria" className="block text-gray-300 hover:text-violet-300 transition-colors duration-300">Galería</a>
              <a href="#eventos" className="block text-gray-300 hover:text-violet-300 transition-colors duration-300">Eventos</a>
              <a href="#contacto" className="block text-gray-300 hover:text-violet-300 transition-colors duration-300">Contacto</a>
            </nav>
          </div>

          {/* Horarios de servicio */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-violet-300">Horarios de Servicio</h4>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Domingo</h5>
                <p className="text-gray-300 text-sm">Escuela Dominical: 9:00 AM</p>
                <p className="text-gray-300 text-sm">Servicio Principal: 10:30 AM</p>
                
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Martes</h5>
                <p className="text-gray-300 text-sm">Tiempo de Oracion: 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de newsletter */}
        <div className="mt-16 pt-8 border-t border-violet-800">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-violet-300 mb-4">Mantente Conectado</h4>
            <p className="text-gray-300 mb-6">Suscríbete a nuestro boletín para recibir las últimas noticias y eventos</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="flex-1 px-4 py-3 bg-white/10 border border-violet-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-8 py-3 font-semibold transition-all duration-300">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-8 border-t border-violet-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Iglesia Evangélica La Fe Abundante (IELFA). Todos los derechos reservados.
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" />
            <span>para la comunidad</span>
          </div>
        </div>
      </div>
    </footer>
  )
}