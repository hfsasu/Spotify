import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from "@/provider/SupabaseProvider";
import UserProvider from "@/provider/UserProvider";

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Music Listening',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={font.className}>
    <SupabaseProvider>
      <UserProvider>
        <Sidebar>
          {children}
        </Sidebar>
      </UserProvider>
    </SupabaseProvider>
    </body>
    </html>
  )
}
