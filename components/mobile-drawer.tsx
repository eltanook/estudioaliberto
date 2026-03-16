"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"
import Link from "next/link"

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  links: { href: string; label: string }[]
}

export function MobileDrawer({ isOpen, onClose, links }: MobileDrawerProps) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#0a1628] text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header - Just close button */}
          <div className="flex items-center justify-end p-6 border-b border-white/10">
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 transition-colors"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 flex flex-col justify-center items-center gap-8 p-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`text-2xl font-serif tracking-wider transition-colors ${
                  isActive(link.href) ? "text-[#722f37]" : "hover:text-[#722f37]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="p-6 border-t border-white/10">
            <Link
              href="/contacto"
              onClick={onClose}
              className="block w-full bg-[#722f37] text-white py-4 text-center font-medium uppercase tracking-wider hover:bg-[#722f37]/90 transition-colors"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
