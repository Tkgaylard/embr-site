import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'EMBR - Your formula, not theirs',
  description: 'Precision-dosed vitamins, tailored to you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script 
          src="https://b.kickoffpages.com/2.2.0/kol.js" 
          id="koljs" 
          data-campaign-id="192778"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}