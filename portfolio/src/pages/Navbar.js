import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navigation">
            <input type="checkbox" name="" id="nav-toggler" class="fas fa-bars"/>
            <nav id="nav" class="navbar">
                <ul>
                   <li><Link to="/">Home </Link><span></span></li>
                    <li><Link to="/about">About</Link><span></span></li>
                    <li><Link to="/projects">Projects</Link><span></span></li>
                    <li><Link to="/contact">Contact</Link><span></span></li>
                </ul>
            </nav> 
        </div>
        
    )
}