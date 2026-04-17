"use client"

import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const teamMembers = [
  {
    name: "Dr. Martin Aliberto",
    role: "Director",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31214-lAp2en6h5QzT09jeAhbki26PJoR1b5.jpg",
  },
  {
    name: "Dra. Laura Gonzalez",
    role: "Derecho de Familia",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/successful-business-partners-discussing-contract-bNg8HlwCxTno3kaamPzmm2pHSFzVEY.jpg",
  },
  {
    name: "Dr. Carlos Mendez",
    role: "Derecho Civil",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/working-project-da8oMZd85qcC2v735baIouzYzdt68W.jpg",
  },
]

function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div 
      ref={ref}
      className={`group relative overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={member.image}
          alt={`Retrato profesional de ${member.name} - ${member.role} en Estudio Jurídico Aliberto`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-[#0a1628]/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center justify-center text-white">
          <h3 className="font-serif text-2xl mb-2">{member.name}</h3>
          <p className="text-white/70 mb-6">{member.role}</p>
          <div className="flex gap-4">
            <a
              href="mailto:estudioaliberto@gmail.com"
              className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-[#722f37] hover:border-[#722f37] transition-colors"
              aria-label={`Enviar email a ${member.name}`}
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5491130087678"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-[#722f37] hover:border-[#722f37] transition-colors"
              aria-label={`Contactar a ${member.name}`}
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      {/* Info below image (visible on mobile) */}
      <div className="p-4 bg-card text-center lg:hidden">
        <h3 className="font-serif text-xl text-foreground">{member.name}</h3>
        <p className="text-muted-foreground text-sm">{member.role}</p>
      </div>
    </div>
  )
}

interface TeamSectionProps {
  showTitle?: boolean
}

export function TeamSection({ showTitle = true }: TeamSectionProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="aliberto" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        {showTitle && (
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[#722f37] font-medium uppercase tracking-widest text-sm">
              Perfil Profesional
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 leading-tight">
              Dr. Martin Aliberto
            </h2>
          </div>
        )}

        {/* Aliberto Content: 6 columns text, 6 columns image */}
        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-12 gap-12 items-center transition-all duration-1000 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Text Content (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground">Solidez Jurídica con un Enfoque Humano</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                El Dr. Martin Aliberto fundó este estudio con la convicción de que la abogacía debe ser transparente, ágil y, sobre todo, empática. Con más de 15 años de trayectoria, ha liderado con éxito cientos de casos de amparos de salud, garantizando que el acceso a la medicina prepaga y obras sociales sea una realidad tangible para sus clientes.
              </p>
              <p>
                Su compromiso es total: desde la primera consulta hasta la resolución final, usted contará con el respaldo de un profesional que entiende la urgencia y complejidad de su situación legal.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              <li className="flex items-center gap-3 text-foreground font-medium">
                <span className="w-2 h-2 bg-[#722f37]" />
                Director y Fundador
              </li>
              <li className="flex items-center gap-3 text-foreground font-medium">
                <span className="w-2 h-2 bg-[#722f37]" />
                Abogado (UBA)
              </li>
              <li className="flex items-center gap-3 text-foreground font-medium">
                <span className="w-2 h-2 bg-[#722f37]" />
                Líder en Amparos de Salud
              </li>
              <li className="flex items-center gap-3 text-foreground font-medium">
                <span className="w-2 h-2 bg-[#722f37]" />
                Especialista Civil
              </li>
            </ul>
            <div className="pt-4">
              <a 
                href="/contacto"
                className="inline-block bg-[#722f37] text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:translate-y-[-2px] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Conocer más / Contactar
              </a>
            </div>
          </div>

          {/* Image Content (6 cols) */}
          <div className="lg:col-span-6 relative group overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-border shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31214-lAp2en6h5QzT09jeAhbki26PJoR1b5.jpg"
                alt="Dr. Martin Aliberto - Director Fundador de Estudio Jurídico Aliberto"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-[#0a1628]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
                <h3 className="font-serif text-3xl mb-2">Dr. Martin Aliberto</h3>
                <p className="text-white/70 mb-8 font-medium tracking-widest uppercase text-sm">Abogado - Director</p>
                <div className="flex gap-6">
                  <a
                    href="mailto:estudioaliberto@gmail.com"
                    className="w-16 h-16 border border-white/20 flex items-center justify-center hover:bg-[#722f37] hover:border-[#722f37] transition-all duration-300 rounded-full"
                  >
                    <Mail className="w-7 h-7" />
                  </a>
                  <a
                    href="https://wa.me/5491130087678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 border border-white/20 flex items-center justify-center hover:bg-[#722f37] hover:border-[#722f37] transition-all duration-300 rounded-full"
                  >
                    <Phone className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Card (Col-12) - Informative Style */}
        <div className="mt-20">
          <div className="bg-secondary/30 border-l-4 border-[#722f37] p-6 md:p-10 shadow-sm">
            <p className="text-xl text-foreground/80 leading-relaxed font-semibold text-left">
              El estudio trabaja de forma interdisciplinaria y externa con otros profesionales de excelencia en las áreas del derecho laboral, jubilaciones y gestoría integral para brindar una cobertura jurídica total a cada uno de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
