export const Proyect = () => {
  return (
    <div className="flex flex-col max-w-screen-sm bg-[#1e1e1e] rounded-lg p-7 shadow-xl animate__animated  animate__fadeIn">
        <h1 className="text-zinc-200 font-bold text-2xl text-center mb-2">CodeConnect</h1>
        <div className="flex flex-row">
          <p className="text-zinc-300 mb-3">CodeConnect es una plataforma en línea diseñada para conectar a programadores de todos los niveles y brindarles oportunidades de aprendizaje, colaboración y crecimiento profesional.</p>
          <img src="./tiktok.webp" className="w-28 h-28 self-center" alt="" />
        </div>

        <div className="flex flex-row gap-8 mx-auto mt-0 mb-5">
          <img className="w-8" src="./tecnologias/html.png"/>
          <img className="w-8" src="./tecnologias/javascript.png" />
          <img className="w-8" src="./tecnologias/react.png" />
          <img className="w-8" src="./tecnologias/tailwindcss.png" />
        </div>
        <a href="https://github.com/" target="_blank" className="transition-colors delay-75 justify-center mx-auto text-center bg-transparent px-2 py-1 border-2 w-20 border-zinc-200 rounded text-zinc-200 hover:bg-zinc-200 hover:border-transparent hover:text-zinc-950" > Link</a>
  </div>
  )
}
