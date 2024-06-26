import Image from 'next/image'
import Link from 'next/link'

export function HeaderNavBar() {
    return (
        <div>
            <header className="flex items-center justify-between text-white">
                    <Link href="/" className='flex'>
                        <Image
                            src="/icon.png"
                            alt="Swiss Bakery and Sweets logo"
                            width={50}
                            height={50}
                        />
                        <h1 className='font-bold text-lg hidden md:block'>Swiss Bakery and Sweets</h1>
                    </Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4 md:space-x-10">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li>
                            <p>Order Online</p>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export function FooterNavBar() {
    return (
        <footer className="p-4 text-white sticky bottom-0 left-0 right-0">
            <nav className="md:hidden">
                <ul className='flex items-center justify-between'>
                    <li>
                        <Link href="">Visit Store</Link>
                    </li>
                    <li>
                        <Link href="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link href="">Order Online</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
