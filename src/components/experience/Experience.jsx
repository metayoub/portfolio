import React  from 'react'

export default function Experience({ experience }) {
    return (
        <div id="experience" className="container mx-auto my-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-4 h-full">
                <div className="mb-8">
                    <p className="w-full flex justify-center text-2xl text-gray-800 dark:text-gray-200 font-bold">Experience</p>
                </div>
                
                <div className="invisible md:visible border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"/>
                {experience.map((item) => (
                    <div key={item.id} className={`mb-8 md:ml-0 flex justify-between ${item.id%2 === 0 ? "md:flex-row-reverse" : ""} items-center w-full right-timeline`}>
                        <div className="md:order-1 md:w-5/12"/>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 roubnded-full mr-3 md:mr-0">
                            <h1 className="mx-auto font-semibold text-lg text-white sm:p-3 md:p-0">{item.id}</h1>
                        </div>
                        
                        <div className="order-1 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-xl w-11/12 sm:w-12/12 md:w-5/12 px-3 py-3 md:transform md:hover:scale-105 md:transition md:duration-300">
                            <h5 className="mb-1 text-gray-500 dark:text-gray-100 text-md text-center">{item.year}</h5>
                            <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-400 text-xl">{item.role}</h3>
                            <h5 className="mb-2 font-semibold text-gray-600 dark:text-gray-500 text-lg">{item.company} ({item.location})</h5>
                            <ul className="leading-loose text-xs tracking-tight text-justify text-gray-900 dark:text-gray-200  text-opacity-100 list-disc list-inside">
                            {item.description.map((element) => (
                                <li key={element}> {element}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}