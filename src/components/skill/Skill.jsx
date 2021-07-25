import React  from 'react'

export default function Skill({ skill }) {
    return (
        <div id="skill" className="w-full h-full m-8 flex flex-col justify-center items-center mx-auto">
            <div className="p-3 mb-4">
                <p className="w-full flex justify-center text-2xl text-gray-800 dark:text-gray-200 font-bold">Skills</p>
            </div>
            <div className="relative w-5/6 md:w-3/4 flex flex-wrap justify-center">
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-y-6">
                    {skill.map((item) => (
                        <div key={item} className="rounded-full h-16 w-16 sm:h-24 sm:w-24 flex items-center justify-center bg-gray-100 dark:bg-gray-800 border border-gray-300 text-xs sm:text-base dark:text-gray-100 transform hover:scale-110 transition duration-300">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}