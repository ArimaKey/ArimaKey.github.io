import { FetchTecnologias } from "../../Hooks/FetchData";
import { Skill } from "./Skill"

export const Skills = () => {
  const tecnologias = FetchTecnologias();

  return (
    <div className="flex flex-col pt-10">
      <h1 className="text-center text-zinc-200 text-4xl font-bold">TECNOLOGIAS</h1>
      <div className="flex justify-center gap-8 mt-8">
        {
          tecnologias && tecnologias.docs.map( tecnologia => <Skill key={ tecnologia.data().name } {...tecnologia.data()}/>)
        }
      </div>
    </div>
  )
}
