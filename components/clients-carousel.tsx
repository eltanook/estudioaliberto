"use client"

import { Building2, Landmark, Shield, Scale, Briefcase, FileText, Award, Building } from "lucide-react"

const clients = [
  { name: "PAMI" },
  { name: "IOMA" },
  { name: "Swiss Medical" },
  { name: "UPCN Sindicato" },
  { name: "Accord Salud" },
  { name: "Italiano" },
  { name: "Consulado Italiano Buenos Aires" },
  { name: "Consulado Italiano Rosario" },
  { name: "Registro Propiedad" },
  { name: "AGIP y ARBA" },
  { name: "ANSES" },
]

interface ClientsCarouselProps {
  showTitle?: boolean
  bgGrey?: boolean
}

export function ClientsCarousel({ showTitle = true, bgGrey = false }: ClientsCarouselProps) {
  const bgColor = bgGrey ? 'bg-[#f5f5f5] dark:bg-[#0d1b2e]' : 'bg-card'
  const gradientFrom = bgGrey ? 'bg-[#f5f5f5] dark:bg-[#0d1b2e]' : 'bg-card'

  return (
    <section className={`py-16 overflow-hidden ${bgColor}`}>
      {showTitle && (
        <div className="hidden md:block container mx-auto px-4 mb-10">
          <p className={`text-center text-sm uppercase tracking-widest font-semibold ${bgGrey ? 'text-[#722f37]' : 'text-muted-foreground'}`}>
            Tenemos experiencia con las siguientes instituciones entre otras
          </p>
        </div>
      )}
      
      {/* Carousel Container */}
      <div className="relative">
        {/* Blur Left */}
        <div className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r ${bgGrey ? 'from-[#f5f5f5] dark:from-[#0d1b2e]' : 'from-card'} to-transparent z-10 pointer-events-none`} />
        
        {/* Blur Right */}
        <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l ${bgGrey ? 'from-[#f5f5f5] dark:from-[#0d1b2e]' : 'from-card'} to-transparent z-10 pointer-events-none`} />
        
        {/* Carousel Track */}
        <div className="flex animate-scroll">
          {/* First set */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className={`flex-shrink-0 flex items-center mx-8 px-8 py-5 border transition-all duration-300 ${
                bgGrey 
                  ? "border-border bg-white text-foreground shadow-sm dark:bg-[#0a1628] dark:border-white/10 dark:text-white" 
                  : "border-white/10 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              <span className="font-serif text-lg font-bold tracking-widest whitespace-nowrap uppercase">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
