import { span } from 'framer-motion/client'
import React from 'react'

export const ProjectCard = ({ title, description, image, icons }) => {
    return (
        <div className='bg-dark-300 rounded-2xl overflow-hidden
    hover:-translate-y-2 transition duration-300 cursor-pointer'>
            <img src={image} alt={title} className='w-full h-60 object-cover' />
            <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{title}</h3>
                <p className='text-gray-400 mb-4'>{description}</p>
                <div className='flex flex-wrap gap-5 mb-4'>
                    {icons?.map((Icon, index) => (
                        <span key={index} className='px-3 py-1 bg-dark-400 rounded-full
                        text-sm' >
                            <Icon />
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
