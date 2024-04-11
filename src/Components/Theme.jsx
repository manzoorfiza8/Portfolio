"use client";
import React from 'react';
import { useEffect,useState } from 'react';
import {FaMoon} from "react-icons/fa"
import {BsSunFill} from "react-icons/bs"
export default function Theme() {
    const [darkMode ,setDarkmode] =useState(true)  
useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme","dark")
    }
    else{
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme","light") 
    }
}, [darkMode]);      return (
    <div className='realative w-16 h-8 flex items-center dark:bg-gray-900 
    bg-teal-500 curser-pointer rounded-full p-1' 
     onClick={() =>setDarkmode(!darkMode)} >
     <FaMoon className='text-white' size={18} />
    <div className='relative bg-white dark:bg-medium w-6 h-6  pl-2 pr-84  rounded-full shadow-md transform
     transition-transform duration-900' style={darkMode ? {left :"18px"}:{right:"18px"}}>
    </div>
    <BsSunFill className='ml-auto text-yellow-400' size={18} />
    </div>
  )
}

