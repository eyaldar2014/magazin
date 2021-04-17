// import react from 'react'

import { Link } from "react-router-dom";
import { FiHome ,  } from "react-icons/fi";
import { BiCar , BiNews } from "react-icons/bi";
import { GrInfo , GrPhone } from "react-icons/gr";

const Navbar =()=>{

    return <>
        <nav className={'navbarContainer'}>

            <ul className={'navbar'}>
                <li>
                    <Link to="/home" className="navItem"><FiHome /> Home</Link>
                </li>                
                <li>
                    <Link to="/engine" className="navItem"><BiCar /> Engine</Link>
                </li>
                <li>
                    <Link to="/magazine" className="navItem"><BiNews /> Magazine</Link>
                </li>
                <li>
                    <Link to="/about" className="navItem"><GrInfo /> About</Link>
                </li>
                <li><Link to="/contact" className="navItem"><GrPhone /> Contact</Link>
                </li>
            </ul>

        </nav>

    </>
}


export default Navbar