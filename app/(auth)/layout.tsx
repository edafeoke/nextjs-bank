import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Inter, Poppins } from "next/font/google";
import '../globals.css'

export const metadata: Metadata = {
  // title: {
  //   default: '%s',
  //   template: '%s'
  // },
  description: 'A banking web application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}
