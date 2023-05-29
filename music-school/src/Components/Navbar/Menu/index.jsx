import React, { useContext } from 'react';
import NavbarItem from '../NavbarItem';
import { Context } from '../../../Context';

function Navbar() {
  const {open, setOpen} = useContext(Context)
  console.log(open);
  // console.log(context);
  return (
    <nav className='mt-5 flex justify-between w-full items-center'>
      <div className='flex items-center m-auto lg:m-0'>
      <img className='w-20 h-20' src="src\assets\clave-sol.png" alt="" />
      <h1 className='text-2xl font-bold text-red-600'>Ultra School</h1>
      </div>
      <ul className='hidden gap-5 px-10 text-lg font-medium lg:flex'>
        <NavbarItem path="/" title="Inicio"/>
        <NavbarItem path="/carreras" title="Carreras"/>
        <NavbarItem path="/cursos-introductorios" title="Cursos Introductorios"/>
        <NavbarItem path="/sedes" title="Sedes"/>
        <NavbarItem path="/alumnos" title="Alumnos"/>
        <NavbarItem path="/contacto" title="Contacto"/>
      </ul>
      <span 
      className='cursor-pointer text-3xl mr-5 lg:hidden'
      onClick={()=>{
        setOpen(!open)
      }}
      >
      <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
      </span> 
      <ul className={`bg-white border border-black rounded-lg p-4 flex flex-col gap-1 fixed top-32 h-64 w-60 transition-all duration-300 justify-center text-xl font-medium z-10 ${open ? "right-2" : "right-[-1000px]"}`}>
        <NavbarItem path="/" title="Inicio"/>
        <NavbarItem path="/carreras" title="Carreras"/>
        <NavbarItem path="/cursos-introductorios" title="Cursos Introductorios"/>
        <NavbarItem path="/sedes" title="Sedes"/>
        <NavbarItem path="/alumnos" title="Alumnos"/>
        <NavbarItem path="/contacto" title="Contacto"/>
      </ul>
    </nav>
  )
}

export default Navbar