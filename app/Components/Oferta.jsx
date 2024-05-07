'use client'
import Image from "next/image"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import Link from "next/link"

export default function Oferta({link}) {
    useEffect(()=>{
        AOS.init({duration: 500})
    },[])
    return (
        <div className="flex flex-col justify-center items-center w-60 bg-zinc-900 rounded-xl" data-aos='zoom-in'>
            <div className="bg-white w-full p-4 rounded-t-xl">
                <Image
                    src={link}
                    width={250}
                    height={250}
                />
            </div>
            <div className="flex flex-col justify-center items-center p-4">
                <p className="font-bold">PC Gamer</p>
                <p className="font-bold">20% de descuento</p>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link href={'/Tienda'} className="py-2 px-6 bg-white text-black font-bold rounded-full hover:scale-105 mt-2">Comprar</Link>
            </div>
        </div>
    )
}