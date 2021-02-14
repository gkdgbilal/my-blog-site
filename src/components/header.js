import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className=" bg-cover border-t-2 h-full">
            <div className="content px-8 py-2">
                <nav className="flex items-center justify-between">
                    {/*<a href="/" className="text-gray-500 font-bold text-2xl cursor-pointer">*/}
                    {/*    Home*/}
                    {/*</a>*/}
                    <div className="flex text-gray-500 font-bold text-2xl cursor-pointer">
                        <a href="/">
                            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                            </svg>
                        </a>
                    </div>
                    <div className="-mb-px flex justify-center">
                        <Link href="/">
                            <a className="no-underline text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-blue-300 uppercase tracking-wide font-bold text-xs py-3 mr-8">
                                Home
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="no-underline text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-blue-300 uppercase tracking-wide font-bold text-xs py-3 mr-8">
                                Products
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="no-underline text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-blue-300 uppercase tracking-wide font-bold text-xs py-3 mr-8">
                                Discounts
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="no-underline text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-blue-300 uppercase tracking-wide font-bold text-xs py-3 mr-8">
                                Customers
                            </a>
                        </Link>
                    </div>
                    <div className="auth flex justify-center">
                        <button
                            className="bg-transparent text-gray-500  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">
                            Sign in
                        </button>
                        <button
                            className="bg-gray-900 text-gray-200  py-2 px-3 rounded  hover:bg-gray-800 hover:text-gray-100">Sign
                            up for free
                        </button>
                    </div>
                </nav>
                {/*<div className="body mt-20 mx-8">*/}
                {/*    <div className="md:flex items-center justify-between">*/}
                {/*        <div className="w-full md:w-1/2 mr-auto">*/}
                {/*            <h1 className="text-4xl font-bold text-white tracking-wide">Brand</h1>*/}
                {/*            <h2 className=" text-2xl font-bold text-white tracking-wide">Welcome <span*/}
                {/*                className="text-gray-800"> Aboard</span></h2>*/}
                {/*            <p className="text-gray-300">*/}
                {/*                Lorem ipsum dolor sit amet consectetur adipisicing elit.*/}
                {/*            </p>*/}
                {/*            <span className="text-white">Create New Account?*/}
                {/*                <a href="#" className="text-gray-900 text-lg ml-2 font-bold">Sign Up</a></span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </header>
    )
}