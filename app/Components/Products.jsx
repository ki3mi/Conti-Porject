'use client'
import Image from "next/image"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"
import Link from "next/link"

export function Oferta({ link }) {
    useEffect(() => {
        AOS.init({ duration: 500 })
    }, [])
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
                <p className="">Descripción del producto generico. Miss esto no es copia</p>
                <Link href={'/Tienda'} className="py-2 px-6 bg-white text-black font-bold rounded-full hover:scale-105 mt-2">Comprar</Link>
            </div>
        </div>
    )
}

export function Product({ link, title, price, discount }) {
    const [cant, setCant] = useState(1)
    const total = price - (price * discount / 100)

    const increment = () => {
        if (cant < 20){
            setCant(cant + 1)
        }
    }
    const decrement = () => {
        if (cant > 1) {
            setCant(cant - 1)
        }
    }
    return (
        <div className="flex flex-col justify-center items-center w-60 bg-zinc-900 rounded-xl" data-aos='zoom-in'>
            <div className="bg-white w-full p-4 rounded-t-xl">
                <Image
                    src={link}
                    width={250}
                    height={250}
                    className="transition ease-in-out delay-150 hover:scale-105 cursor-pointer"
                />
            </div>
            <div className="flex flex-col justify-center items-center p-4">
                <p className="font-bold">{title}</p>
                <p className="">Descripción del producto generico. Miss esto no es copia</p>
                <div className="flex gap-6">
                    <del>S/.{price}</del><p className="font-bold">S/. {total}</p>
                </div>
                <div className="flex justify-center gap-2 items-center mt-2">
                    <button className="py-2 px-4 bg-cyan-400 text-zinc-900 font-bold rounded-full shadow-md hover:bg-white hover:shadow-pink-400 transition ease-in-out delay-100">Comprar</button>
                    <div className="flex justify-center items-center border rounded-full bg-white text-zinc-900 font-bold shadow-md hover:shadow-cyan-400 transition ease-in-out delay-100">
                        <button className="flex justify-center items-center w-8 h-8 font-normal" onClick={() => decrement()}>-</button>
                        <input
                            type="text"
                            className="flex justify-center items-center text-center appearance-none w-8 h-8 bg-transparent border-x"
                            value={cant}
                            readOnly
                        />
                        <button className="flex justify-center items-center w-8 h-8 font-normal" onClick={() => increment()}>+</button>
                    </div>

                </div>
            </div>
        </div>
    )
}