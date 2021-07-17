import React  from 'react'

export default function About({about}) {
    return (
        <div id="about" className="min-h-screen bg-white flex flex-col justify-center">
            <div className="relative py-3 sm:max-w-4xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-900 md:shadow-lg transform md:skew-y-3 md:-rotate-6 md:rounded-3xl" />
                <div className="relative px-4 py-10  bg-gray-50 shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="md:flex max-w-4xl mx-auto">
                        <div className="md:flex-shrink-0 md:mr-8 self-center transform hover:rotate-45 transition duration-300">
                            <img className="w-32 h-32 rounded-full mx-auto" src={about.picture} alt={about.title}/> 
                        </div>
                        <div className="md:flex-1">
                            <div className="py-8 text-base space-y-4 text-black sm:text-lg sm:leading-7 text-justify">
                            <p>{about.about}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}