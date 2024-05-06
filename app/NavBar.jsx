'use client'
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const [menu, setMenu] = useState(false)
    
    const Lista = () => {
        const [tienda, setTienda] = useState(false)
        const [about, setAbout] = useState(false)
        const [home, setHome] = useState(true)

        const changeColor = (state) => {
            switch (state){
                case 1:
                    setHome(true)
                    setAbout(false)
                    setTienda(false)
                    break
                case 2:
                    setAbout(true)
                    setHome(false)
                    setTienda(false)
                    break
                case 3:
                    setTienda(true)
                    setHome(false)
                    setAbout(false)
            }
        }
        const LinkStyle = 'px-6 transition ease-in-out delay-50 hover:[text-shadow:_6px_-1px_12px_#08C2CE] hover:scale-105 font-bold'
        return (
            <>
                <Link href='/' className={`${home ? 'text-cyan-500 hover:text-white' : ''} ${LinkStyle}`} onClick={() => changeColor(1)}>Inicio</Link>
                <Link href='/Tienda' className={`${tienda ? 'text-cyan-500 hover:text-white' : ''} ${LinkStyle}`}  onClick={() => changeColor(3)}>Tienda</Link>
                <Link href='/About' className={`${about ? 'text-cyan-500 hover:text-white' : ''} ${LinkStyle}`}  onClick={() => changeColor(2)}>Nosotros</Link>
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