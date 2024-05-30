import CartWidget from "./CartWidget";
import '../CSS/Navbar.css'
import { Link } from 'react-router-dom'
import '../asset/logo.jpeg'

function Navbar () {

    return(
        <>
        <header>
            <nav className="navbar">
                <ul >
                    <li><Link className="menu" to='/'>
                        Todos
                        </Link></li>
                    <li><Link className="" to='/category/Apple'>Apple</Link></li>
                    <li><Link className="" to='/category/Samsung'>Samsung</Link></li>
                    <li><Link className="" to='/'>Contactenos</Link></li>
                    <CartWidget/>
                </ul>
            </nav>
        </header>
        </>
        
    )
}

export default Navbar;
