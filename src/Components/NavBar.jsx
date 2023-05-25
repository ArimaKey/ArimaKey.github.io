import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (    
    <nav className="bg-[#111111] fixed w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <NavLink to="/" className="flex items-center">
            <img src="./logo_claro.svg" alt="" className="h-8 mr-3"/>
            <span className="self-center text-zinc-200 text-2xl font-semibold whitespace-nowrap">ArimaKey</span>
        </NavLink>

        <div className="">
          <ul className="flex font-medium p-0 m-0">
            <li> <NavLink to="/" className={ ({ isActive }) => `block py-4 px-3 text-zinc-200 hover:text-zinc-400 + ${isActive ? 'bg-zinc-900' : 'bg-transparent'}` } >Home</NavLink> </li>
            <li> <NavLink to="/skills" className={ ({ isActive }) => `block py-4 px-3 text-zinc-200 hover:text-zinc-400 + ${isActive ? 'bg-zinc-900' : 'bg-transparent'}` } >Habilidades</NavLink> </li>
            <li> <NavLink to="/proyects" className={ ({ isActive }) => `block py-4 px-3 text-zinc-200 hover:text-zinc-400 + ${isActive ? 'bg-zinc-900' : 'bg-transparent'}` } >Proyectos</NavLink> </li>
            <li> <NavLink to="/contact" className={ ({ isActive }) => `block py-4 px-3 text-zinc-200 hover:text-zinc-400 + ${isActive ? 'bg-zinc-900' : 'bg-transparent'}` } >Contacto</NavLink> </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
