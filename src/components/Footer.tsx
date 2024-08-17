import React from "react";

function Footer() {
    return (
        <footer className="bg-[#e6e6e6] z-10">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-around items-center">
                    <div className="mb-6 md:mb-0 flex h-full justify-center w-full xl:w-32 items-center border">
                        <a
                            href="/"
                            className="flex border w-full h-full justify-center items-center text-4xl text-center font-bold text-black"
                        >
                            <h1 className="xl:text-7xl text-5xl">10.1</h1>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-black">
                                Link
                            </h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://elearn.citrakasih.sch.id/"
                                        className="hover:underline font-sans"
                                    >
                                        Elearn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-black">
                                Social
                            </h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://www.instagram.com/x.onecb/"
                                        className="hover:underline font-sans"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-black">
                                Tool
                            </h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://nextjs.org/"
                                        className="hover:underline font-sans"
                                    >
                                        NextJs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://tailwindcss.com/"
                                        className="hover:underline font-sans"
                                    >
                                        Tailwindcss
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between flex flex-col sm:my-0 my-2">
                    <span className="text-sm text-center text-gray-500">
                        Citra Indah | Jalan Raya Jonggol - Cileungsi N Km, 23,2
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
