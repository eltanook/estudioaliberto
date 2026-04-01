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
    value: "11-3008-7678",
    href: "https://wa.me/5491130087678",
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
    value: "de 10:00 a 18:00 días hábiles",
  },
]

const services = [
  "Amparo de Salud",
  "Sucesiones",
  "Divorcios",
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
          className={`grid lg:grid-cols-12 gap-8 transition-all duration-700 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Column: Contact info cards (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <div 
                  key={info.label} 
                  className="bg-card border border-border p-6 flex items-start gap-5 group hover:border-[#722f37] transition-all duration-300 shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#722f37] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-[#722f37] font-bold uppercase tracking-[0.2em] block">
                      {info.label}
                    </span>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-serif text-foreground hover:text-[#722f37] transition-colors leading-tight block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-serif text-foreground leading-tight">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
            
            <div className="px-2 pt-4">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                Atención presencial únicamente con cita previa en nuestras oficinas de CABA.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (8 cols) */}
          <div className="lg:col-span-8 bg-card border border-border p-8 md:p-12 lg:p-16 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="Nueva consulta desde el sitio web" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[#722f37]">
                    Nombre Completo *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ej: Juan Pérez"
                    className="w-full px-4 py-4 bg-secondary/30 border border-border focus:border-[#722f37] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-[#722f37]">
                    Teléfono de Contacto *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Ej: 11 1234 5678"
                    className="w-full px-4 py-4 bg-secondary/30 border border-border focus:border-[#722f37] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-bold uppercase tracking-widest text-[#722f37]">
                    Servicio Requerido *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-4 bg-secondary/30 border border-border focus:border-[#722f37] outline-none transition-colors appearance-none"
                  >
                    <option value="">Seleccione un servicio</option>
                    <option value="Amparos de Salud">Amparos de Salud</option>
                    <option value="Sucesiones">Sucesiones</option>
                    <option value="Divorcios">Divorcios</option>
                    <option value="Contratos">Contratos</option>
                    <option value="Otro">Otro Motivo</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="preferred_contact" className="text-xs font-bold uppercase tracking-widest text-[#722f37]">
                    Medio de contacto preferido *
                  </label>
                  <select
                    id="preferred_contact"
                    name="preferred_contact"
                    required
                    className="w-full px-4 py-4 bg-secondary/30 border border-border focus:border-[#722f37] outline-none transition-colors appearance-none"
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Llamada telefónica">Llamada telefónica</option>
                    <option value="Email">Email</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[#722f37]">
                  Mensaje o Consulta *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Describa brevemente su situación..."
                  className="w-full px-4 py-4 bg-secondary/30 border border-border focus:border-[#722f37] outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#722f37] text-white py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#722f37]/90 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
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
    </section>
  )
}
