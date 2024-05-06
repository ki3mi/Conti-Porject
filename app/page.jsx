'use client'
import Image from "next/image";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    AOS.init({duration: 500})
  },[])
  return (
    <>
      <main className="flex justify-center h-screen items-center p-24">
        <div className="flex items-center w-1/2 rounded-full font-bold">
          {/* <p className="[text-shadow:_6px_-1px_12px_#08C2CE]">Inicio</p> */}
            <Image
              src={'/img/clove.png'}
              alt="Omen"
              width={450}
              height={450}
              className="z-30 w-[450px] drop-shadow-lg shadow-cyan-200"
              data-aos='zoom-in'
            />
        </div>
        <div className="hidden lg:flex justify-end items-start h-full w-1/2 pt-10" data-aos='zoom-in'>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam natus aliquam eveniet, vitae consequuntur, libero fugit harum rerum aperiam voluptatibus illum. Amet dolor eius voluptatibus quisquam veritatis ut sit cumque?
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
