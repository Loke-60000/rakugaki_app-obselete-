import logo from '../assets/logo.svg';
import '../css/navbar.css'
import '../custom.scss'

function NavBanner() {
    return(
        <>
        <nav class="navbar navbar-primary bg-primary">
            <div class="container-fluid">
                <img class="logo" src={logo} alt=""></img>
            </div>
        </nav>
        </>
    )
};

export default NavBanner;