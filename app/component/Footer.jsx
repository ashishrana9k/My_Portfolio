// components/Footer.jsx
"use client";

export default function Footer() {
    return (
        <footer className="">
           <div className="container">
             <div className=" w-full p-4 py-6 lg:py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 md:mt-0 w-full">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                YourName
                            </span>
                        </a>
                    </div>

                    
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-white">
                                page
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                                <li>
                                    <a href="/projects" className="hover:underline">Projects</a>
                                </li>
                                <li>
                                    <a href="/resume" className="hover:underline">Resume</a>
                                </li>
                                <li>
                                    <a href="/blog" className="hover:underline">Blog</a>
                                </li>
                            </ul>
                        </div>

                
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-white">
                                Follow Me
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                                <li>
                                    <a href="https://github.com/yourusername" className="hover:underline">GitHub</a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/yourusername" className="hover:underline">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/yourusername" className="hover:underline">Twitter</a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-white">
                                Contact
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                                <li className="hover:underline text-wrap">
                                     ashishna3001il.com
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">+91 75910 86467</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2025 <a href="/" className="hover:underline">YourName</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5 ">
                        <a href="https://github.com/yourusername" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <span className="sr-only">GitHub</span>
                            <svg className="w-8 h-8 mx-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/yourusername" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-8 h-8 mx-8" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.5 0C1.12 0 0 1.12 0 2.5S1.12 5 2.5 5 5 3.88 5 2.5 3.88 0 2.5 0zM0 6h5v14H0V6zm7 0h4v2h.06c.56-1.06 1.94-2.18 4-2.18 4.28 0 5.07 2.82 5.07 6.49V20h-5v-6.31c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.34V20H7V6z" />
                            </svg>
                        </a>
                        <a href="mailto:youremail@example.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <span className="sr-only">Email</span>
                            <svg className="w-8 h-8 mx-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 13.065 1.5 6.75V6h21v.75L12 13.065zM1.5 8.25v9.75h21V8.25l-10.5 6.3-10.5-6.3z" />
                            </svg>
                        </a>
                    </div>
                </div>
           </div>
        </footer>
    );
}
