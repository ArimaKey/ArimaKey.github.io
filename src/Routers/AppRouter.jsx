import { BrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home/Home";


export const router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
