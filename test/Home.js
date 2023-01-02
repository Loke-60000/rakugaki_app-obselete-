import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return(
        <>
        <h1>1</h1>

        <button onClick={() => navigate('Home2')}>Hey</button>
        </>
    )};

export default Home;