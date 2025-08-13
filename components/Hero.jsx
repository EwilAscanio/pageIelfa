"use client"

import { Button } from "@/components/ui/button"
import { Heart, Users, Calendar } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Fondo con overlay de gradiente y capa oscura extra */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full absolute inset-0"
          style={{
            backgroundImage: "url('https://scontent.fvln2-1.fna.fbcdn.net/v/t39.30808-6/472780500_980395254142189_256468598079661173_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=wSxM7yAWYSoQ7kNvwHiBsYC&_nc_oc=AdmmKW7kgy-uL1o6Xnra-sXH26_h0_iL-6n7f4pPTVJWF_hOdGJXC5kQT5vTlkyqCFA&_nc_zt=23&_nc_ht=scontent.fvln2-1.fna&_nc_gid=XIGa6iBNcaBzXGdiQrqiww&oh=00_AfV-BvZjdoAK0dOEMkfJDkHLo1bzM0ODPKl-Dsx1JJVglQ&oe=68A29039')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/60 via-purple-900/50 to-indigo-900/60 backdrop-blur-sm" />
      </div>
      
      {/* Partículas animadas */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(60,0,120,0.7)]">
            Bienvenidos a
            <span className="block bg-gradient-to-r from-violet-300 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(60,0,120,0.7)]">
              IELFA
            </span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xl md:text-2xl text-violet-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Una comunidad de fe, esperanza y amor. Únete a nosotros en nuestro camino espiritual y encuentra tu lugar en nuestra familia.
          </p>
        </div>

        {/* Botones de acción */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105">
            <Heart className="w-5 h-5 mr-2" />
            Únete a Nosotros
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white/50 text-violet-900 hover:bg-white hover:text-violet-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
            <Calendar className="w-5 h-5 mr-2" />
            Ver Eventos
          </Button>
        </div>

        {/* Estadísticas */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-violet-200">Miembros Activos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">35</div>
            <div className="text-violet-200">Años de Servicio</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-violet-200">Eventos Anuales</div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}