import { FetchMainData } from '../../Hooks/FetchData';
import { Contact } from '../Contact/Contact';
import { Proyects } from '../Proyects/Proyects';
import { Link } from 'react-router-dom';

export const Home = () => {
  const mainData = FetchMainData();

  return (
    <>
      { mainData && <Contact name={ mainData.docs[0].data().name } img={ mainData.docs[0].data().img } description={ mainData.docs[0].data().description } /> }
      <Proyects />


      <div className='flex'>
          <Link to="/proyects" className="justify-center mx-auto text-center bg-transparent px-2 py-1 border-2 w-20 border-zinc-200 rounded text-zinc-200 hover:bg-zinc-200 hover:border-transparent hover:text-zinc-950 my-10" > Ver más</Link>
      </div>
    </>
  );
};  
