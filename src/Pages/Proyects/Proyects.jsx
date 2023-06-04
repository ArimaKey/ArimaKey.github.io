import { useEffect, useState } from "react"
import { Proyect } from "./Proyect"
import { FetchData } from "../../Hooks/FetchData"

export const Proyects = () => {  
  const data = FetchData();
  
  return (
    <div className="flex flex-col container max-w-screen-xl mx-auto px-3 md:px-10 pt-16">
      <h1 className="self-center mx-10 text-4xl font-bold text-zinc-200 mt-3 mb-5">PROYECTOS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto ">
        {
          data && data.docs.map( proyecto => (
            <Proyect key={proyecto.data().title} {...proyecto.data()}/>
          ))
        }
      </div>  
    </div>
  )
}
