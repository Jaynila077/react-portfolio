import '../Css/projects.css'
import { Navbar } from "./Navbar"
import { Card } from "../componets/Card"
import { Card2 } from "../componets/Card2"
import { Card3 } from "../componets/Card3"
import { Card4 } from "../componets/Card4"
import { motion } from "framer-motion"

export const Projects = () => {
    return (
        <motion.div className="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
          
          <div className="hero">
            <h1 id="jay">Welcome,</h1>
            <h2>to showcase of <br /> my personal <span id="jay">projects</span> </h2>
          </div>
          <div className="projectItems">
            <section className='project1'>
                <div className="content">
                <button></button>
                <h1>Portfolio</h1>
                <p>  This is the website you are currently on.
                   My personal <br /> portfolio website  built with React.js.
                  This is my <br /> first project using React.js.
                 I used  Framer Motion <br /> for the animations and React Router for the routing.  
                  </p>
                </div>
                <Card />
            </section>
          </div>
        </motion.div>    
    )
}