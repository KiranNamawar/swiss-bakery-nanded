import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return (
        <div>
            <header className="flex items-center justify-between bg-blue-500 p-4 text-white">
                <h1 className="text-2xl font-bold">Swiss Bakery and Sweets</h1>
                <nav>
                    <ul className="flex space-x-4 md:space-x-10">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li className='hidden md:block'>
                            <p>Order Online</p>
                            {/* <div className='flex space-x-5 px-3'>
                                <Link href="https://www.swiggy.com/menu/795190">
                                    <Image
                                        src="/swiggy-logo.svg"
                                        alt="Swiggy logo"
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                                <Link href="https://zomato.onelink.me/xqzv/2wl0xc6n">
                                    <Image
                                        src="/zomato-logo.svg"
                                        alt="Zomato logo"
                                        width={50}
                                        height={20}
                                    ></Image>
                                </Link>
                            </div> */}
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
