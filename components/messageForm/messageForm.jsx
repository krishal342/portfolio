import React from 'react'

const MessageForm = () => {
    return (
        <div className='flex justify-center'>
            <form action="" className='flex flex-col gap-5 w-[30%]'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='text-gray-500 text-xl'>Name:</label>
                    <input type="text" name="name" id="name" placeholder='Your Name' className='border-2 border-gray-600 rounded-lg px-4 py-2 focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none'/>
                </div>

                <div className='flex flex-col gap-2' >
                    <label htmlFor="email" className='text-gray-500 text-xl'>Email:</label>
                    <input type="email" name="email" id="email" placeholder='Your Email' className='border-2 border-gray-600 rounded-lg px-4 py-2 focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="message" className='text-gray-500 text-xl'>Message:</label>
                    <textarea name="message" id="message" cols="20" rows="7" placeholder='Your Message' className='border-2 border-gray-600 rounded-lg px-4 py-2 focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none'></textarea>
                </div>

                <button type="submit" className='bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2'>Submit</button>
            </form>
        </div>
    )
}

export default MessageForm