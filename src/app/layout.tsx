import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'

import localFont from "next/font/local";
import "./globals.css";


const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fuzzie.',
  description: 'Automate Your Work With Fuzzie.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} ${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
