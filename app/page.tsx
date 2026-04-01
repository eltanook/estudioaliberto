import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { MapSection } from "@/components/map-section"
import { ClientsCarousel } from "@/components/clients-carousel"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Toaster } from "sonner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSection />
      <AboutSection bgGrey={true} />
      <FAQSection />
      <ServicesSection isHome={true} />
      <TeamSection />
      <ContactSection />
      <ClientsCarousel bgGrey={true} />
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
