import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dataset from "./pages/Dataset";
import Home from "./pages/Home";
import Model from "./pages/Model";
import Review from "./pages/Review";
import Select from "./pages/Select";
import Land from "./pages/Land";
import ErrorPage from "./pages/Error";
import {useSelector} from "react-redux";

function App() {
    const model = useSelector((state) => state.model);
    if (model.name) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Land/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/dataset" element={<Dataset/>}/>
                    <Route path="/review" element={<Review/>}/>
                    <Route path="/select" element={<Select/>}/>
                    <Route path="/model" element={<Model/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    } else {
        return (<BrowserRouter>
                <Routes>
                    <Route path="/" element={<Land/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/model" element={<Model/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
