import { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { ContactSection } from "@/components/contact-section"
import { MapSection } from "@/components/map-section"
import { ClientsCarousel } from "@/components/clients-carousel"
import { Footer } from "@/components/footer"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Contacto | Estudio Jurídico Aliberto",
  description: "Contáctanos para agendar una consulta. Atención virtual todos los días y presencial con turno previo.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <PageHeader 
        title="Contacto" 
        subtitle="Estamos para ayudarte con tu consulta legal"
      />
      <ContactSection showTitle={false} />
      <ClientsCarousel showTitle={false} bgGrey={true} />
      <MapSection />
      <Footer />
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            borderRadius: '0',
          },
        }}
      />
    </main>
  )
}
