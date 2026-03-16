"use client"

import { Building2, FileText, Car, Users, CreditCard } from "lucide-react"

const institutions = [
  { name: "AGIP", icon: Building2 },
  { name: "ARBA", icon: FileText },
  { name: "Registro Automotor", icon: Car },
  { name: "Registro Civil", icon: Users },
  { name: "RENAPER", icon: CreditCard },
]

interface TrustBannerProps {
  showTitle?: boolean
}

export function TrustBanner({ showTitle = true }: TrustBannerProps) {
  return (
    <section className="py-16 bg-secondary dark:bg-[#0a1628] transition-colors">
      <div className="container mx-auto px-4">
        {showTitle && (
          <p className="text-center text-muted-foreground dark:text-white/70 uppercase tracking-widest text-sm mb-12 font-medium">
            Gestionamos trámites en las principales instituciones
          </p>
        )}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-10 gap-x-8 max-w-5xl mx-auto">
          {institutions.map((institution) => {
            const Icon = institution.icon
            return (
              <div
                key={institution.name}
                className="flex flex-col items-center gap-2 transition-all group"
              >
                <Icon className="w-10 h-10 text-[#0a1628] dark:text-white/80 group-hover:text-[#722f37] transition-colors" strokeWidth={1.5} />
                <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground dark:text-white/60 group-hover:text-[#722f37] dark:group-hover:text-white transition-colors">
                  {institution.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
