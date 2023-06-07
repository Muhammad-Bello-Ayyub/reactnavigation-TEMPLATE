import { Providers } from './providers'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React-Navigation TEMPLATE',
  description: 'This is created from reactnavigation.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers >
          {children}
        </Providers>
      </body>
    </html>
  )
}
