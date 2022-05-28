import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const Location = useLocation();

    //Guarda la pagina actual en localstorage
    localStorage.setItem('lastPath', Location.pathname);

    // User = true (logeado)  o  user = false (no logeado)
    //Children es el componente que se va a renderizar, el hijo de private route

    return user.logged ? children : <Navigate to="/login" />;
}
