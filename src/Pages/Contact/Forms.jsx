import { useState } from "react"


export const Forms = () => {

  return (
    <div className="flex flex-col justify-center bg-zinc-900 shadow-xl p-10 max-w-screen-lg mx-auto rounded-x">
      <div className="flex flex-col md:items-center md:self-center md:flex-row animate__animated animate__fadeIn w-full md:mx-auto"> 
        <div>
          <img src="./perfil.jpg" alt="" className="rounded-full h-40 w-40 shadow-xl"/>
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

        <section className="flex flex-col max-w-screen-sm">
          <h2 className="text-center text-zinc-200 font-bold mb-2">CONTACTAME!</h2>
          <div class="relative z-0 w-full mb-6 group">
            <input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-zinc-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-7 peer-focus:-translate-y-6">Email address</label>
          </div>
        </section>
      </div>
    </div>
  )
}
