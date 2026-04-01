import { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { ClientsCarousel } from "@/components/clients-carousel"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Nosotros | Estudio Jurídico Aliberto",
  description: "Conozca nuestra trayectoria y el compromiso de brindar soluciones legales efectivas y personalizadas en CABA y GBA.",
}

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <PageHeader 
        title="Nosotros" 
        subtitle="Compromiso y excelencia legal al servicio de nuestros clientes"
      />
      <AboutSection showTitle={false} bgGrey={true} />
      <TeamSection showTitle={false} />
      <ClientsCarousel showTitle={false} bgGrey={true} />
      <Footer />
    </main>
  )
}
