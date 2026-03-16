"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { toast } from "sonner"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "11-3145-8264",
    href: "https://wa.me/5491131458264",
  },
  {
    icon: Mail,
    label: "Email",
    value: "estudioaliberto@gmail.com",
    href: "mailto:estudioaliberto@gmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "C.A.B.A. y Provincia de Buenos Aires",
  },
  {
    icon: Clock,
    label: "Atencion",
    value: "Virtual todos los dias. Presencial con turno.",
  },
]

const services = [
  "Derecho Civil",
  "Derecho de Familia",
  "Ciudadanía Italiana",
  "Gestoría",
  "Sucesiones",
  "Contratos",
  "Otro",
]

interface ContactSectionProps {
  showTitle?: boolean
}

export function ContactSection({ showTitle = true }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      await fetch("https://formsubmit.co/ajax/estudioaliberto@gmail.com", {
        method: "POST",
        body: formData,
      })
      
      toast.success("Solicitud enviada!", {
        description: "Nos contactaremos a la brevedad.",
      })
      
      form.reset()
    } catch {
      toast.error("Error al enviar", {
        description: "Por favor intenta nuevamente.",
      })
    }
    
    setIsSubmitting(false)
  }

  return (
    <section id="contacto" className="py-24 bg-secondary">
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
              Contáctenos
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 drop-shadow-sm">Contáctenos</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-medium">
              Estamos aquí para asesorarlo. Complete el formulario o contáctenos por WhatsApp para una respuesta inmediata.
            </p>
          </div>
        )}

        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Contact Info */}
          <div className="flex flex-col justify-center overflow-hidden">
            <div className="space-y-6">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/close-up-modern-office-buildings-5qBtuQ1sYym6X5MlRmQth7Q8j747Gj.jpg"
                  alt="Oficinas modernas"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Contact Cards - Equal Size Grid */}
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  const Content = (
                    <div className="flex flex-col items-center justify-center p-6 bg-card border border-border hover:border-[#722f37] transition-colors h-full min-h-[160px] text-center">
                      <div className="w-12 h-12 bg-[#722f37] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {info.label}
                      </span>
                      <p className="text-foreground font-medium text-sm leading-tight">
                        {info.value}
                      </p>
                    </div>
                  )
                  
                  return info.href ? (
                    <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                      {Content}
                    </a>
                  ) : (
                    <div key={info.label} className="h-full">{Content}</div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form - No shadow */}
          <div className="bg-card p-8 md:p-10 border border-border flex flex-col justify-center min-h-full">
            <div className="w-full">
              <h3 className="font-serif text-2xl text-foreground mb-6">
                Envianos tu consulta
              </h3>
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
              {/* FormSubmit Config */}
              <input type="hidden" name="_subject" value="Nueva consulta desde el sitio web" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                    Nombre y Apellido *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#722f37] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#722f37] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    className="w-full px-4 py-3 bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#722f37] transition-colors"
                    placeholder="11-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-foreground mb-2">
                  Servicio requerido
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  required
                  className="w-full px-4 py-3 bg-background border border-input text-foreground focus:outline-none focus:border-[#722f37] transition-colors"
                >
                  <option value="">Seleccionar servicio</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#722f37] transition-colors resize-none"
                  placeholder="Describi brevemente tu consulta..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#722f37] text-white py-4 font-medium uppercase tracking-wider hover:bg-[#722f37]/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar solicitud
                  </>
                )}
              </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
