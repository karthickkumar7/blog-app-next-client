import React from 'react';

const index = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">Login</h1>
            <form className="mt-[50px] flex flex-col space-y-4">
                <input
                    id="email"
                    type="text"
                    placeholder="Email"
                    className="outline-none rounded px-4 py-2 border w-[400px] focus:border-blue-500"
                />

                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="outline-none rounded px-4 py-2 border w-[400px] focus:border-blue-500"
                />

                <button
                    type="submit"
                    className="w-[400px] px-4 py-2 rounded bg-blue-600 text-white hover:brightness-110 hover:shadow"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default index;
