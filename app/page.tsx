import Image from 'next/image'

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold text-center">
                Welcome to <span className="text-blue-500">Swiss Bakery and Sweets</span>
            </h1>
        </main>
    )
}
