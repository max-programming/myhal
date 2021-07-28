import React from 'react';
import { UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Link } from 'react-router-dom'
const Navbar = () => {

    return (
        <div className="p-4 items-center md:px-24 flex flex-row bg-gray-50  border-gray-200 border-b-2">
            <Link to="/dashboard" className="w-1/4 mr-auto ml-2">
                <h1 className="font-extrabold text-3xl text-gray-600">myhal</h1>
            </Link>

            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <Link to="/signin">
                    <button className="w-32 bg-pink-400 hover:bg-pink-500 border-white border-2 text-white rounded-lg p-2 px-6 text-xl font-semibold">Sign in</button>
                </Link>
            </SignedOut>
        </div>
    );
}

export default Navbar;