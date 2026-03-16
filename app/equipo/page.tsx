import { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { TeamSection } from "@/components/team-section"
import { ClientsCarousel } from "@/components/clients-carousel"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Nuestro Equipo | Estudio Jurídico Aliberto",
  description: "Conozca a nuestro equipo de profesionales altamente capacitados y comprometidos con la excelencia legal.",
}

export default function EquipoPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <PageHeader 
        title="Nuestro Equipo" 
        subtitle="Profesionales comprometidos con tu bienestar legal"
      />
      <TeamSection showTitle={false} />
      <ClientsCarousel showTitle={false} bgGrey={true} />
      <Footer />
    </main>
  )
}
