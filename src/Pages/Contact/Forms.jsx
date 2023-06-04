import { useState } from "react"


export const Forms = () => {
  const {} = useState()

  return (
    <div className="flex flex-col items-center justify-items-center">
      <div className="flex flex-col justify-center bg-zinc-900 shadow-xl p-10 max-w-screen-lg mx-auto rounded-x">
        <div className="flex flex-col md:items-center md:self-center md:flex-row animate__animated animate__fadeIn"> 
          <img src="./perfil.jpg" alt="" className="rounded-full h-40 w-40 shadow-xl mr-10"/>
        <section className="flex flex-col max-w-screen-sm">
          <h2 className="text-center text-zinc-200 font-bold mb-2">CONTACTAME!</h2>
          <div class="relative z-0 w-full mb-6 group">
            <input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-zinc-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-7 peer-focus:-translate-y-6">Email address</label>
          </div>
          </section>
        </div>
      </div>
    </div>
  )
}
