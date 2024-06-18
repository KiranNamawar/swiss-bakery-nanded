import Image from 'next/image'

import { menu } from '../util/data'

export default function HomePage() {
    const bestSellers = menu.filter((item) => item.isBestSeller)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold text-center">
                Welcome to <span className="text-blue-500">Swiss Bakery and Sweets</span>
            </h1>
            <h2 className="text-2xl font-bold text-center mt-4">
                Best Sellers
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {bestSellers.map((item) => (
                    <div
                        key={item._id}
                        className="rounded-md bg-orange-300 p-4 shadow-md"
                    >
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={300}
                            height={200}
                            className="h-48 w-full rounded-md object-cover"
                        />
                        <h2 className="mt-4 text-xl font-bold">{item.name}</h2>
                        <p className="text-sm text-gray-500">
                            {item.description}
                        </p>
                        <p className="mt-2 text-lg font-bold">
                            ${item.price}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    )
}
