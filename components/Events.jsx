"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react"
import { events } from "@/lib/data"

const categoryColors = {
  "Culto": "bg-violet-100 text-violet-800",
  "Estudio": "bg-blue-100 text-blue-800",
  "Juventud": "bg-green-100 text-green-800",
  "Conferencia": "bg-purple-100 text-purple-800",
  "Comunidad": "bg-orange-100 text-orange-800",
  "Retiro": "bg-teal-100 text-teal-800"
}

export default function Events() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const categories = ["Todos", ...new Set(events.map(event => event.category))]

  const filteredEvents = selectedCategory === "Todos" 
    ? events 
    : events.filter(event => event.category === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('eventos')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="eventos" className="py-20 bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Próximos <span className="text-violet-600">Eventos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            No te pierdas nuestras actividades especiales. Cada evento es una oportunidad para crecer en comunidad y fe.
          </p>

          {/* Filtros de categoría */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-violet-600 text-white hover:bg-violet-700'
                    : 'border-violet-200 text-violet-600 hover:bg-violet-50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filteredEvents.map((event, index) => (
            <Card 
              key={event.id} 
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[event.category]}`}>
                    {event.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {event.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-3 text-violet-500" />
                  <span className="text-sm capitalize">{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-3 text-violet-500" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-violet-500" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-3 text-violet-500" />
                  <span className="text-sm">{event.attendees} asistentes esperados</span>
                </div>
                
                <Link href={event.link} passHref>
                  <Button 
                    as="a"
                    className="w-full mt-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 group-hover:shadow-lg"
                  >
                    Más Información
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Ver Todos los Eventos
          </Button>
        </div>
      </div>
    </section>
  )
}