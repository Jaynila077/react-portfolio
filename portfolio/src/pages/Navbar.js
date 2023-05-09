import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                <Link to="/">Home</Link>    
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                </ul>
            </nav>
        </div>
        
    )
}