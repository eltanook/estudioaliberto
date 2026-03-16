"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const slides = [
  {
    title: "ESTUDIO JURÍDICO",
    subtitle: "ALIBERTO",
    description: "Defendemos tus derechos con experiencia y compromiso. Asesoría Legal en Derecho Civil, Derecho de Familia y Ciudadanía Italiana.",
  },
  {
    title: "EXCELENCIA Y",
    subtitle: "COMPROMISO",
    description: "Brindamos soluciones legales efectivas y personalizadas para cada uno de nuestros clientes en CABA y Provincia.",
  },
  {
    title: "TRAMITAMOS TU",
    subtitle: "CIUDADANÍA",
    description: "Especialistas en Ciudadanía Italiana y búsqueda de partidas. Tu futuro en Europa comienza con nuestro asesoramiento profesional.",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Fixed Attachment */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertical-low-angle-shot-black-building-with-mirror-windows-clear-sky-9NGxSkd4jGB3Tvo6CVEmePFtytY1xt.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#0a1628]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="relative h-[220px] md:h-[280px] lg:h-[350px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide 
                    ? "opacity-100" 
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight tracking-tight">
                  {slide.title}
                  <br />
                  <span className="text-[#722f37]">{slide.subtitle}</span>
                </h1>
                <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-2xl">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce cursor-pointer">
        <Link href="#nosotros" className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Saber Más</span>
          <ChevronDown className="w-6 h-6" />
        </Link>
      </div>
    </section>
  )
}
