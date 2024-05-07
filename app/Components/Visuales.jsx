'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export function Linea(){
    useEffect(()=>{
        AOS.init({duration:500})
    },[])
    return(
        <div className="flex w-full justify-center">
            <div className="w-[90%] h-[0.1rem] bg-white rounded-full"></div>
        </div>
    )
}