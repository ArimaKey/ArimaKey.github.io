import { NavLink } from "react-router-dom"

export const NavBar = () => {

  const menu = () => {
    var btn_menu = document.getElementById("menuItem");
    btn_menu.classList.toggle("hidden");
  }

  return (    
    <nav className="bg-[#111111] fixed w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <NavLink to="/" className="flex items-center">
            <img src="./logo_claro.svg" alt="" className="h-8 mx-3 lg:mr-3" />
            <span className="self-center text-zinc-200 text-2xl font-semibold whitespace-nowrap my-3">ArimaKey</span>
        </NavLink>

        <div className="">
          <ul className="flex flex-col md:flex-row font-medium p-0 my-0 sm:mx-3">
            <li> <NavLink to="/" className={ ({ isActive }) => `hidden md:block md:w-auto py-4 px-3 text-zinc-200 hover:text-zinc-400 + ${isActive ? 'bg-zinc-900' : 'bg-transparent'}` } >Home</NavLink> </li>
            <li> <NavLink to="/skills" className={ ({ isActive }) => `hidden md:block py-4 px-3 text-zinc-200 hover:text-zinc-400 + ${isActive ? 'bg-zinc-900' : 'bg-transparent'}` } >Habilidades</NavLink> </li>
            <li> <NavLink to="/proyects" className={ ({ isActive }) => `hidden md:block py-4 px-3 text-zinc-200 hover:text-zinc-400 + ${isActive ? 'bg-zinc-900' : 'bg-transparent'}` } >Proyectos</NavLink> </li>
            <li> <NavLink to="/contact" className={ ({ isActive }) => `hidden md:block py-4 px-3 text-zinc-200 hover:text-zinc-400 + ${isActive ? 'bg-zinc-900' : 'bg-transparent'}` } >Contacto</NavLink> </li>
          </ul>
        </div>
        <button className="md:hidden" onClick={menu}>
          <img src="./icons/menu.svg" alt="" className="w-10 pr-2" />
        </button>        
      </div>

      <div className="hidden" id="menuItem">
        <ul className="h-auto md:hidden flex flex-col font-medium p-0 my-0 text-center rounded-xl">
          <li> <NavLink onClick={menu} to="/" className={ ({ isActive }) => `block rounded-xl py-4 w-full text-zinc-200 hover:text-zinc-400 + ${isActive ? 'bg-zinc-900' : 'bg-transparent'}` } >Home</NavLink> </li>
          <li> <NavLink onClick={menu} to="/skills" className={ ({ isActive }) => `block rounded-xl py-4 w-full text-zinc-200 hover:text-zinc-400 + ${isActive ? 'bg-zinc-900' : 'bg-transparent'}` } >Habilidades</NavLink> </li>
          <li> <NavLink onClick={menu} to="/proyects" className={ ({ isActive }) => `block rounded-xl py-4 w-full text-zinc-200 hover:text-zinc-400 + ${isActive ? 'bg-zinc-900' : 'bg-transparent'}` } >Proyectos</NavLink> </li>
          <li> <NavLink onClick={menu} to="/contact" className={ ({ isActive }) => `block rounded-xl py-4 w-full text-zinc-200 hover:text-zinc-400 + ${isActive ? 'bg-zinc-900' : 'bg-transparent'}` } >Contacto</NavLink> </li>
        </ul>
      </div>
    </nav>
  )
}
