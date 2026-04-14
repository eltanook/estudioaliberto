"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const slides = [
  {
    title: "AMPAROS DE",
    subtitle: "SALUD",
    description: "Protegemos tu derecho a la salud. Especialistas en amparos contra obras sociales y prepagas por falta de cobertura en tratamientos y medicación.",
  },
  {
    title: "ESTUDIO JURÍDICO",
    subtitle: "ALIBERTO",
    description: "Defendemos tus derechos con experiencia y compromiso. Asesoría Legal integral en Derecho Civil and Derecho de Familia.",
  },
  {
    title: "EXCELENCIA Y",
    subtitle: "COMPROMISO",
    description: "Brindamos soluciones legales efectivas y personalizadas para cada uno de nuestros clientes en CABA y Provincia.",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="inicio" className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image - bg-scroll para compatibilidad iOS/Safari */}
      <div 
        className="absolute inset-0 z-0 bg-scroll bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertical-low-angle-shot-black-building-with-mirror-windows-clear-sky-9NGxSkd4jGB3Tvo6CVEmePFtytY1xt.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#0a1628]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="relative w-full h-[280px] md:h-[320px] lg:h-[400px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center ${
                  index === currentSlide 
                    ? "opacity-100" 
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight tracking-tight">
                  {slide.title}
                  <br />
                  <span className="text-[#722f37]">{slide.subtitle}</span>
                </h1>
                <p className="text-white/90 text-base md:text-lg lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Link
              href="/contacto"
              className="bg-[#722f37] text-white px-8 py-4 font-medium text-sm uppercase tracking-wider hover:bg-[#722f37]/90 transition-colors text-center"
            >
              Solicitar Consulta
            </Link>
            <Link
              href="/servicios"
              className="border-2 border-white text-white px-8 py-4 font-medium text-sm uppercase tracking-wider hover:bg-white hover:text-[#0a1628] transition-colors text-center"
            >
              Nuestros Servicios
            </Link>
          </div>
        </div>
      </div>

      {/* Manual Controls - Square and Red in Corners */}
      <div className="absolute bottom-0 left-0 z-20">
        <button 
          onClick={prevSlide}
          className="w-16 h-16 bg-[#722f37] text-white flex items-center justify-center hover:bg-[#722f37]/80 transition-colors"
          aria-label="Anterior slide"
        >
          <span className="text-2xl">←</span>
        </button>
      </div>
      <div className="absolute bottom-0 right-0 z-20">
        <button 
          onClick={nextSlide}
          className="w-16 h-16 bg-[#722f37] text-white flex items-center justify-center hover:bg-[#722f37]/80 transition-colors"
          aria-label="Siguiente slide"
        >
          <span className="text-2xl">→</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-bounce cursor-pointer">
        <Link href="#nosotros" className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Saber Más</span>
          <ChevronDown className="w-6 h-6" />
        </Link>
      </div>
    </section>
  )
}
