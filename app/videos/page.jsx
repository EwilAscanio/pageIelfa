"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Eye, Share2 } from "lucide-react"
import { streamingContent } from "@/lib/data"
import Navbar from "@/components/Navbar"

// Helper functions can be moved to utils.ts if needed
const formatViews = (views) => {
  if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'K'
  }
  return views.toString()
}

const formatDate = (dateString) => {
  // Solución: crear la fecha en UTC para evitar desfase por zona horaria
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  });
}

export default function VideosPage() {
  const allVideos = streamingContent.filter(content => !content.isLive);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Videoteca
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Explora nuestra colección de sermones, estudios bíblicos y eventos especiales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allVideos.map((content) => (
              <Card 
                key={content.id} 
                className="group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white dark:bg-gray-800 border-0 dark:border-gray-700 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={content.thumbnail}
                    alt={content.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                    {content.duration}
                  </div>
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
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/#streaming" passHref>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              ← Regresar a Streaming
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
