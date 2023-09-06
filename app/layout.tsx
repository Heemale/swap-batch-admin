import './globals.css'
import React from "react";

export const metadata = {
  title: 'swap机器人',
  description: 'swap机器人',
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
