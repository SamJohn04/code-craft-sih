import Link from "next/link"
export default function Topbar() {
    return (
        <div id="topbar">
            <nav className="bg-white border-gray-200 dark:bg-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    <a className="flex items-center">
                        <img
                            src="\Project Orbit.png"
                            className="h-16"
                            alt="Flowbite Logo"
                        />
                    </a>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-800 dark:text-gray-800"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-[170%] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for projects, universities"
                        />
                    </div>
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            data-collapse-toggle="navbar-search"
                            aria-controls="navbar-search"
                            aria-expanded="false"
                            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <button
                            data-collapse-toggle="navbar-search"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-search"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-search"
                    >
                        {/* Your navigation buttons */}
                        <ul className="flex flex-col px-6 mt-4 absolute  font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
                            <li>
                                <Link
                                    href="/"
                                    className="block py-2 pl-3 pr-4 text-black bg-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="\feed"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            
        </div>

    )
}