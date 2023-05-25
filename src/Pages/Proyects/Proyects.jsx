
import { Proyect } from "./Proyect"

export const Proyects = () => {
  return (
    <div className="flex flex-col container max-w-screen-xl mx-auto px-10 pt-16">
      <h1 className="animate__animated animate__fadeIn self-center mx-10 text-4xl font-bold text-zinc-200 mt-3 mb-5">PROYECTOS</h1>
      <div className="grid grid-cols-2 gap-4 ">
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
      </div>  
    </div>
  )
}
