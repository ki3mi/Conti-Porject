'use client'
import Image from "next/image";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react";
import { CheckInput, RangeInput, SearchBar, TextLabel } from "../Components/Components";
import { Product } from "../Components/Products";
import PorductModal from "../Components/ProductModal";

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
      link: 'https://oechsle.vteximg.com.br/arquivos/ids/2763204-1000-1000/image-1201c922ae1049428a811bf61654a199.jpg?v=637495001493100000',
      title: 'Mouse Logitech',
      price: 120,
      discount: 20
    },
    {
      id: 3,
      link: 'https://www.infotec.com.pe/76851-large_default/teclado-gamer-redragon-kumara-k552-rgb-sp-led-rgb-usb-switch-blue-black.jpg',
      title: 'Teclado',
      price: 200,
      discount: 10
    },
    {
      id: 4,
      link: 'https://ae01.alicdn.com/kf/S8d99bda5430441bd8fd3468d20e9c0c18/Xiaomi-Monitor-de-juegos-Redmi-G24-23-8-pulgadas-165hz-frecuencia-de-actualizaci-n-respuesta-de.jpg',
      title: 'Monitor',
      price: 600,
      discount: 10
    },
    {
      id: 5,
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DgCSq5TZ8flBeEDGYz5xPKKHYVF2tnD0Sr63N8f9lQ&s',
      title: 'Cooler',
      price: 150,
      discount: 10
    },
    {
      id: 6,
      link: 'https://www.techpowerup.com/img/8Gpg4Jea6z5oMjMy.jpg',
      title: 'Case',
      price: 250,
      discount: 10
    },
    {
      id: 7,
      link: 'https://gamerbit.pe/wp-content/uploads/2022/09/AMD-Ryzen-5-7600X-5.3GHz.jpg',
      title: 'Procesador',
      price: 1200,
      discount: 10
    },
    {
      id: 8,
      link: 'https://coolboxpe.vtexassets.com/arquivos/ids/347606/VD12GBRX7700XTG_1.jpg?v=638442175116070000',
      title: 'Rx 7700 xt',
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
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectProduct, setSelectProduct] = useState(null)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openProductModal = (data) => {
    setSelectProduct(data)
    openModal()
  }
  
  useEffect(() => {
    AOS.init({ duration: 500 })
  }, [])
  return (
    <>
    { isModalOpen && (
      <PorductModal isOpen={isModalOpen} onClose={closeModal} >
        {selectProduct && (
        <Product 
          link={selectProduct.link}
          title={selectProduct.title}
          price={selectProduct.price}
          discount={selectProduct.discount}
        />)}
      </PorductModal>
    )}
      <div className="flex flex-col gap-10 justify-center w-full h-fit items-center pt-24 pb-10 px-10">
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
              {/* <button className="py-2 px-6 bg-red-400 text-white rounded-full" onClick={openModal}>Abrir</button> */}
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
                    openModal={() => openProductModal(product)}
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
      </div>
    </>
  );
}
