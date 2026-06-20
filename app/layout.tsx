import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Sky Real Estate Chandigarh | Trusted Real Estate Agency',
  description: 'Find verified flats, plots, and apartments in Chandigarh with Sky Real Estate. Trusted real estate agency for premium property deals.',
  verification: {
    google: 'ZS7Ji6uzAvCK4ZWV-kfNVwciVcpp0w9o9JPaGPKRc4Q',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://sky-real-estate-chandigarh.vercel.app/#website",
        "url": "https://sky-real-estate-chandigarh.vercel.app/",
        "name": "Sky Property",
        "publisher": {
          "@id": "https://sky-real-estate-chandigarh.vercel.app/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://sky-real-estate-chandigarh.vercel.app/#organization",
        "name": "Sky Property",
        "url": "https://sky-real-estate-chandigarh.vercel.app/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sky-real-estate-chandigarh.vercel.app/logo.png"
        }
      },
      {
        "@type": ["RealEstateAgent", "LocalBusiness"],
        "@id": "https://sky-real-estate-chandigarh.vercel.app/#localbusiness",
        "name": "Sky Property",
        "url": "https://sky-real-estate-chandigarh.vercel.app/",
        "logo": "https://sky-real-estate-chandigarh.vercel.app/logo.png",
        "image": "https://sky-real-estate-chandigarh.vercel.app/logo.png",
        "description": "Find verified flats, plots, and apartments in Chandigarh with Sky Real Estate. Trusted real estate agency for premium property deals.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chandigarh",
          "addressRegion": "CH",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://sky-real-estate-chandigarh.vercel.app/#webpage",
        "url": "https://sky-real-estate-chandigarh.vercel.app/",
        "name": "Sky Real Estate Chandigarh | Trusted Real Estate Agency",
        "isPartOf": {
          "@id": "https://sky-real-estate-chandigarh.vercel.app/#website"
        },
        "about": {
          "@id": "https://sky-real-estate-chandigarh.vercel.app/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sky-real-estate-chandigarh.vercel.app/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sky-real-estate-chandigarh.vercel.app/"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-slate-900 bg-slate-50 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
