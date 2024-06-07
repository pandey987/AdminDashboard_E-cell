import React from "react";
const RegPopup = (props) => {
    return (props.trigger) ? (
        <div className="w-full fixed top-0">
            <div onClick={() => props.closePopup()} className="w-full h-dvh bg-black opacity-60 absolute top-0 flex justify-center"></div>
            <div className="w-full flex justify-center ">
                <div className="bg-gray-400 w-5/6 absolute h-fit p-2 flex-col sm:w-5/6 md:w-3/4 lg:w-1/2 rounded-xl animate-fall  translate-y-80 ">
                    <div className="w-full flex justify-between ">
                        <div></div>
                        <h1 className="text-2xl">{props.eventName}</h1>
                        <button onClick={() => props.closePopup()} type="button" class="bg-gray-400 rounded-md p-2 inline-flex items-center justify-center text-white-800 hover:text-black-500 ">
                            <span class="sr-only">Close menu</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <form className="px-4 w-full mx-auto">
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Id</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact No.</label>
                            <input type="contact" id="contact" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    </form>

                </div>
            </div>
        </div>
    ) : "";
}

export default RegPopup;