import { Navbar } from "./Navbar"
import { Card } from "../componets/Card"
import { Card2 } from "../componets/Card2"
import { Card3 } from "../componets/Card3"
import { Card4 } from "../componets/Card4"

export const Projects = () => {
    return (
        <div className="projects">
            <Navbar />
            <h1>Projects</h1>
            <ul className="ul">
                <li><Card/></li>
                <li><Card2/></li>
                <li><Card3/></li>
                <li><Card4/></li>
            </ul>
        </div>    
    )
}