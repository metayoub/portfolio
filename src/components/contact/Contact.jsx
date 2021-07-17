import React  from 'react'

export default function Contact() {
    return (
        <div id="contact" className="w-full h-screen bg-gray-50 flex flex-col justify-center  items-center mx-auto">
            <form action="#" className="w-full md:w-3/4 lg:w-3/6 p-4">
                <div className="p-3">
                    <p className="w-full flex justify-center text-2xl text-gray-800 font-bold "  >Get in Touch </p>
                </div>
                <div className="p-3">
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-gray-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-gray-500" type="email" placeholder="Your Email" required />
                </div>
                <div className="p-3">
                    <textarea className="resize-none border rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-gray-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-gray-500 h-56" placeholder="Your Message" required />
                </div>
                <div className="p-3">
                    <button className="w-full flex justify-center bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-3 rounded text-xl" type="submit">
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}