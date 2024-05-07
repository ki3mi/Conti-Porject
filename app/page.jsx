'use client'
import Image from "next/image";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Oferta from "./Components/Oferta";
import { Linea } from "./Components/Visuales";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 500 })
  }, [])
  return (
    <>
      <main className="flex justify-center items-center p-24">
        <div className="hidden lg:flex items-center w-1/2 rounded-full font-bold">
          <Image
            src={'/img/clove.png'}
            alt="Omen"
            width={450}
            height={450}
            className="z-30 w-[450px] drop-shadow-lg shadow-cyan-200"
            data-aos='zoom-in'
          />
        </div>
        {/* Contenedor en columnas */}
        <div className="flex flex-col w-full lg:w-1/2 justify-start items-start h-full">
          <div className="flex justify-end items-start h-full w-full pt-10" data-aos='zoom-in'>
            <div className="z-40">
              <div className="flex w-full justify-start font-bold text-6xl text-pink-400">
                <button className="hover:[text-shadow:_6px_-1px_12px_rgb(157_50_77)] hover:text-pink-200 transition ease-in-out delay-75">
                  Discover
                </button>
              </div>
              <div className="flex w-full justify-start font-bold text-6xl">
                Perú
              </div>
              <div className="flex w-full justify-start font-bold text-4xl text-cyan-500 pb-4">
                <button className="hover:[text-shadow:_6px_-1px_12px_rgb(68_215_235)] hover:text-cyan-200 transition ease-in-out delay-75">Technologies</button>
              </div>
              <div className="flex justify-center w-full font-normal text-justify">
                Explora nuestro vasto catálogo de productos cuidadosamente seleccionados para satisfacer tus necesidades y deseos. Desde moda hasta tecnología, hogar y estilo de vida, tenemos todo lo que buscas en un solo lugar.
              </div>
            </div>
          </div>
          {/* Ofertas */}
          <span className="w-full mt-6" data-aos='zoom-in'><Linea/></span>
          <div className="flex justify-center w-full font-bold text-2xl" data-aos='zoom-in'>
            <p>Ofertas de la semana</p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 w-full h-fit mt-6">
            <Oferta link={'/img/Pc.png'}/>
            <Oferta link={'/img/Pc.png'}/>
            <Oferta link={'/img/Pc.png'}/>
          </div>
          <span className="w-full mt-6" data-aos='zoom-in'><Linea/></span>
          <div className="flex flex-wrap justify-center items-center gap-6 w-full h-fit mt-6 rounded-lg p-6" data-aos='zoom-in'>
            <Image
              src={'/img/intel.png'}
              width={1000}
              height={500}
              className="transition ease-in-out delay-100 w-40 grayscale-0 hover:grayscale hover:scale-105"
            />
            <Image
              src={'/img/ryzen.png'}
              width={1000}
              height={500}
              className="transition ease-in-out delay-100 w-40 grayscale-0 hover:grayscale hover:scale-105"
            />
            <Image
              src={'/img/radeon.png'}
              width={1000}
              height={500}
              className="transition ease-in-out delay-100 w-40 grayscale-0 hover:grayscale hover:scale-105"
            />
            <Image
              src={'/img/nvidia.png'}
              width={1000}
              height={500}
              className="transition ease-in-out delay-100 w-40 grayscale-0 hover:grayscale hover:scale-105"
            />
          </div>
        </div>
      </main>
    </>
  );
}
