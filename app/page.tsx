'use client';

import Image from 'next/image'
import { MenuItem } from './util/models'
import { useEffect, useState } from 'react'

export default function HomePage() {
    const [menu, setMenu] = useState([] as MenuItem[])
    useEffect(() => {
        fetch('/api/menu')
            .then((res) => res.json())
            .then((data) => setMenu(data))
    }, [])
    const bestSellers = menu.filter((item) => item.isBestSeller)
    return (
        <main className="">
            <h1 className="">
                Welcome to <span className="">Swiss Bakery and Sweets</span>
            </h1>
            <h2 className="">Best Sellers</h2>
            <div className="">
                {bestSellers.map((item) => (
                    <div key={item._id} className="">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={300}
                            height={200}
                            className=""
                        />
                        <h2 className="">{item.name}</h2>
                        <p className="">{item.description}</p>
                        <p className="">${item.price}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}
