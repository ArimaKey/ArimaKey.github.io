import { Link } from 'react-router-dom'
import { Contact } from '../Contact/Contact'
import { Proyects } from '../Proyects/Proyects'

export const Home = () => {
  return (
    <>
      <Contact />
      <Proyects />
      <div className='flex'>
        <Link to="/proyects" className="justify-center mx-auto text-center bg-transparent px-2 py-1 border-2 w-20 border-zinc-200 rounded text-zinc-200 hover:bg-zinc-200 hover:border-transparent hover:text-zinc-950 my-10" > Ver más</Link>
      </div>
    </>
  )
}