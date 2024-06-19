'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import MenuItemCard from '@/app/components/menu-item'
import { MenuItem } from '../util/models'


export default function MenuPage() {
    const [menuItems, setMenuItems] = useState([] as MenuItem[])
    const [menu, setMenu] = useState([] as MenuItem[])

    useEffect(() => {
        fetch("/api/menu")
            .then((res) => res.json())
            .then((data) => {
                setMenu(data)
                setMenuItems(data)
            })
    }, [])

    const categories = menu.reduce((acc: string[], item) => {
        if (!acc.includes(item.category)) {
            acc.push(item.category)
        }
        return acc
    }, [])

    function handleCategoryClick(category: string) {
        const filteredMenu = menu.filter((item) => item.category === category)
        setMenuItems(filteredMenu)
        console.log(filteredMenu)
    }

    return (
        <main className="">
            <h1 className="">Menu</h1>

            <div className="">
                <button onClick={() => setMenuItems(menu)} className="">
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            handleCategoryClick(category)
                        }}
                        className=""
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="">
                {menuItems.map((item) => (
                    <MenuItemCard item={item} key={item._id} />
                ))}
            </div>
        </main>
    )
}
