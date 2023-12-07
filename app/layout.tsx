import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Inter, Poppins } from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight:["500", "600", "700"],
  subsets:['latin'],
  style:['normal']
})
export const metadata: Metadata = {
  title: 'IBank',
  description: 'A banking web application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
