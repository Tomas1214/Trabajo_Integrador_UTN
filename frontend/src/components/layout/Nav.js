import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li>< NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined }>Home</ NavLink></li>
                    <li>< NavLink to="/menu" className={({ isActive }) => isActive ? "activo" : undefined }>Menu</ NavLink></li>
                    <li>< NavLink to="/promociones" className={({ isActive }) => isActive ? "activo" : undefined }>Promociones</ NavLink></li>
                    <li>< NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined }>Nosotros</ NavLink></li>
                    <li>< NavLink to="/pedidos" className={({ isActive }) => isActive ? "activo" : undefined }>Pedidos</ NavLink></li>
                    <li>< NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined }>Contacto</ NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;