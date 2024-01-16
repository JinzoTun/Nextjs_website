import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'


export const metadata: Metadata = {
  title: 'Book Slayer',
  description: 'Download free books',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": '',
    "twitter:card": "summary_large_image",
    "og:url": "https://github.com/JinzoTun",
    "og:image": '',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
      </html>
    </ClerkProvider>
  )
}