'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { Linea } from "../Components/Components";

export default function About() {
  const ContactForm = () => {
    // Estados para los campos del formulario y errores
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      message: ''
    });

    // Función para manejar cambios en los campos del formulario
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
      e.preventDefault();
      // Validación de campos
      const { name, email, message } = formData;
      let errors = {};
      if (!name) {
        errors.name = 'El nombre es obligatorio';
      }
      if (!email) {
        errors.email = 'El correo electrónico es obligatorio';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'El correo electrónico no es válido';
      }
      if (!message) {
        errors.message = 'El mensaje es obligatorio';
      }

      // Si hay errores, actualiza el estado de errores
      if (Object.keys(errors).length > 0) {
        setErrors(errors);
      } else {
        // Si no hay errores, podrías enviar el formulario
        console.log('Formulario enviado:', formData);
        // Limpiar campos
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setErrors({
          name: '',
          email: '',
          message: ''
        });
      }
    };

    return (
      <>      
        <form onSubmit={handleSubmit} className="mx-auto p-4 bg-zinc-900 rounded-md shadow-lg" data-aos='zoom-in'>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-bold mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold mb-2">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-bold mb-2">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
          </div>
          <button type="submit" className="bg-cyan-600 transition ease-in-out delay-100 hover:bg-pink-400 hover:shadow-md hover:shadow-cyan-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Enviar</button>
        </form>
      </>
    )
  }
  
  return (
    <>
      <main className="flex justify-center items-center p-24">
        <div className="hidden lg:flex items-center w-1/2 rounded-full font-bold">
          <Image
            src={'/img/clove.png'}
            alt="Omen"
            width={1000}
            height={1000}
            className='z-30 w-[45rem]'
            data-aos='zoom-in'
          />
        </div>
        {/* Contenedor en columnas */}
        <div className="flex flex-col w-full lg:w-1/2 justify-start items-start h-full">
          <div className="flex justify-end items-start h-full w-full pt-10">
            <div className="z-20">
              <div className="flex w-full justify-start font-bold text-6xl text-pink-400" data-aos='zoom-in'>
                <button className="hover:[text-shadow:_6px_-1px_12px_rgb(157_50_77)] hover:text-pink-200 transition ease-in-out delay-75">
                  Discover
                </button>
              </div>
              <div className="flex w-full justify-start font-bold text-6xl" data-aos='zoom-in'>
                Perú
              </div>
              <div className="flex w-full justify-start font-bold text-4xl text-cyan-500 pb-4" data-aos='zoom-in'>
                <button className="hover:[text-shadow:_6px_-1px_12px_rgb(68_215_235)] hover:text-cyan-200 transition ease-in-out delay-75">Technologies</button>
              </div>
              {/* Misión */}
              <div className="flex flex-col justify-center w-full font-normal text-justify my-4" data-aos='zoom-in'>
                <div className="flex justify-center font-bold text-4xl">
                  <h1>Misión</h1>
                </div>
                <p className="text-justify mt-4">Nuestra misión es proporcionar soluciones tecnológicas innovadoras y de alta calidad que impulsen el rendimiento y la productividad de nuestros clientes. Nos comprometemos a ofrecer una amplia gama de productos de última generación, respaldados por un excepcional servicio al cliente, para satisfacer las necesidades de todos los entusiastas de la tecnología y profesionales exigentes.</p>
              </div>
              {/* Visión */}
              <div className="flex flex-col justify-center w-full font-normal text-justify my-4" data-aos='zoom-in'>

                <div className="flex justify-center font-bold text-4xl">
                  <h1>Visión</h1>
                </div>
                <p className="text-justify mt-4">Nuestra visión es convertirnos en el principal proveedor de soluciones tecnológicas en el mercado, reconocido por nuestra excelencia en productos, servicio al cliente y compromiso con la innovación. Nos esforzamos por ser líderes en la industria, superando constantemente las expectativas y anticipándonos a las tendencias emergentes para proporcionar a nuestros clientes la mejor experiencia tecnológica posible.</p>
              </div>
              {/* Formulario */}
              <div className="flex flex-col justify-center w-full font-normal text-justify my-4" data-aos='zoom-in'>
                <Linea/>
                <div className="flex justify-center font-bold text-4xl mt-4">
                  <h1>Contáctanos</h1>
                </div>
              </div>
              <ContactForm/>
              {/* Formulario */}
              <div className="flex flex-col justify-center w-full font-normal text-justify my-4" data-aos='zoom-in'>
                <Linea/>
                <div className="flex justify-center font-bold text-4xl mt-4">
                  <h1>Ubícanos</h1>
                </div>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15606.580942716062!2d-75.2085337!3d-12.0679126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e964e932bd0ef%3A0xcabe1dc79b43181!2sDiscover%20Per%C3%BA%20Technologies!5e0!3m2!1ses!2spe!4v1715124844712!5m2!1ses!2spe" className="w-full rounded-lg border-2 border-white" data-aos='zoom-in' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              
            </div>
          </div>
        </div>
      </main>

    </>
  )
}