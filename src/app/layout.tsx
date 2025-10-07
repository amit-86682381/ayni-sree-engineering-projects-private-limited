import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'AYNI SREE ENGINEERING PROJECTS - Premier Civil Construction Company',
  description: 'Leading civil construction and engineering company in Jharkhand. Specializing in building construction, infrastructure development, and engineering excellence.',
  keywords: ['civil construction', 'building construction', 'engineering', 'infrastructure', 'Ranchi', 'Jharkhand'],
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AYNI SREE ENGINEERING PROJECTS PRIVATE LIMITED",
  "url": "https://aynisree.com",
  "logo": "https://aynisree.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ratu",
    "addressLocality": "Ranchi",
    "addressRegion": "Jharkhand",
    "postalCode": "835303",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+91-XXXXXXXXXX"
  },
  "sameAs": [
    "https://www.facebook.com/aynisree",
    "https://www.linkedin.com/company/aynisree"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={poppins.className}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}