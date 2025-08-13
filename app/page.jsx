"use client"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Streaming from "@/components/Streaming"
import ImageCarousel from "@/components/ImageCarousel"
import Events from "@/components/Events"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      <Navbar />
      <Hero />
      <Streaming />
      <ImageCarousel />
      <Events />
      <Footer />
    </main>
  )
}