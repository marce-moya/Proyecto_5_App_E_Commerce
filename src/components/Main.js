import { Link } from 'react-router-dom'
import BackgroundJumbotron from './../assets/pet_care.png'
import ListProducts from './ListProducts'

export default function Main() {
  return (
    <>
      <main classNameName="mt-10">
        <div>
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img className="h-full w-full object-cover" src={ BackgroundJumbotron } alt="¿Qué necesitas para cuidar a tu mascota?" />
                  <div className="absolute inset-0 bg-yellow-200 mix-blend-multiply"></div>
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-oswald sm:text-5xl lg:text-6xl">
                    <span className="block text-black">Todo lo que necesitas para tu mascota</span>
                    <span className="block text-black">¡lo tenemos aquí!</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-black sm:max-w-3xl">
                    Tenemos un amplio surtido de productos, realizamos envíos a toda la región.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none flex justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5">
                      <Link to="/catalogo">
                        <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base text-white font-oswald bg-blue-300 hover:bg-blue-100 sm:px-8">
                          Ver catálogo
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      
      <ListProducts title="Conoce nuestros productos" />
      
    </>
  )
}