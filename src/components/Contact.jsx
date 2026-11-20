import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa'

export const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6 '>
                <h2 className='text-2xl font-bold text-center mb-4'>
                    Get In
                    <span className='text-purple'>Touch</span>
                </h2>
                <p className='text-gray-300 text-center max-w-2xl 
                    mx-auto mb-16'>Have a project or just want to talk? Feel free to contact me.Let's build something amazing together.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start'>
                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Your name</label>
                                <input type="text"
                                    className='w-full bg-dark-300
                            border border-dark-400 rounded-lg px-4 py-3 outline-none'/>
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-gray-300 mb-2'>Email address</label>
                                <input type="email"
                                    className='w-full bg-dark-300
                            border border-dark-400 rounded-lg px-4 py-3 outline-none'/>
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                                <textarea
                                    className='w-full h-40 bg-dark-300
                            border border-dark-400 rounded-lg px-4 py-3 outline-none'/>
                            </div>
                            <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700
                              transition duration-300 cursor-pointer'>
                                Send
                            </button>
                        </form>
                    </div>


                    {/* Contact Informationn */}
                    <div className='space-y-8 '>
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaMapMarker />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2 '>Location</h3>
                                <p className='text-gray-400'>Paonta Sahib,Distt Sirmour Himachal Pradesh</p>
                            </div>
                        </div>


                         <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2 '>Email</h3>
                                <p className='text-gray-400'>palaksharma0519@gmail.com</p>
                            </div>
                        </div>

                         <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2 '>Phone</h3>
                                <p className='text-gray-400'>+919015402736</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
