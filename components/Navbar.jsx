"use client"

import { Button } from "@/components/ui/button"
import { LogIn, Menu, X, Church, Sun, Moon } from "lucide-react"
import { useState } from "react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-violet-100 dark:bg-gray-900/95 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-violet-600 to-purple-600 p-2 rounded-lg">
              <Church className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                IELFA
              </h1>
              <p className="text-xs text-gray-600 -mt-1 dark:text-gray-400">Iglesia Evangélica La Fe Abundante</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-violet-600 font-medium transition-colors duration-300 dark:text-gray-300 dark:hover:text-violet-400">
              Inicio
            </a>
            <a href="#streaming" className="text-gray-700 hover:text-violet-600 font-medium transition-colors duration-300 dark:text-gray-300 dark:hover:text-violet-400">
              Streaming
            </a>
            <a href="#galeria" className="text-gray-700 hover:text-violet-600 font-medium transition-colors duration-300 dark:text-gray-300 dark:hover:text-violet-400">
              Galería
            </a>
            <a href="#eventos" className="text-gray-700 hover:text-violet-600 font-medium transition-colors duration-300 dark:text-gray-300 dark:hover:text-violet-400">
              Eventos
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-violet-600 font-medium transition-colors duration-300 dark:text-gray-300 dark:hover:text-violet-400">
              Contacto
            </a>
          </div>

          {/* Theme Toggle and Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
            >
              {theme === "dark" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </Button>
            <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25">
              <LogIn className="w-4 h-4 mr-2" />
              Iniciar Sesión
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
            >
              {theme === "dark" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-violet-100">
            <div className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-gray-700 hover:text-violet-600 font-medium transition-colors duration-300 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#streaming" 
                className="text-gray-700 hover:text-violet-600 font-medium transition-colors duration-300 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Streaming
              </a>
              <a 
                href="#galeria" 
                className="text-gray-700 hover:text-violet-600 font-medium transition-colors duration-300 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Galería
              </a>
              <a 
                href="#eventos" 
                className="text-gray-700 hover:text-violet-600 font-medium transition-colors duration-300 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Eventos
              </a>
              <a 
                href="#contacto" 
                className="text-gray-700 hover:text-violet-600 font-medium transition-colors duration-300 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="px-4 pt-2">
                <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-2 rounded-full transition-all duration-300">
                  <LogIn className="w-4 h-4 mr-2" />
                  Iniciar Sesión
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}