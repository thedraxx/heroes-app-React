import React, { useContext } from 'react'
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const NavBar = () => {

    //Traemos el contexto de autenticación usando useContext
    const { user, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    // al hacer click nos redirige a la ruta de login y usamos el dispatch para ejecutar el logout 
    const handleLogout = () => {

        const action = { type: types.logout }
        dispatch(action)

        navigate('/login', { replace: true });
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            className="nav-item nav-link "
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            className="nav-item nav-link"
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink
                            className="nav-item nav-link"
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className='nav-item nav-link text-info'>
                            {user.name}
                        </span>
                        <NavLink
                            className="nav-item nav-link"
                            to="/login"
                            onClick={handleLogout}
                        >
                            Logout
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </>
    )
}
