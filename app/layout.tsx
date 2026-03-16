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
  metadataBase: new URL('https://estudioaliberto.com.ar'),
  title: {
    default: 'Estudio Jurídico Aliberto | Asesoría Legal en Buenos Aires',
    template: '%s | Estudio Jurídico Aliberto'
  },
  description: 'Defendemos tus derechos con experiencia y compromiso. Asesoría Legal en Derecho Civil, Derecho de Familia y Ciudadanía Italiana. CABA y Provincia de Buenos Aires.',
  keywords: ['abogados', 'estudio jurídico', 'derecho civil', 'derecho de familia', 'ciudadanía italiana', 'buenos aires', 'CABA', 'sucesiones', 'gestoría'],
  authors: [{ name: 'Estudio Jurídico Aliberto' }],
  category: 'Legal',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Estudio Jurídico Aliberto',
    description: 'Asesoría Legal en Derecho Civil, Derecho de Familia y Ciudadanía Italiana',
    url: 'https://estudioaliberto.com.ar',
    siteName: 'Estudio Jurídico Aliberto',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estudio Jurídico Aliberto',
    description: 'Asesoría Legal con enfoque personalizado en Buenos Aires.',
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
