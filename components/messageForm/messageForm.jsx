'use client';
import React, { useState } from 'react'

const MessageForm = () => {

    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);

        const response = await fetch(`/api/message`, {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                'Content-Type': 'application/json'
            }

        })

        if (response.ok) {
            setSuccess(true);
            e.target.reset();

            // Hide after 5 seconds
            setTimeout(() => {
                setSuccess(false);
            }, 5000);

        }
    }


    return (
        <div className='flex justify-center'>
            <form action="" className='flex flex-col gap-5 w-full md:w-[50%] lg:w-[40%] xl:w-[30%]' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='text-gray-500 text-xl'>Name:</label>
                    <input type="text" name="name" id="name" placeholder='Your Name' className='border-2 border-gray-600 rounded-lg px-4 py-2 focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none' />
                </div>

                <div className='flex flex-col gap-2' >
                    <label htmlFor="email" className='text-gray-500 text-xl'>Email:</label>
                    <input type="email" name="email" id="email" placeholder='Your Email' className='border-2 border-gray-600 rounded-lg px-4 py-2 focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="message" className='text-gray-500 text-xl'>Message:</label>
                    <textarea name="message" id="message" cols="20" rows="7" placeholder='Your Message' className='border-2 border-gray-600 rounded-lg px-4 py-2 focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none'></textarea>
                </div>

                <button type="submit" className='bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2'>Submit</button>

            </form>
            {/* Notification Box */}
            {success && (
                <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
                    Message sent successfully!
                </div>
            )}

        </div>
    )
}

export default MessageForm