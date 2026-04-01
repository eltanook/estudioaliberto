import { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { ServicesSection } from "@/components/services-section"
import { ServiceDetails } from "@/components/service-details"
import { ClientsCarousel } from "@/components/clients-carousel"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Nuestros Servicios | Estudio Jurídico Aliberto",
  description: "Especialistas en Amparo de Salud, Sucesiones, Divorcios y Contratos. Asesoramiento legal integral en CABA y GBA.",
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
      <ServiceDetails />
      <ClientsCarousel showTitle={false} bgGrey={true} />
      <Footer />
    </main>
  )
}
