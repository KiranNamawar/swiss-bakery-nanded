'use client'
import Image from 'next/image'
import { useState } from 'react'
import { menu } from '../../util/data'

export default function MenuPage() {
    const [menuItems, setMenuItems] = useState(menu)
    const categories = menu.reduce((acc: string[], item) => {
        if (!acc.includes(item.category)) {
            acc.push(item.category)
        }
        return acc
    }, [])
    console.log(categories)

    function handleCategoryClick(category: string) {
        const filteredMenu = menu.filter((item) => item.category === category)
        setMenuItems(filteredMenu)
        console.log(filteredMenu)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-center text-4xl font-bold">Menu</h1>

            <div className="m-4 flex overflow-auto w-screen p-5 border border-red-800">
                <button
                    onClick={() => setMenuItems(menu)}
                    className="mr-4 text-lg font-bold"
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            handleCategoryClick(category)
                        }}
                        className="mr-4 text-lg font-bold text-blue-500"
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {menuItems.map((item) => (
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
                        <p className="mt-2 text-lg font-bold">${item.price}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}
