"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/equipo", label: "Equipo" },
  { href: "/contacto", label: "Contacto" },
]

const services = [
  "Derecho Civil",
  "Derecho de Familia",
  "Ciudadanía Italiana",
  "Gestoría",
  "Sucesiones",
]

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            {/* Logo and Brand Name */}
            <Link href="/" className="flex items-center gap-4 mb-8">
              <Image
                src="/LOGO_ALIBERTO.png"
                alt="Estudio Jurídico Aliberto"
                width={200}
                height={50}
                className="h-14 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              />
              <span className="hidden md:block font-serif text-lg font-bold tracking-tight text-white uppercase border-l-2 border-[#722f37] pl-4">
                Estudio Jurídico
                <span className="block text-[#722f37] -mt-1">Aliberto</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Defendemos tus derechos con experiencia y compromiso. Asesoría Legal en Derecho Civil, Derecho de Familia y Ciudadanía Italiana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Enlaces Rapidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#722f37] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/servicios"
                    className="text-white/70 hover:text-[#722f37] transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contacto</h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/5491131458264"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#722f37] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                11-3145-8264
              </a>
              <a
                href="mailto:estudioaliberto@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-[#722f37] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                estudioaliberto@gmail.com
              </a>
            </div>
            
            {/* Social Buttons - Moved here */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com/estudioaliberto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-[#722f37] hover:border-[#722f37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/estudioaliberto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-[#722f37] hover:border-[#722f37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>
              {new Date().getFullYear()} Estudio Jurídico Aliberto. Todos los derechos reservados.
            </p>
            <p>
              C.A.B.A. y Provincia de Buenos Aires, Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
