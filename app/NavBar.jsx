'use client'
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const [menu, setMenu] = useState(false)
    const OpenMenu = () => {
        if (menu) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }

    const Lista = () => {
        const LinkStyle = 'py-4 md:px-6 transition ease-in-out delay-75 hover:[text-shadow:_6px_-1px_12px_rgb(157_23_77)] hover:scale-105 font-bold'
        return (
            <>
                <Link href='/' className={LinkStyle} onClick={() => setMenu(false)}>Inicio</Link>
                <Link href='/Tienda' className={LinkStyle} onClick={() => setMenu(false)}>Tienda</Link>
                <Link href='/About' className={LinkStyle} onClick={() => setMenu(false)}>Nosotros</Link>
            </>
        )
    }
    return (
        <>
            {/* Menu desktop */}
            <div className='hidden md:flex fixed justify-between items-center w-full py-2 z-40 bg-zinc-900 shadow-xl shadow-pink-800'>
                {/* background Color */}
                {/* <div className="absolute flex w-full justify-center">
                    <div className="absolute flex w-[98%] h-[0.1rem] bg-white translate-y-[2.25rem] rounded-full"></div>
                </div> */}
                <div className="absolute flex w-full h-full opacity-90 blur-sm z-10">

                </div>
                {/* Logo */}
                <div className="font-bold pl-6 z-40">
                    <button className="hover:[text-shadow:_6px_-1px_12px_rgb(68_215_235)] hover:text-white transition ease-in-out delay-75">
                        Logo
                    </button>
                </div>
                {/* Menu */}
                <div className='flex z-40'>
                    <Lista />
                </div>
                {/* User */}
                <div className='font-bold pr-6 z-40 text-pink-400'>
                    <button className="hover:[text-shadow:_6px_-1px_12px_rgb(157_23_77)] hover:text-white transition ease-in-out delay-75">
                        Login   
                    </button>
                </div>
            </div>

            {/* Menu Responsive */}
            <div className={`${menu ? 'hidden' : ''} flex md:hidden fixed p-4`}>
                <svg x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" onClick={() => OpenMenu()}>
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z" fill="white"></path>
                </svg>
            </div>
            <div className={`${menu ? '' : 'hidden'} bg-black w-full h-screen fixed z-40 p-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" onClick={() => OpenMenu()}>
                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" fill="white"></path>
                </svg>
                <div className="flex flex-col w-full h-screen justify-center items-center">
                    <Lista/>
                </div>
            </div>
        </>
    )
}