import Image from "next/image";

export default function MenuItem({ title, description, price, image }) {
    return (
        <div className='flex justify-between items-center p-4 border-b border-gray-200'>
            <Image src={image} alt={title} className='w-20 h-20 object-cover rounded-lg' />
            <div>
                <h3 className='text-lg font-semibold'>{title}</h3>
                <p className='text-sm'>{description}</p>
            </div>
            <p className='text-lg font-semibold'>${price}</p>
        </div>
    )
}