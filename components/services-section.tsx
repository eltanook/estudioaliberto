"use client"

import { Scale, FileSearch, Flag } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Scale,
    title: "Servicios Jurídicos",
    description: "Asesoría legal integral en sucesiones, divorcios, contratos y más, con un enfoque humano y profesional.",
    items: [
      "Amparos de Salud",
      "Sucesiones",
      "Divorcios",
      "Contratos",
    ],
  },
  {
    icon: FileSearch,
    title: "Gestoría",
    description:
      "Gestiones ágiles ante el Registro Automotor, Propiedad Inmueble, Registro Civil, RENAPER y AGIP.",
    items: [
      "Informes de Dominio e índice de Titularidad",
      "Certificados de deuda AGIP y DDJJ TGB (ARBA)",
      "Partidas de Nacimiento, Matrimonio y Defunción",
      "Diligenciamiento de Oficios y Cédulas (CABA y GBA)",
    ],
  },
  {
    icon: Flag,
    title: "Ciudadanía Italiana",
    description: "Te acompañamos en todo el proceso de obtención de tu ciudadanía, desde la búsqueda de partidas hasta el armado de carpeta.",
    items: [
      "Asesoría General (Reconstrucción e Hijo Directo)",
      "Revisión y Armado de Carpetas",
      "Solicitud de partidas y copias de sentencias",
      "Certificado de Cosa Juzgada",
      "Búsqueda de datos de antepasados italianos",
    ],
  },
]

function ServiceCard({ service, index, isHome, bgGrey }: { service: typeof services[0]; index: number; isHome: boolean; bgGrey: boolean }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const Icon = service.icon

  return (
    <div
      ref={ref}
      className={`border p-8 transition-all duration-700 group ${
        isHome || !bgGrey 
          ? "bg-white/10 border-white/20 hover:bg-white/20 text-white" 
          : "bg-white dark:bg-[#0a1628] border-border hover:border-[#722f37] text-foreground"
      } ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-16 h-16 bg-[#722f37] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
      {service.description && (
        <p className={`text-sm mb-4 leading-relaxed ${isHome || !bgGrey ? 'text-white/80' : 'text-muted-foreground'}`}>
          {service.description}
        </p>
      )}
      <ul className="space-y-3">
        {service.items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 text-sm ${isHome || !bgGrey ? 'text-white/90' : 'text-foreground/80'}`}
          >
            <span className="w-1.5 h-1.5 bg-[#722f37] mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

interface ServicesSectionProps {
  showTitle?: boolean
  isHome?: boolean
  bgGrey?: boolean
}

export function ServicesSection({ showTitle = true, isHome = false, bgGrey = false }: ServicesSectionProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section 
      id="servicios" 
      className={`py-24 relative ${isHome ? 'bg-cover bg-center bg-fixed' : bgGrey ? 'bg-[#f5f5f5] dark:bg-[#0d1b2e] text-foreground' : 'bg-[#0a1628] text-white'}`}
      style={isHome ? { 
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertical-low-angle-shot-black-building-with-mirror-windows-clear-sky-9NGxSkd4jGB3Tvo6CVEmePFtytY1xt.jpg')`,
      } : {}}
    >
      {isHome && <div className="absolute inset-0 bg-[#0a1628]/85" />}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        {showTitle && (
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[#722f37] font-semibold uppercase tracking-widest text-sm drop-shadow-sm">
              Áreas de Práctica
            </span>
            <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl mt-4 leading-tight drop-shadow-md ${isHome ? 'text-white' : !bgGrey ? 'text-white' : 'text-foreground'}`}>
              Nuestros Servicios
            </h2>
            <p className={`mt-4 max-w-2xl mx-auto font-medium ${isHome ? 'text-white/90' : !isHome && !bgGrey ? 'text-white' : bgGrey ? 'text-black dark:text-white/90' : 'text-foreground/90'}`}>
              Brindamos asesoramiento legal integral con un enfoque personalizado para cada caso
            </p>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} isHome={isHome} bgGrey={bgGrey} />
          ))}
        </div>
      </div>
    </section>
  )
}
