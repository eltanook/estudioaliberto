"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCounter } from "@/hooks/use-counter"

function CounterStat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.5 })
  const count = useCounter({ end: value, enabled: isVisible, duration: 2500 })

  return (
    <div ref={ref} className="text-center">
      <span className="block font-serif text-4xl md:text-5xl text-[#722f37]">
        {suffix}{count}
      </span>
      <span className="text-sm text-muted-foreground uppercase tracking-wider">{label}</span>
    </div>
  )
}

interface AboutSectionProps {
  showTitle?: boolean
  bgGrey?: boolean
}

export function AboutSection({ showTitle = true, bgGrey = false }: AboutSectionProps) {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section 
      id="nosotros" 
      className={`py-24 overflow-hidden ${bgGrey ? 'bg-[#f5f5f5] dark:bg-[#0d1b2e]' : 'bg-background'}`}
    >
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`grid lg:grid-cols-12 gap-12 items-center transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Text Content */}
          <div className="lg:col-span-7">
            {showTitle && (
              <>
                <span className="text-[#722f37] font-medium uppercase tracking-widest text-sm">
                  Sobre Nosotros
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6 leading-tight">
                  Compromiso y Excelencia Legal
                </h2>
              </>
            )}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className={`text-lg leading-relaxed mb-6 font-medium ${bgGrey ? 'text-foreground/90' : 'text-muted-foreground'}`}>
                Trabajamos en <span className="font-bold text-[#722f37]">C.A.B.A. y Provincia de Buenos Aires</span>. Brindamos atención de forma virtual todos los 
                días, y de forma presencial únicamente con turno previo.
              </p>
              <p>
                Realizamos asesoría legal en Derecho Civil, Derecho de Familia y Ciudadanía Italiana. Nuestro equipo de 
                profesionales está comprometido con brindar soluciones efectivas y personalizadas para cada cliente.
              </p>
              <p className={`text-lg leading-relaxed font-medium ${bgGrey ? 'text-foreground/90' : 'text-muted-foreground'}`}>
                Especializados en accidentes de tránsito, divorcios, alimentos y régimen de comunicación, rectificación de 
                partidas, contratos de alquiler y de servicios, sucesiones y ejecuciones.
              </p>
            </div>

            {/* Stats with Counter */}
            <div className="mt-10 flex items-center gap-8">
              <CounterStat value={15} label="Años de Experiencia" suffix="+" />
              <div className="w-px h-16 bg-border" />
              <CounterStat value={1000} label="Casos Resueltos" suffix="+" />
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="bg-[#722f37] text-white px-6 py-3 font-medium text-sm uppercase tracking-wider hover:bg-[#722f37]/90 transition-colors text-center"
              >
                Contactar Ahora
              </Link>
              <Link
                href="/servicios"
                className="border-2 border-[#0a1628] text-[#0a1628] dark:border-white dark:text-white px-6 py-3 font-medium text-sm uppercase tracking-wider hover:bg-[#0a1628] hover:text-white dark:hover:bg-white dark:hover:text-[#0a1628] transition-colors text-center"
              >
                Ver Servicios
              </Link>
            </div>
          </div>

          {/* Image with Hover Overlay */}
          <div className="lg:col-span-5 relative min-h-[500px] group overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/working-project-da8oMZd85qcC2v735baIouzYzdt68W.jpg"
              alt="Equipo profesional trabajando"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay with Social Links */}
            <div className="absolute inset-0 bg-[#0a1628]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <p className="text-white font-serif text-2xl mb-6">Síguenos</p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/estudioaliberto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 border-2 border-white flex items-center justify-center text-white hover:bg-[#722f37] hover:border-[#722f37] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/estudioaliberto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 border-2 border-white flex items-center justify-center text-white hover:bg-[#722f37] hover:border-[#722f37] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
