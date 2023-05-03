import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <main className="p-4 w-full border-b mb-[50px]">
            <header className="max-w-4xl mx-auto flex justify-between items-center">
                <div>
                    <h2 className="text-4xl font-bold">
                        <Link href={'/'}>Blog</Link>
                    </h2>
                </div>
                <nav>
                    <ul className="flex gap-[15px]">
                        <li>
                            <Link href={'/login'}>Login</Link>
                        </li>
                        <li>
                            <Link href={'/register'}>Register</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </main>
    );
};

export default Header;
