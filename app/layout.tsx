import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://estudiojuridicoaliberto.com'),
  title: {
    default: 'Amparo de Salud y Asesoría Legal | Estudio Jurídico Aliberto',
    template: '%s | Estudio Jurídico Aliberto'
  },
  description: 'Especialistas en Amparos de Salud contra Obras Sociales y Prepagas. Asesoría experta en Sucesiones, Divorcios y Derecho de Familia en CABA y GBA. Consultas de Lunes a Viernes.',
  keywords: [
    'amparo de salud', 
    'abogados amparos', 
    'cobertura médica prepaga', 
    'obra social amparos', 
    'sucesiones', 
    'divorcios', 
    'estudio jurídico buenos aires', 
    'derecho de familia', 
    'ciudadanía italiana', 
    'CABA', 
    'GBA',
    'asesoría legal'
  ],
  authors: [{ name: 'Estudio Jurídico Aliberto' }],
  category: 'Legal',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Estudio Jurídico Aliberto | Especialistas en Amparos de Salud',
    description: 'Defendemos tus derechos en Amparos de Salud, Derecho de Familia y Sucesiones con compromiso y experiencia.',
    url: 'https://estudiojuridicoaliberto.com',
    siteName: 'Estudio Jurídico Aliberto',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31214-lAp2en6h5QzT09jeAhbki26PJoR1b5.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Martin Aliberto - Director de Estudio Jurídico Aliberto',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estudio Jurídico Aliberto | Especialistas en Amparos de Salud',
    description: 'Asesoría Legal con enfoque personalizado en Buenos Aires. Amparos, Sucesiones y Familia.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31214-lAp2en6h5QzT09jeAhbki26PJoR1b5.jpg'],
  },
  icons: {
    icon: '/LOGO_ALIBERTO.png',
    shortcut: '/LOGO_ALIBERTO.png',
    apple: '/LOGO_ALIBERTO.png',
  },
}


export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0d0d' },
  ],
  width: 'device-width',
  initialScale: 1,
}

import { StructuredData } from '@/components/structured-data'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <StructuredData />
        <Analytics />
      </body>
    </html>
  )
}
