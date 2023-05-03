import { Navbar } from "./Navbar"
import { motion } from "framer-motion"


export const Contact = () => {
    return (
        <motion.div className="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
        <Navbar />
        <h1>Contact</h1>
    </motion.div>
    )
}