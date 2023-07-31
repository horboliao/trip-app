import React from 'react';
import { BiSearch } from 'react-icons/bi';

function SearchBar() {
    return (
        <div className="flex items-center bg-gray-100 rounded-lg p-3 m-5">
            <span className="w-5 h-5 mr-2 text-black">
                <BiSearch />
            </span>
            <input
                className="bg-transparent outline-none flex-1 placeholder-black"
                type="text"
                placeholder="Search your trip"
            />
        </div>
    );
}

export default SearchBar;
