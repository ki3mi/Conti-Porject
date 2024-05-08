'use client'
import Image from "next/image";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { CheckInput, RangeInput, SearchBar, TextLabel } from "../Components/Components";
import { Product } from "../Components/Products";

export default function Store() {
  const products = [
    {
      id: 1,
      link: '/img/Pc.png',
      title: 'Pc Gamer',
      price: 2500,
      discount: 10
    },
    {
      id: 2,
      link: '/img/Pc.png',
      title: 'Mouse Logitech',
      price: 120,
      discount: 20
    },
    {
      id: 3,
      link: '/img/Pc.png',
      title: 'Teclado',
      price: 200,
      discount: 10
    },
    {
      id: 4,
      link: '/img/Pc.png',
      title: 'Monitor',
      price: 600,
      discount: 10
    },
    {
      id: 5,
      link: '/img/Pc.png',
      title: 'Cooler',
      price: 150,
      discount: 10
    },
    {
      id: 6,
      link: '/img/Pc.png',
      title: 'Case',
      price: 250,
      discount: 10
    },
    {
      id: 7,
      link: '/img/Pc.png',
      title: 'Procesador',
      price: 1200,
      discount: 10
    },
    {
      id: 8,
      link: '/img/Pc.png',
      title: 'Gráfica',
      price: 2500,
      discount: 10
    },
    {
      id: 9,
      link: '/img/Pc.png',
      title: 'Pc Gamer',
      price: 2500,
      discount: 10
    },
    {
      id: 10,
      link: '/img/Pc.png',
      title: 'Pc Gamer',
      price: 2500,
      discount: 10
    }
  ]

  useEffect(() => {
    AOS.init({ duration: 500 })
  }, [])
  return (
    <>
      <main className="flex flex-col gap-10 justify-center w-full h-fit items-center pt-24 pb-10 px-10">
        {/* Título */}
        <p className="text-4xl font-bold">Tienda</p>
        {/* Sección de productos */}
        <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
          {/* Menú */}
          <div className="flex flex-col w-full justify-start items-start md:w-1/3 xl:w-1/4 p-4">
            <div className="flex justify-center w-full font-bold">Filtros</div>
            <TextLabel text={'Precio:'} />
            <RangeInput min={'S/.100'} max={'S/.8000'} text1={'500'} text2={'1000'} />
            <TextLabel text={'Stock:'} />
            <RangeInput min={'1'} max={'20'} text1={'5'} text2={'10'} />
            <TextLabel text={'Marca:'} />
            <div className="flex justify-center w-full">
              <div className="flex md:flex-col flex-wrap gap-2 justify-start w-[90%]">
                <span><CheckInput text={'AMD'} /></span>
                <span><CheckInput text={'NVIDIA'} /></span>
                <span><CheckInput text={'Ryzen'} /></span>
                <span><CheckInput text={'Intel'} /></span>
              </div>
            </div>
          </div>
          {/* Productos */}
          <div className="flex flex-col w-full md:w-2/3 xl:w-3/4">
            <div className="flex flex-col w-full">
              <p className="font-bold m-6">Tienda - Productos</p>
              <div className="flex justify-center w-full">
                <div className="w-[80%]">
                  <SearchBar />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 w-full my-6">
                {products.map((product) => (
                  <Product
                    key={product.id}
                    link={product.link}
                    title={product.title}
                    price={product.price}
                    discount={product.discount}
                  />
                ))}
              </div>
            </div>
            {/* Más */}
            <div className="flex justify-center w-full">
              <button className="flex text-center border-2 py-2 px-6 rounded-full font-bold transition ease-in-out delay-100 hover:bg-white hover:text-zinc-800 hover:shadow-lg hover:shadow-pink-400">Mostrar Más</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
