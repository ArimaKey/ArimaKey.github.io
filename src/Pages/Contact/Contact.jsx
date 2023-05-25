export const Contact = () => {
  return (
    <div className="flex flex-col bg-zinc-900 shadow-xl pt-10 pb-10 md:pb-0">
      <div className="flex flex-col  md:items-center md:self-center md:flex-row max-w-screen-lg animate__animated animate__fadeIn mx-10">
        <img src="./perfil.jpg" alt="" className="rounded-full h-40 w-40 my-10 mx-auto md:mr-8 shadow-xl"/>
        <div className="md:ml-8">
          <h2 className="font-bold text-center md:text-left text-3xl text-zinc-200 mb-2">ArimaKey</h2>
          <p className="text-zinc-300 text-center md:text-left">La paciencia es mi virtud principal. Me encanta esperar horas interminables para que se compile el código, solo para descubrir que un simple signo de igualdad estaba fuera de lugar. Pero hey, al menos tengo tiempo para disfrutar de una taza de café frío y reflexionar sobre las ironías de la vida.</p>


          <div className="flex items-center gap-5 justify-center md:justify-start mt-3">
            <a href="https://github.com/ArimaKey" target="_blank" className="flex justify-center transition ease-out delay-75 text-center bg-[#24292F] px-5 py-2 rounded text-zinc-200 hover:bg-[#24292F]/90 shadow-md hover:scale-110 active:scale-90 ">
              <img src="./social/Github.png" alt="" className="w-5 h-5 mx-auto mt-0.5"/>
              <p className="ml-2">GitHub</p>
            </a>

            <a href="https://www.instagram.com/arima_key/" target="_blank" className="flex justify-center transition ease-out delay-75 text-center bg-[#24292F] px-5 py-2 rounded text-zinc-200 hover:bg-[#24292F]/90 shadow-md hover:scale-110 active:scale-90 ">
              <img src="./social/Instagram.png" alt="" className="w-5 h-5 mx-auto mt-0.5"/>
              <p className="ml-2">Instagram</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
