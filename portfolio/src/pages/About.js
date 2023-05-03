import { Navbar } from "./Navbar"
import { motion } from "framer-motion"


export const About = () => {
    return (
        <motion.div className="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
          <Navbar />

          <h1>About</h1>
        </motion.div>
    )
}