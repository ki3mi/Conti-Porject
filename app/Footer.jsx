export default function Footer(){
    return(
        <div className="flex flex-col w-full pt-10 rounded-t-3xl">
            <div className="flex justify-center w-full shadow-lg shadow-cyan-100">                
                <div className="w-[90%] h-1 bg-white rounded-full shadow-lg shadow-cyan-100"></div>
            </div>
            <div className="flex flex-col w-full justify-center items-center h-40">
                    {/* Linea */}
                    <div className="flex justify-around w-full items-center mb-6">
                        {/* Logo */}
                        <div className="flex justify-center items-center h-full font-bold">
                            <p className="px-2">Logo</p>
                            <p className="font-light">&copy; 2024 Grupo 2</p>
                        </div>
                        {/* Contactanos */}
                        <div className="flex flex-col justify-center items-center h-full">
                            <button>Contacto@gmail.com</button>
                            <button>(+51) 999 999 999</button>
                            <button>Av. Calle principal 572</button>
                        </div>
                    </div>
            </div>        
        </div>
    )
}