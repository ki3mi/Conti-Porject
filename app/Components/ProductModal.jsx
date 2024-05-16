'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function PorductModal({ isOpen, onClose, children }) {    
    if (!isOpen) return null
    return (
        <div className="fixed flex flex-col justify-center w-full min-h-screen items-center text-white z-50">
            <div className="absolute w-full h-full bg-black opacity-75">

            </div>
            <div className="absolute flex flex-col justify-center items-center">
                {children}
                <button className="bg-red-700 py-2 px-6 rounded-full" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}