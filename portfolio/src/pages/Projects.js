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
            <Navbar />
            <h1>Projects</h1>
            <ul className="ul">
                <li><Card/></li>
                <li><Card2/></li>
                <li><Card3/></li>
                <li><Card4/></li>
            </ul>
        </motion.div>    
    )
}