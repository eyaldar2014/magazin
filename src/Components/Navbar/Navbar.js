import react from 'react'
import { Link } from "react-router-dom";


const Navbar =(props)=>{




    return <>
        <nav className={'navbarContainer'}>

            <ul className={'navbar'}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/engine">Engine</Link>
                </li>
                <li>
                    <Link to="/magazine">Magazine</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li><Link to="/contact">Contact</Link>
                </li>
            </ul>

        </nav>

    </>
}


export default Navbar