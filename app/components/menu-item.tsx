import { MenuItem } from '@/app/util/models'
import Image from 'next/image'

export default function MenuItemCard({ item }: { item: MenuItem }) {
    return (
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
    )
}
