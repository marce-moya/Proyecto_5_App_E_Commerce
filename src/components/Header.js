import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/User/UserContext';
import GatoLogo from './../assets/log_pet_shop.png';
import LayoutContext from './../context/Layout/LayoutContext';
import Sidebar from './Sidebar';

export default function Header() {
    const ctxLayout = useContext(LayoutContext);
    const ctxUser = useContext(UserContext);

    if (!ctxLayout) {
        console.error('LayoutContext is null');
        return null;
    }

    if (!ctxUser) {
        console.error('UserContext is null');
        return null;
    }

    const { setMobileNavOn, toggleMobileSidebar } = ctxLayout;
    const { logoutUser } = ctxUser;

    return (
        <header> 
            <div className="bg-white">
                {setMobileNavOn ? (
                    <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>
                        <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button onClick={toggleMobileSidebar} type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400">
                                    <span className="sr-only">Cerrar menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                <div className="flow-root" onClick={toggleMobileSidebar}>
                                    <Link to="/">
                                        <img className="h-8 w-auto" src={GatoLogo} alt="Pets LATAM" />
                                    </Link>
                                </div>
                                <div className="flow-root" onClick={toggleMobileSidebar}>
                                    <Link to="/catalogo" className="-m-2 p-2 block font-medium text-gray-900">
                                        Catálogo
                                    </Link>
                                </div>
                            </div>
                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                {ctxUser.user?.name ? (
                                    <div className="flow-root" onClick={toggleMobileSidebar}>
                                        <Link to="/perfil" className="-m-2 p-2 block font-medium text-gray-900">
                                            Mi perfil
                                        </Link>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flow-root" onClick={toggleMobileSidebar}>
                                            <Link to="/iniciar-sesion" className="-m-2 p-2 block font-medium text-gray-900">
                                                Iniciar sesión
                                            </Link>
                                        </div>
                                        <div className="flow-root" onClick={toggleMobileSidebar}>
                                            <Link to="/crear-cuenta" className="-m-2 p-2 block font-medium text-gray-900">
                                                Crear cuenta
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="border-t border-gray-200 py-6 px-4">
                                <div className="-m-2 p-2 flex items-center">
                                    <img src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/CL.svg" alt="" className="w-5 h-auto block flex-shrink-0" />
                                    <span className="ml-3 block text-base font-medium text-gray-900">CLP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
                <header className="relative bg-white">
                    <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="border-b border-gray-200">
                            <div className="h-16 flex items-center">
                                <button onClick={toggleMobileSidebar} type="button" className="bg-orange p-2 rounded-md text-gray-400 lg:hidden">
                                    <span className="sr-only">Abrir menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                                <Link to="/" className="ml-4 mr-4 flex lg:ml-0">
                                    <img className="h-8 w-auto" src={GatoLogo} alt="Pets LATAM" />
                                    <span className="font-medium italic mt-1">PETSWORLD</span>
                                </Link>
                                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                                    <div className="h-full flex space-x-8">
                                        <div className="flex">
                                            <div className="relative flex">
                                                <Link to="/catalogo" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                                                    Catálogo de Productos
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto flex items-center">
                                    <div className="hidden lg:ml-8 lg:flex">
                                        <div className="mx-10 text-gray-700 hover:text-gray-800 flex items-center">
                                            <img src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/CL.svg" alt="" className="w-5 h-auto block flex-shrink-0" />
                                            <span className="ml-3 block text-sm font-medium">CLP</span>
                                        </div>
                                    </div>
                                    {ctxUser.user?.name ? (
                                        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                            <Link to="/perfil" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                Tu perfil
                                            </Link>
                                            <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                                            <button onClick={logoutUser} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                Cerrar sesión
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                            <Link to="/iniciar-sesion" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                Iniciar sesión
                                            </Link>
                                            <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                                            <Link to="/crear-cuenta" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                Crear cuenta
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <Sidebar />
            </div>
        </header>
    );
}