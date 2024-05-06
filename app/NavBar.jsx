'use client'
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const [menu, setMenu] = useState(false)
    
    const Lista = () => {

        const LinkStyle = 'px-6 transition ease-in-out delay-50 hover:[text-shadow:_6px_-1px_12px_#08C2CE] hover:scale-105 font-bold'
        return (
            <>
                <Link href='/' className={LinkStyle} >Inicio</Link>
                <Link href='/Tienda' className={LinkStyle}>Tienda</Link>
                <Link href='/About' className={LinkStyle}>Nosotros</Link>
            </>
        )
    }
    return (
        <>
            {/* Menu desktop */}
            <div className='flex fixed justify-between items-center w-full px-4 py-6'>
                {/* Logo */}
                <div className="font-bold pl-6">
                    Logo
                </div>
                {/* Menu */}
                <div className='flex'>
                    <Lista/>
                </div>
                {/* User */}
                <div className='font-bold pr-6'>
                    Login
                </div>
            </div>
            
            {/* Menu Responsive */}
        </>
    )
}