export const Contact = () => {
  return (
    <div className="flex flex-col bg-zinc-900 shadow-xl mb-10">
      <div className="items-center self-center flex flex-row max-w-screen-lg animate__animated animate__fadeIn mx-10">
        <img src="./perfil.jpg" alt="" className="rounded-full h-40 justify-center mx-auto my-10 mr-8 shadow-xl"/>
        <div className="ml-8">
          <h2 className="font-bold text-3xl text-zinc-200 mb-2">ArimaKey</h2>
          <p className="text-zinc-300">La paciencia es mi virtud principal. Me encanta esperar horas interminables para que se compile el código, solo para descubrir que un simple signo de igualdad estaba fuera de lugar. Pero hey, al menos tengo tiempo para disfrutar de una taza de café frío y reflexionar sobre las ironías de la vida.</p>

          <div className="flex my-3">
            <button className="flex justify-center text-center bg-[#24292F] px-5 py-2 rounded text-zinc-200 hover:bg-[#24292F]/90 mr-10 shadow-md">
              <img src="./social/Github.png" alt="" className="w-5 mx-auto"/>
              <p className="ml-2">Arima_Key</p>
            </button>

            <button className="flex justify-center text-center bg-[#24292F] px-5 py-2 rounded text-zinc-200 hover:bg-[#24292F]/90 mr-10 shadow-md ">
              <img src="./social/Instagram.png" alt="" className="w-5 mx-auto"/>
              <p className="ml-2">Arima_Key</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
