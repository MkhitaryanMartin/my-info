import { Search } from 'lucide-react';

import React from 'react';
import { Input } from '../ui/input';

const SearchInput = ({
  placeholder="",
   className="", 
   classNameContainer=""
  }:{placeholder?:string, className?: string, classNameContainer?: string}) => {
    return (
        <div className={`relative flex items-center border border-gray-300  px-[16px] rounded-xl w-[395px] ${classNameContainer}`}>
        <div className="absolute left-2 text-gray-500">
        <Search />
        </div>
        <input
        type='search'
          placeholder={placeholder}
          className={`pl-8 py-2 w-full border-none outline-none
             rounded-md ml-[24px] focus:outline-none focus:border-none active:outline-none active:border-none
             ${className} `}

        />
      </div>
    );
};

export default SearchInput;