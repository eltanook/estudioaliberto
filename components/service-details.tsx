"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ShieldCheck, Users, FileText, Gavel } from "lucide-react"

const serviceDetails = [
  {
    id: "amparos",
    title: "Amparos de Salud",
    icon: ShieldCheck,
    description: "Nuestra especialidad principal. Brindamos una respuesta legal inmediata ante el incumplimiento de Obras Sociales y Prepagas.",
    details: [
      "Cobertura total de medicación y tratamientos oncológicos o crónicos.",
      "Asistencia en discapacidad (Ley 24.901) y acompañamiento terapéutico.",
      "Reclamos por prótesis, cirugías y fertilización asistida.",
      "Medidas cautelares para asegurar la atención mientras dura el proceso."
    ]
  },
  {
    id: "sucesiones",
    title: "Sucesiones y Herencias",
    icon: Users,
    description: "Tramitación ágil y profesional de sucesiones ab-intestato o testamentarias en CABA y Provincia de Buenos Aires.",
    details: [
      "Inscripción de bienes inmuebles y muebles registrables.",
      "Acuerdos particionarios entre herederos para una división equitativa.",
      "Búsqueda de herederos y declaratoria de herederos.",
      "Sucesiones urgentes y procesos abreviados."
    ]
  },
  {
    id: "divorcios",
    title: "Divorcios y Familia",
    icon: Gavel,
    description: "Asesoramiento integral en derecho de familia, priorizando la resolución de conflictos de forma armónica.",
    details: [
      "Divorcios exprés (unilaterales o de común acuerdo).",
      "Convenios reguladores de alimentos, comunicación y cuidado personal.",
      "Liquidación de la sociedad conyugal y compensación económica.",
      "Atención personalizada con estricta confidencialidad."
    ]
  },
  {
    id: "contratos",
    title: "Contratos y Convenios",
    icon: FileText,
    description: "Redacción y revisión de instrumentos legales para asegurar tus operaciones civiles y comerciales.",
    details: [
      "Contratos de alquiler (vivienda y comercial) adaptados a la normativa vigente.",
      "Convenios de honorarios y acuerdos de servicios.",
      "Cartas documento, intimaciones y transacciones extrajudiciales.",
      "Auditoría legal de documentos antes de la firma."
    ]
  }
]

export function ServiceDetails() {
  return (
    <section className="py-16 md:py-24 bg-[#fcfcfc] dark:bg-[#0a1628]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-4xl text-foreground mb-4">
            Información Detallada de Servicios
          </h2>
          <div className="w-24 h-1 bg-[#722f37] mx-auto" />
        </div>

        <div className="grid gap-12 lg:gap-16">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon
            return (
              <ServiceDetailItem 
                key={service.id} 
                service={service} 
                Icon={Icon} 
                isEven={index % 2 === 0} 
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ServiceDetailItem({ service, Icon, isEven }: { service: typeof serviceDetails[0]; Icon: any; isEven: boolean }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div 
      ref={ref}
      className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${!isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className="lg:w-1/2 space-y-6">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 bg-[#722f37] flex shrink-0 items-center justify-center text-white">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl md:text-3xl text-foreground">{service.title}</h3>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {service.description}
        </p>
        <ul className="grid sm:grid-cols-2 gap-4 mt-6">
          {service.details.map((detail, idx) => (
            <li key={idx} className="flex gap-3 text-foreground/80 text-sm italic">
              <span className="text-[#722f37] font-bold">›</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-1/2 w-full h-px lg:h-64 bg-gradient-to-r from-transparent via-[#722f37]/20 to-transparent flex items-center justify-center overflow-hidden">
        <div className="hidden lg:block text-[#722f37]/5 font-serif text-[60px] xl:text-[100px] font-bold select-none whitespace-nowrap">
          {service.title.split(' ')[0]}
        </div>
      </div>
    </div>
  )
}
