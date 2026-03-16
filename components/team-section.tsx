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
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
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
              href="https://wa.me/5491131458264"
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

  return (
    <section id="equipo" className="py-24 bg-background">
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
              Profesionales
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 leading-tight">
              Nuestro Equipo
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Contamos con un equipo de profesionales altamente capacitados y comprometidos
            </p>
          </div>
        )}

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
