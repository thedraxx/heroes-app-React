import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

export const PublicRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    // User = true (logeado)  o  user = false (no logeado)
    //Children es el componente que se va a renderizar, el hijo de public route
    return user.logged ? <Navigate to="/" /> : children;
}
