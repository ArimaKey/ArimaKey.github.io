import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Proyects } from "../Pages/Proyects/Proyects";
import { Page404 } from "../404/Page404";
import { Skills } from "../Pages/Habilidades/Skills";
import { Forms } from "../Pages/Contact/Forms";


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Forms />} />
            <Route path="/proyects" element={<Proyects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path ="/*" element={ <Page404/> }/>
        </Routes>
    )
}
