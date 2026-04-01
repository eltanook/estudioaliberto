"use client"

import { Mail, Phone, Facebook, Instagram } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-[#0a1628] dark:bg-[#722f37] text-white py-2 text-sm transition-colors duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a 
            href="mailto:estudioaliberto@gmail.com" 
            className="flex items-center gap-2 hover:text-[#722f37] transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">estudioaliberto@gmail.com</span>
          </a>
          <a 
            href="https://wa.me/5491130087678" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#722f37] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">11-3008-7678</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://facebook.com/estudioaliberto" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#722f37] transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a 
            href="https://instagram.com/estudioaliberto" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#722f37] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
