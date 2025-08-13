"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    url: "https://scontent.fvln2-1.fna.fbcdn.net/v/t51.82787-15/528581234_18393498349141952_3831410406382031611_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zWLrGysVLDsQ7kNvwFB9DeB&_nc_oc=AdmjT0SFiZyGNLnB_YPW7Mvn-WEFeN8U0mIFpn6FPrSWl4vvIeNYxOZx7dTrD4SeH6s&_nc_zt=23&_nc_ht=scontent.fvln2-1.fna&_nc_gid=kpl7C_Of_OZb6LOLnw0zRg&oh=00_AfVVZCt2bh_q-2qbHIEsoItBNchkzeLgUksAhhbQE7YfvQ&oe=68A2C166",
    title: "Servicio Dominical",
    description: "Únete a nosotros cada domingo para adoración y comunión"
  },
  {
    url: "https://scontent.fvln2-1.fna.fbcdn.net/v/t51.82787-15/520715093_18391401502141952_2944456505281295862_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dDrfoEIbOc4Q7kNvwEKWYJd&_nc_oc=AdlUWE30q4a8OId0VshJ7jvpGheQIHBkuiOgs97IKZ2U5mR5vc1ZYIXe2toijcXU-M4&_nc_zt=23&_nc_ht=scontent.fvln2-1.fna&_nc_gid=wBZfgnjwOTcwx2RP9rcJJQ&oh=00_AfXV1pp0U3IxeDY0MDAipIe7la92hTIUPMcPe3yklSvnrw&oe=68A29957",
    title: "Comunidad Unida",
    description: "Una familia en Cristo que se apoya mutuamente"
  },
  {
    url: "https://scontent.fvln2-1.fna.fbcdn.net/v/t51.82787-15/531437469_18394329403141952_653285539818034938_n.jpg?stp=dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PJ00w9PiTVIQ7kNvwGar-dA&_nc_oc=AdnsZ3Xkt6YG_Gld3kF0hXptaSn2AgYXH2gaTIpMoxswTMcn3VL8c7JjJxYcDjghdqg&_nc_zt=23&se=-1&_nc_ht=scontent.fvln2-1.fna&_nc_gid=S-vPJX7Z2rUZYxuS5bZ3ow&oh=00_AfXVpIePmydAiXfpmY1INYLtbOSlJtt14v0OqclYmeCRGA&oe=68A2B0CE",
    title: "Eventos Especiales",
    description: "Celebraciones y actividades para toda la familia"
  },
  {
    url: "https://scontent.fvln2-1.fna.fbcdn.net/v/t51.82787-15/527412836_18393498457141952_3106342087258298878_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=D-qD3rcho9cQ7kNvwGiQXFh&_nc_oc=AdmM69gh0-CKwtLI_KqbO_blJwwaVXJC7WBi_CfxjhI3dXSoetSToVAitGIFQ4k8PrI&_nc_zt=23&_nc_ht=scontent.fvln2-1.fna&_nc_gid=1WU9WD6A_ZtqoRAx7yBw3g&oh=00_AfWw3RucsG2I_b0unZDMvZnKwpIVoRzsALyJuNpTvgR4gg&oe=68A2BEC5",
    title: "Grupos de Estudio",
    description: "Crecimiento espiritual a través del estudio bíblico"
  },
  {
    url: "https://scontent.fvln2-1.fna.fbcdn.net/v/t39.30808-6/470241375_18363915820141952_7447199091261979230_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TemJmAh-p6YQ7kNvwHVxR2m&_nc_oc=Admf-OtfNGcCXdkO_aT76PmosCa9aoz_gDYeI5jvTIkDY57NI29IJ-5lGqvVjupGZ4w&_nc_zt=23&_nc_ht=scontent.fvln2-1.fna&_nc_gid=WMSkzUXSrLYv52iF9SjfJg&oh=00_AfVnCI2zBUOxOSaZDj640AJQjPZT2XQ30ecn6nNHgeXMZQ&oe=68A2B8B8",
    title: "Ministerio Juvenil",
    description: "Formando líderes para el futuro de la iglesia"
  }
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

    const element = document.getElementById('galeria')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nuestra <span className="text-violet-600">Comunidad</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre la vida vibrante de nuestra iglesia a través de estas imágenes que capturan momentos especiales de nuestra comunidad de fe.
          </p>
        </div>

        <div className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Carrusel principal */}
          <div className="relative h-96 md:h-[600px]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-110'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{image.title}</h3>
                  <p className="text-lg md:text-xl text-gray-200 max-w-2xl">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white hover:text-violet-900 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white hover:text-violet-900 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Indicador de puntos */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tira de miniaturas */}
        <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-violet-500 scale-105'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-24 md:h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-sm font-medium truncate">{image.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}