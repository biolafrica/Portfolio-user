import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/nav/header";
import Footer from "./components/nav/footer";
import {SpeedInsights} from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const dynamic = "force-dynamic"


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://www.abiodunbiobaku.com'),

  title: {
    default: 'Abiodun Biobaku | Full-Stack Web Developer in Manchester & London, UK | React, Next, Node.js, & shopify Specialist',
    template: '%s | Abiodun Biobaku'
  },

  description: 'Full-stack web developer in Manchester & London United Kingdom. Building scalable web applications with React, Next.js, and Node.js for UK startups and businesses. Available for local and remote projects.',

  keywords: ['web developer Manchester','web developer London', 'software engineer London', 'React developer UK', 'full stack developer East Midlands', 'web development London','web development Manchester', 'freelance developer UK', 'Shopify developer UK', 'Wordpress developer UK'],

  authors: [{ name: 'Abiodun Biobaku' }],
  creator: 'Abiodun Biobaku',
  openGraph: {
    title: 'Abiodun Biobaku - Web Developer in Manchester & London, UK',
    description: 'Full-stack developer specializing in React, Next, Shopify, Wordpress and Node.js. Building web applications for UK businesses.',
    url: 'https://www.abiodunbiobaku.com',
    siteName: 'Abiodun Biobaku - Web Developer',
    images: [
      {
        url: '/images/abiodun-biobaku-web-developer.jpg',
        width: 1200,
        height: 630,
        alt: 'Abiodun Biobaku, full-stack web developer based in Manchester & London, UK',
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abiodun Biobaku - Web Developer in Manchester & London, UK',
    description: 'Full-stack developer specializing in React, Next, Wordpress, Shopify and Node.js. Building web applications for UK busineses.',
    images: ['/images/abiodun-biobaku-web-developer.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" style={{transitionProperty: "none", marginRight: "0"}} >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Abiodun Biobaku - Web Developer",
              "image": "https://www.abiodunbiobaku.com/images/abiodun-biobaku-web-developer.jpg",
              "description": "Full-stack web developer specializing in React, Next.js, Node.js, shopify and Wordpress",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Oldham",
                "addressRegion": "Manchester",
                "addressCountry": "UK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 53.56161,
                "longitude": -2.22586
              },
              "url": "https://www.abiodunbiobaku.com",
              "telephone": "+44-7756-515241",
              "priceRange": "£500 - £4,000+",
              "areaServed": ["Manchester", "North West England", "London", "United Kingdom"]
            })
          }}
        />
      </head>
      <body className={manrope.className}>
        <Header/>
        {children}
        <SpeedInsights/>
        <Analytics/>
        <Footer/>
      </body>
    </html>
  );
}
