export const Proyect = ({ icon, information, title, tecnologias, link_github, link_proyect }) => {
  return (
    <div className="animate__animated animate__fadeIn flex flex-col max-w-screen-sm bg-[#1e1e1e] rounded-lg p-7 shadow-xl">
        <h1 className="text-zinc-200 font-bold text-2xl text-center mb-2">{ title }</h1>
        <div className="flex flex-row">
          <p className="text-zinc-300 mb-3">{ information }</p>
          <img src={ icon } className="w-28 h-28 self-center" />
        </div>

        <div className="flex flex-row gap-8 mx-auto mt-0 mb-5">

        </div>
        <div>
          <a href={ link_github } target="_blank" className="transition-colors delay-75 justify-center mx-auto text-center bg-transparent px-2 py-1 border-2 w-20 border-zinc-200 rounded text-zinc-200 hover:bg-zinc-200 hover:border-transparent hover:text-zinc-950" > Link</a>
          <a href={ link_proyect } target="_blank" className="transition-colors delay-75 justify-center mx-auto text-center bg-transparent px-2 py-1 border-2 w-20 border-zinc-200 rounded text-zinc-200 hover:bg-zinc-200 hover:border-transparent hover:text-zinc-950" > Link</a>
        </div>
  </div>
  )
}
