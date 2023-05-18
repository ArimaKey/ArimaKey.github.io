import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../Pages/Home/Home";
import { Contact } from "../Pages/Contact/Contact";
import { Proyects } from "../Pages/Proyects/Proyects";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/proyects" element={<Proyects />} />
            </Routes>
        </BrowserRouter>
    )
}
