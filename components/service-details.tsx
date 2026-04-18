"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ShieldCheck, Users, FileText, Gavel } from "lucide-react"

const serviceDetails = [
  {
    id: "amparos",
    title: "Amparos de Salud",
    icon: ShieldCheck,
    description: "Es una acción judicial rápida que permite garantizar el acceso a tratamientos, medicamentos o prestaciones médicas cuando estos son negados o demorados por obras sociales, prepagas o el sistema de salud en general, sea público o privado.\n\nEste tipo de proceso busca proteger derechos fundamentales, como el derecho a la vida y a la salud, obteniendo en muchos casos respuestas urgentes por parte de la Justicia.\n\nIntervenimos en casos de:",
    details: [
      "Negativa de cobertura de tratamientos o cirugías",
      "Falta de entrega de medicamentos",
      "Prestaciones en discapacidad",
      "Cobertura o reintegros por internación geriátrica",
      "Solicitudes de tratamientos de alto costo",
      "Incumplimientos de obras sociales y prepagas en general"
    ]
  },
  {
    id: "sucesiones",
    title: "Sucesiones",
    icon: Users,
    description: "La sucesión es el proceso legal mediante el cual se transmiten los bienes, derechos y obligaciones de una persona fallecida a sus herederos.\n\nNos encargamos de gestionar el trámite sucesorio de manera ágil y eficiente, ya sea que exista o no testamento, garantizando la correcta inscripción de los bienes y la seguridad jurídica para todas las partes involucradas.\n\nDentro del proceso realizamos:",
    details: [
      "Inicio y tramitación de sucesiones",
      "Declaratoria de herederos",
      "Inscripción de bienes (inmuebles, automotores, etc.)",
      "Asesoramiento durante todo el proceso"
    ]
  },
  {
    id: "divorcios",
    title: "DIVORCIO",
    icon: Gavel,
    description: "El divorcio permite disolver legalmente el vínculo matrimonial, ya sea de común acuerdo o a solicitud de una de las partes. Brindamos acompañamiento legal en todo el proceso, priorizando soluciones claras, rápidas y que resguarden los intereses personales y familiares.\n\nAsesoramos en:",
    details: [
      "Divorcios EXPRESS de común acuerdo y unilaterales",
      "División de bienes o convenio",
      "Cuota alimentaria",
      "Cuidado personal de hijos",
      "Régimen de comunicación",
      "Compensación económica\nentre otros rubros"
    ]
  },
  {
    id: "contratos",
    title: "CONTRATOS",
    icon: FileText,
    description: "Los contratos son herramientas fundamentales para formalizar acuerdos y prevenir conflictos. Una correcta redacción es clave para proteger los intereses de las partes. Ofrecemos asesoramiento en la elaboración, revisión y negociación de contratos civiles y comerciales adaptados a cada necesidad particular.\n\nAlgunos ejemplos:",
    details: [
      "contrato de alquiler",
      "contrato de locación de servicios",
      "compraventa de bienes",
      "Redacción y revisión de contratos personalizados"
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
        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
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
      <div className="lg:w-1/2 w-full h-px lg:h-[450px] bg-gradient-to-r from-transparent via-[#722f37]/20 to-transparent flex items-center justify-center overflow-hidden">
        <div className="hidden lg:block text-[#722f37]/5 font-serif text-[60px] xl:text-[100px] font-bold select-none whitespace-nowrap">
          {service.title.split(' ')[0]}
        </div>
      </div>
    </div>
  )
}
