import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen justify-center items-center p-24">
        <div className="flex justify-center items-center p-2 rounded-full font-bold">
          <p className="[text-shadow:_6px_-1px_12px_#08C2CE]">Hola Mundo</p>
        </div>
      </main>
      <main className="flex min-h-screen justify-center items-center p-24">
        <div className="flex justify-center items-center p-2 rounded-full font-bold">
          <p className="[text-shadow:_6px_-1px_12px_#08C2CE]">Inicio</p>
        </div>
      </main>  
    </>
  );
}
