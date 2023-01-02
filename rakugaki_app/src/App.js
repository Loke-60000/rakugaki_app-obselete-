import Home from './pages/Home';
import MainApp from './pages/MainApp';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate();
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/MainApp" element={<MainApp />} />
            </Routes>
        </>
    
    )
};

export default App;