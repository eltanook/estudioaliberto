"use client"

import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
  {
    question: "¿Qué es un amparo de salud?",
    answer: "Es una acción judicial rápida y expedita que se interpone cuando una obra social o prepaga vulnera el derecho a la salud, negando cobertura de tratamientos, medicación o estudios médicos necesarios."
  },
  {
    question: "¿Contra quiénes se puede iniciar un amparo?",
    answer: "Se puede iniciar contra Obras Sociales Nacionales, Prepagas, PAMI y también contra el Estado (Nacional o Provincial) en caso de falta de recursos o negativa de hospitales públicos."
  },
  {
    question: "¿Qué tipo de coberturas se pueden reclamar?",
    answer: "Tratamientos de discapacidad (Ley 24.901), medicación de alto costo, cirugías, internaciones, prótesis, fertilización asistida y cualquier prestación médica debidamente prescripta por un profesional."
  },
  {
    question: "¿Cuánto tiempo demora un amparo de salud?",
    answer: "Si bien el juicio puede llevar meses, se solicita una 'Medida Cautelar' que suele resolverse en pocos días, obligando a la prestadora a brindar la cobertura de forma inmediata mientras continúa el proceso."
  },
  {
    question: "¿Qué documentación necesito para iniciar?",
    answer: "Se requiere la prescripción médica actualizada, la negativa por escrito de la obra social (o prueba de que no respondieron), carnet de afiliado y DNI."
  }
]

export function FAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0])
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const toggleAccordion = (index: number) => {
    setOpenIndices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    )
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0a1628]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#722f37] font-semibold uppercase tracking-widest text-sm block mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Amparo de Salud: Todo lo que necesitas saber
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side: CTA Card (4 cols) */}
          <div className="lg:col-span-4 h-fit sticky top-24">
            <div className="bg-white dark:bg-[#722f37] border border-border/50 dark:border-transparent p-6 md:p-8 text-foreground dark:text-white flex flex-col justify-center shadow-sm dark:shadow-none">
              <h3 className="font-serif text-2xl mb-4">¿Tenés más dudas?</h3>
              <p className="mb-8 text-muted-foreground dark:text-white/80 leading-relaxed">
                Cada caso es único. Si no encontraste la respuesta que buscabas, contactanos para una asesoría personalizada.
              </p>
              <div className="flex flex-col gap-4">
                <Link 
                  href="/contacto"
                  className="inline-block w-full text-center border-2 border-[#722f37] dark:border-white py-4 font-medium uppercase tracking-widest text-sm bg-[#722f37] text-white dark:bg-transparent dark:text-white hover:bg-[#722f37]/90 dark:hover:bg-white dark:hover:text-[#722f37] transition-all duration-300"
                >
                  Consultar Ahora
                </Link>
                <a 
                  href="https://wa.me/5491130087678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center border-2 border-[#0a1628] dark:border-white/30 py-4 font-medium uppercase tracking-widest text-sm text-[#0a1628] dark:text-white hover:bg-[#0a1628] hover:text-white dark:hover:bg-white/10 transition-all duration-300"
                >
                  Enviar mensaje
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: FAQ Accordion (8 cols) */}
          <div className="lg:col-span-8 lg:max-h-[800px] lg:overflow-y-auto pr-2 space-y-4 custom-scrollbar">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b border-border/50 bg-card/30 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/20 transition-colors group"
                >
                  <span className="font-serif text-xl text-foreground pr-8 group-hover:text-[#722f37] transition-colors">{faq.question}</span>
                  {openIndices.includes(index) ? (
                    <Minus className="w-5 h-5 text-[#722f37] flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#722f37] flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    openIndices.includes(index) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-10 text-muted-foreground leading-relaxed text-lg italic">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
