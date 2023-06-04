import { FetchTecnologias } from "../../Hooks/FetchData";
import { Skill } from "./Skill"

export const Skills = () => {
  const tecnologias = FetchTecnologias();

  return (
    <div>
      {
        tecnologias && tecnologias.docs.map( tecnologia => <Skill key={ tecnologia.data().name } {...tecnologia.data()}/>)
      }
    </div>
  )
}
