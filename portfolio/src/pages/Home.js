import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
    return (
        <motion.div 
          className="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
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
        </motion.div>
    )
}
