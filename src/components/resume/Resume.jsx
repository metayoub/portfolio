import React  from 'react'

export default function Resume({ about }) {
    return (
        <div id="home" className="bg-resume bg-no-repeat bg-center bg-scroll md:bg-fixed">
            <div className="bg-gray-900 bg-opacity-75 h-screen">
                <div className="px-4 py-32 mx-auto w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40 h-screen content-center">
                    <div className="text-center mb-6 mt-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white dark:text-gray-100 sm:text-4xl md:mx-auto">
                            {about.title}
                        </h2>
                        <p className="text-base text-gray-100 md:text-lg">
                            {about.subtitle}
                        </p>
                    </div>
                    <div className="mt-10 flex justify-center">
                            <a
                                href={about.resume}
                                className="text-center border border-white dark:border-gray-100 font-semibold rounded-md text-white dark:text-gray-100 bg-transparent hover:bg-gray-900 py-4 text-lg px-10"
                            >
                                Download Resume
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}