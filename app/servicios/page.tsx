import { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { ServicesSection } from "@/components/services-section"
import { ClientsCarousel } from "@/components/clients-carousel"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Nosotros | Estudio Jurídico Aliberto",
  description: "Servicios jurídicos, gestoría y ciudadanía italiana. Asesoramiento legal integral con un enfoque personalizado.",
}

export default function ServiciosPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <PageHeader 
        title="Nuestros Servicios" 
        subtitle="Soluciones legales integrales para cada situación"
      />
      <ServicesSection showTitle={false} bgGrey={true} />
      <ClientsCarousel showTitle={false} bgGrey={true} />
      <Footer />
    </main>
  )
}
