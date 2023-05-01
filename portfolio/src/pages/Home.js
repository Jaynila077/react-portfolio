import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="home">
            <nav>
                <ul>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                </ul>
            </nav>
           <h1 className="one">
            Hi, I'm <span id="jay">Jay</span>
           </h1>
          <p>
           Web Devlopment &amp; <br />
           Data Science Enthusiast
         </p>
        </div>
    )
}