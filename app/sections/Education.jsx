import React from 'react'

export default function Education() {
    return (
        <>
            <div className="container">
                <div className='xl:pb-32 px-4'>
                    <div className='text-center pb-12 space-y-6 '>
                        <h2 className='text-5xl'>Education</h2>
                        <p className="text-gray-400 mt-2">
                            Here are some of the projects I've built using React, Next.js, and Tailwind CSS.
                        </p>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="border border-[#393A3D] shadowx-hover p-4 rounded-md">
                                <h3 className="font-semibold">12th (Higher Secondary)</h3>
                                <p className="text-sm text-gray-600">H.P Board of School Education (2017)</p>
                                <p className="text-sm mt-2">Completed 12th with core academic subjects under the HP Board.</p>
                            </div>

                            <div className="border border-[#393A3D] shadowx-hover p-4 rounded-md">
                                <h3 className="font-semibold">Graduation</h3>
                                <p className="text-sm text-gray-600">Govt. College Shahpur (HPU) (2019 – 2022)</p>
                                <p className="text-sm mt-2">Graduated with a Bachelor's degree. Built a foundation in academics and career development.</p>
                            </div>
                        </div>
                        <div className="border border-[#393A3D] shadowx-hover md:text-center mt-6 p-4 rounded-md">
                            <h3 className="font-semibold">Frontend Development Diploma</h3>
                            <p className="text-sm text-gray-600">Codex Mettrix Dharamshala (2024 – 2025)</p>
                            <p className="text-sm mt-2">Currently pursuing a diploma focused on React, Tailwind CSS, GitHub, API integration, and deployment.</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
