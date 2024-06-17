import type { Metadata } from 'next'
import { Trispace } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/nav-bar'

const trispace = Trispace({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Swiss Bakery and Sweets | Cakes, Pastries, Panipuri & Chaats in Nanded',
    description:
        'Indulge in Swiss Bakery and Sweets exquisite selection of Cakes, Pastries, Panipuri, and Chaats. Visit us in Nanded for a delightful culinary experience that combines tradition with taste.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={trispace.className}>
                <NavBar />
                {children}
            </body>
        </html>
    )
}
