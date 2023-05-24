import { Link } from "react-router-dom"

export const Proyect = () => {
  return (
    <div className="flex flex-col max-w-screen-sm bg-[#1e1e1e] rounded-lg p-7 shadow-xl animate__animated animate__fadeIn">
        <h1 className="text-zinc-200 font-bold text-2xl ">CodeConnect</h1>
        <p className="text-zinc-300 mb-3">CodeConnect es una plataforma en línea diseñada para conectar a programadores de todos los niveles y brindarles oportunidades de aprendizaje, colaboración y crecimiento profesional. Nuestro objetivo es crear un ecosistema virtual donde los programadores puedan mejorar sus habilidades, compartir conocimientos y participar en proyectos conjuntos.</p>
        <Link to="/proyects" className="justify-center mx-auto text-center bg-transparent px-2 py-1 border-2 w-20 border-zinc-200 rounded text-zinc-200 hover:bg-zinc-200 hover:border-transparent hover:text-zinc-950" > Link</Link>
  </div>
  )
}
