import Link from 'next/link'
import React from 'react'
import '../app/globals.css'
import '../app/notfound.css'

const NotFound = () => {
    return (
        <div className="flex flex-col bg-gray-100 transition duration-500 ease-in-out h-screen">
            <div className="flex-grow flex items-center justify-center transition duration-500 ease-in-out min-h-screen relative overflow-hidden">
                <div className="absolute inset-0 bg-[#3C23B5] opacity-80 animate-gradient-x"></div>
                <div className="relative max-w-lg p-8 bg-white shadow-md rounded-lg transform transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 hover:shake">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 transition duration-500 ease-in-out hover:text-primary-800 ">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 transition duration-500 ease-in-out hover:text-gray-800">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link href="/" className="inline-block bg-[#3C23B5]  text-white font-semibold px-6 py-3 rounded-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l flex justify-center">
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound