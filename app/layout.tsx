import './globals.css'

export const metadata = {
  title: 'EMBR - Your Formula, Not Theirs',
  description: 'Precision-dosed vitamins, tailored to you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}