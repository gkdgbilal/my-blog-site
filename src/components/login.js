import React from "react";

export default function Login() {
    return (
        <div className="w-full md:max-w-md mt-6">
            <div className="card bg-white shadow-md rounded-lg px-4 py-4 mb-6 ">
                <form action="#">
                    <div className="flex items-center justify-center">
                        <h2 className="text-2xl font-bold tracking-wide">
                            Welcome back
                        </h2>
                    </div>
                    <h2 className="text-xl text-center font-semibold text-gray-800 mb-2">
                        Sign In
                    </h2>
                    <input type="text"
                           className="rounded px-4 w-full py-1 bg-gray-200 border border-gray-400 mb-6 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none"
                           placeholder="Email Address"/>
                    <input type="password"
                           className="rounded px-4 w-full py-1 bg-gray-200 border border-gray-400 mb-4 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none"
                           placeholder="Password"/>
                    <div className="flex items-center justify-between">
                        <a href="#" className="text-gray-600 hover:text-gray-900">Forget Password?</a>
                        <button className="bg-gray-800 hover:bg-gray-700 text-gray-200  px-2 py-1 rounded">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}