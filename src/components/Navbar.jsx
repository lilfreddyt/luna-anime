import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/luna-logo.png"
import fric from "../assets/fric.jpg"

function Navbar() {
    return(
        <nav className="navbar">
            <Link to="/">
                <img id ="logo" src={ logo } alt="logo"></img>
            </Link>
            <img id="fric" src={fric} alt="fric"></img>
            <Link to="/your-anime">Your Anime</Link>
        </nav>
    );
}

export default Navbar