"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Menu, Sun, Moon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileDrawer } from "./mobile-drawer"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/equipo", label: "Equipo" },
  { href: "/contacto", label: "Contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-md"
            : "bg-background"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand Name */}
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/LOGO_ALIBERTO.png"
                alt="Estudio Jurídico Aliberto"
                width={200}
                height={50}
                className="h-12 w-auto object-contain dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              />
              <span className="hidden md:block font-serif text-lg font-bold tracking-tight text-foreground uppercase border-l-2 border-[#722f37] pl-4">
                Estudio Jurídico
                <span className="block text-[#722f37] -mt-1">Aliberto</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-foreground font-medium tracking-wide text-sm uppercase py-2 group transition-colors ${
                    isActive(link.href) ? "text-[#722f37]" : "hover:text-[#722f37]"
                  }`}
                >
                  {link.label}
                  {/* Underline that expands from center */}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#722f37] transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 hover:bg-secondary transition-colors"
                  aria-label="Cambiar tema"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              )}

              {/* CTA Button */}
              <Link
                href="/contacto"
                className="hidden md:block bg-[#722f37] text-white px-6 py-3 font-medium text-sm uppercase tracking-wider hover:bg-[#722f37]/90 transition-colors"
              >
                Agendar Consulta
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="lg:hidden p-2 hover:bg-secondary transition-colors"
                aria-label="Abrir menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        links={navLinks}
      />
    </>
  )
}
