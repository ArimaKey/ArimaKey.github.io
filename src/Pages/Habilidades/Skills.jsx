import { Skill } from "./Skill"

export const Skills = () => {
  const tecnologias = FetchTecnologias();

  return (
    <div>
      {
        tecnologias && tecnologias.map( tecnologia => <Skill tecnologia={tecnologia}/>)
      }
    </div>
  )
}
