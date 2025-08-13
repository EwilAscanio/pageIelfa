"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Eye, Share2, Users, Clock } from "lucide-react"
import { streamingContent } from "@/lib/data"

export default function Streaming() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('streaming')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const formatViews = (views) => {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K'
    }
    return views.toString()
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <section id="streaming" className="py-20 bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Streaming <span className="text-violet-600">en Vivo</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Mantente conectado con nuestra comunidad a través de nuestros servicios en vivo y contenido grabado disponible las 24 horas.
          </p>
        </div>

        {/* Banner de transmisión en vivo */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Card className="bg-gradient-to-r from-red-600 to-red-700 border-0 overflow-hidden shadow-2xl">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="flex-1 mb-6 lg:mb-0">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse mr-3"></div>
                    <span className="text-white font-bold text-lg uppercase tracking-wide">EN VIVO AHORA</span>
                    <div className="ml-4 flex items-center text-white/90">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">245 espectadores</span>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Servicio Dominical</h3>
                  <p className="text-red-100 text-lg mb-4">Únete ahora a nuestro servicio dominical en directo</p>
                  <div className="flex items-center text-red-100">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Comenzó a las 10:30 AM</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Ver Ahora
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-4 text-lg transition-all duration-300"
                  >
                    <Share2 className="w-5 h-5 mr-2" />
                    Compartir
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid de contenido de streaming */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {streamingContent.slice(1, 4).map((content, index) => (
            <Card 
              key={content.id} 
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white dark:bg-gray-800 border-0 dark:border-gray-700 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={content.thumbnail}
                  alt={content.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay de botón de reproducción */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={content.videoUrl} target="_blank" rel="noopener noreferrer" passHref>
                    <Button 
                      size="lg"
                      className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-gray-900 rounded-full p-4 transition-all duration-300"
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                  </Link>
                </div>

                {/* Badge de duración */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                  {content.duration}
                </div>

                {/* Badge de categoría */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-white text-sm font-medium bg-violet-600">
                    {content.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-violet-600 transition-colors duration-300 line-clamp-2">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 dark:text-gray-400">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(content.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{formatViews(content.views)} vistas</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={content.videoUrl} target="_blank" rel="noopener noreferrer" passHref className="flex-1">
                    <Button 
                      as="a"
                      className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white transition-all duration-300"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Ver Video
                    </Button>
                  </Link>
                  <Button 
                    size="icon"
                    variant="outline"
                    className="border-violet-200 text-violet-600 hover:bg-violet-50 transition-all duration-300"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link href="/videos" passHref>
            <Button 
              as="a"
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105 mr-4"
            >
              Ver Todos los Videos
            </Button>
          </Link>
          <Link 
            href="https://www.youtube.com/@iglesiaielfa">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Suscríbete al Canal
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}