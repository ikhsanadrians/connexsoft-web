import './globals.css'
import { Inter } from 'next/font/google'
import { AOSInit } from './utils/AOTInit'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Connexsoft',
  description: 'Connexsoft Official Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <AOSInit/>
        <body className={inter.className}>{children}</body>
    </html>
  )
}
 