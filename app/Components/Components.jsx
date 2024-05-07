'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export function Linea() {
    useEffect(() => {
        AOS.init({ duration: 500 })
    }, [])
    return (
        <div className="flex w-full justify-center">
            <div className="w-[90%] h-[0.1rem] bg-white rounded-full"></div>
        </div>
    )
}

export function TextLabel({ text }) {
    return (
        <div className='flex w-[80%] border-white my-4'>
            {text}
        </div>
    )
}
export function RangeInput({min, max, text1, text2,}) {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <input type="range" className="w-[90%] bg-white rounded-full appearance-none cursor-pointer" />
            <div className="flex w-[80%] justify-between py-1">
                <span><span className='hidden lg:flex'>Min: </span>{min}</span>
                <span className='hidden lg:flex'>{text1}</span>
                <span>{text2}</span>
                <span><span className='hidden lg:flex'>Max: </span>{max}</span>
            </div>
        </div>
    )
}
export function CheckInput({text}){
    return(
        <div className='flex justify-start gap-4 w-full'>
            <input type="checkbox"/>
            <p>{text}</p>
        </div>
    )
}

export function SearchBar(){
    return(
        <div className="relative w-full">
            <input type="text" className='flex appearance-none w-full rounded-full px-6 py-1 text-white font-medium bg-transparent border-2 my-2 pl-10' placeholder="Buscar..."/>
            <svg className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        </div>
    )
}