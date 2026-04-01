"use client"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section 
      className="relative min-h-[40vh] md:min-h-[50vh] flex flex-col items-center justify-center bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertical-low-angle-shot-black-building-with-mirror-windows-clear-sky-9NGxSkd4jGB3Tvo6CVEmePFtytY1xt.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a1628]/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-16 flex flex-col items-center justify-center mt-8 md:mt-0">
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white text-center text-balance px-2">
          {title}
        </h1>
        <hr className="w-16 md:w-24 h-1 bg-[#722f37] border-none mx-auto mt-4 md:mt-6 mb-2" />
        {subtitle && (
          <p className="text-white/80 text-center mt-3 md:mt-4 text-sm md:text-base max-w-2xl mx-auto px-4">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
