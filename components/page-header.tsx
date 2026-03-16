"use client"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section 
      className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertical-low-angle-shot-black-building-with-mirror-windows-clear-sky-9NGxSkd4jGB3Tvo6CVEmePFtytY1xt.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a1628]/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white text-center text-balance">
          {title}
        </h1>
        <hr className="w-24 h-1 bg-[#722f37] border-none mx-auto mt-6 mb-2" />
        {subtitle && (
          <p className="text-white/70 text-center mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
